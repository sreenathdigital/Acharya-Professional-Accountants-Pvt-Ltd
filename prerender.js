import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { cityContent } from './src/data/locationData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');

const routes = [
    '/',
    '/accounting-service-in-kozhikode',
    '/about',
    '/services',
    '/services/accounting',
    '/services/accounting/bookkeeping',
    '/services/accounting/financial-statements',
    '/services/accounting/cash-flow',
    '/services/accounting/management-reports',
    '/services/accounting/reconciliations',
    '/services/taxation',
    '/services/taxation/tds-tcs',
    '/services/taxation/tax-planning',
    '/services/taxation/notice-responses',
    '/services/auditing',
    '/services/gst',
    '/services/business-consulting',
    '/services/advisory',
    '/services/business-loans',
    '/courses',
    '/careers',
    '/contact',
    '/calculator',
    '/finance-career-thudangam',
    '/thudangam',
];

// Helper to extract top-level keys from JS/JSX data files
function extractKeys(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        // Match keys with 4 spaces indentation at start of lines
        const regex = /^ {4}['"]?([a-zA-Z0-9_-]+)['"]?\s*:\s*\{/gm;
        const keys = [];
        let match;
        while ((match = regex.exec(content)) !== null) {
            keys.push(match[1]);
        }
        return keys;
    } catch (e) {
        console.error(`Error reading keys from ${filePath}:`, e);
        return [];
    }
}

// Dynamically add all location routes from locationData.js
Object.keys(cityContent).forEach(key => routes.push(`/accounting-service-in-${key}`));
routes.push('/accounting-service-in-mangaluru');
routes.push('/accounting-service-in-coimbatore');

const gstKeys = extractKeys(path.join(__dirname, 'src', 'data', 'gstServices.jsx'));
gstKeys.forEach(key => routes.push(`/services/gst/${key}`));

const auditKeys = extractKeys(path.join(__dirname, 'src', 'data', 'auditingServices.jsx'));
auditKeys.forEach(key => routes.push(`/services/auditing/${key}`));

const mcaKeys = extractKeys(path.join(__dirname, 'src', 'data', 'mcaServices.jsx'));
mcaKeys.forEach(key => routes.push(`/services/advisory/${key}`));

const loanKeys = extractKeys(path.join(__dirname, 'src', 'data', 'loanDetails.js'));
loanKeys.forEach(key => routes.push(`/services/business-loans/${key}`));

const uniqueRoutes = Array.from(new Set(routes));
console.log(`Loaded ${uniqueRoutes.length} total routes for static pre-rendering.`);

function injectSSR(template, appHtml, helmet) {
    let html = template;

    // Inject rendered React DOM into root element
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    if (helmet) {
        const title = helmet.title ? helmet.title.toString() : '';
        const meta = helmet.meta ? helmet.meta.toString() : '';
        const link = helmet.link ? helmet.link.toString() : '';
        const script = helmet.script ? helmet.script.toString() : '';
        const style = helmet.style ? helmet.style.toString() : '';
        const htmlAttrs = helmet.htmlAttributes ? helmet.htmlAttributes.toString() : '';
        const bodyAttrs = helmet.bodyAttributes ? helmet.bodyAttributes.toString() : '';

        if (htmlAttrs) {
            html = html.replace('<html', `<html ${htmlAttrs}`);
        }

        if (bodyAttrs) {
            html = html.replace('<body', `<body ${bodyAttrs}`);
        }

        if (title) {
            html = html.replace(/<title[^>]*>.*?<\/title>/i, title);
        }

        const headContent = [meta, link, script, style].filter(Boolean).join('\n');
        if (headContent) {
            html = html.replace('</head>', `${headContent}\n</head>`);
        }
    }

    return html;
}

async function prerender() {
    console.log('Starting static SSR pre-rendering (pure Node.js, zero Puppeteer)...');

    const templatePath = path.join(distDir, 'index.html');
    if (!fs.existsSync(templatePath)) {
        throw new Error(`dist/index.html not found. Please run "vite build" before pre-rendering.`);
    }

    const template = fs.readFileSync(templatePath, 'utf8');

    // Create Vite server in SSR mode to transpile and load entry-server.jsx
    const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'custom'
    });

    try {
        const { render } = await vite.ssrLoadModule('./src/entry-server.jsx');

        let renderedCount = 0;
        for (const route of uniqueRoutes) {
            try {
                const { appHtml, helmet } = render(route);
                const html = injectSSR(template, appHtml, helmet);

                if (route === '/') {
                    fs.writeFileSync(templatePath, html);
                } else {
                    const filePath = path.join(distDir, route.substring(1), 'index.html');
                    fs.mkdirSync(path.dirname(filePath), { recursive: true });
                    fs.writeFileSync(filePath, html);
                }
                renderedCount++;
            } catch (e) {
                console.error(`Error pre-rendering route ${route}:`, e);
            }
        }

        console.log(`Successfully pre-rendered ${renderedCount}/${uniqueRoutes.length} static route HTML files.`);
    } finally {
        await vite.close();
    }
}

prerender().then(() => {
    console.log('Pre-rendering completed successfully.');
    process.exit(0);
}).catch(err => {
    console.error('Fatal pre-rendering error:', err);
    process.exit(1);
});
