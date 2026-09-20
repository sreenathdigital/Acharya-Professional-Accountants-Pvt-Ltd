import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import siteConfig from '../../config/siteConfig';

const Breadcrumbs = ({ customCrumbs }) => {
    const location = useLocation();

    let crumbs = customCrumbs;

    if (!crumbs) {
        const pathnames = location.pathname.split('/').filter(x => x);
        crumbs = [{ name: 'Home', path: '/' }];

        let accumulatedPath = '';
        pathnames.forEach((segment) => {
            accumulatedPath += `/${segment}`;
            // Format label nicely
            let label = segment
                .replace(/^accounting-service-in-/, 'CA in ')
                .replace(/-/g, ' ');
            label = label.charAt(0).toUpperCase() + label.slice(1);
            crumbs.push({ name: label, path: accumulatedPath });
        });
    }

    // Build BreadcrumbList JSON-LD Schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": crumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": `${siteConfig.siteUrl}${crumb.path === '/' ? '' : crumb.path}`
        }))
    };

    return (
        <nav aria-label="Breadcrumb" className="py-3 px-4 md:px-0 text-xs md:text-sm text-boulder font-medium">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <ol className="flex flex-wrap items-center gap-2">
                {crumbs.map((crumb, idx) => {
                    const isLast = idx === crumbs.length - 1;
                    return (
                        <li key={idx} className="flex items-center gap-2">
                            {idx > 0 && <span className="text-white/20">/</span>}
                            {isLast ? (
                                <span className="text-primary-accent font-semibold" aria-current="page">
                                    {crumb.name}
                                </span>
                            ) : (
                                <Link to={crumb.path} className="text-silver-sand hover:text-white transition-colors">
                                    {crumb.name}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
