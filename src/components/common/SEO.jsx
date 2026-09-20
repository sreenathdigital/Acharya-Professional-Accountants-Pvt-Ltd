import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import siteConfig from '../../config/siteConfig';

const SEO = ({
    title,
    description,
    keywords,
    canonical,
    ogType = 'website',
    ogImage,
    robots = 'index, follow',
    schema
}) => {
    const location = useLocation();
    const siteUrl = siteConfig.siteUrl;

    // Construct absolute URL for canonical if not provided or relative
    let currentUrl = canonical
        ? canonical
        : `${siteUrl}${location.pathname}`;

    // Normalize canonical URL (ensure HTTPS and siteUrl prefix, strip trailing slashes except root)
    if (currentUrl.startsWith('/')) {
        currentUrl = `${siteUrl}${currentUrl}`;
    }
    if (currentUrl.endsWith('/') && currentUrl.length > siteUrl.length + 1) {
        currentUrl = currentUrl.slice(0, -1);
    }

    // Default fallback image
    const defaultImage = `${siteUrl}/images/Acharya-Professional-Accountants-OG-image.webp`;
    const absoluteImage = ogImage
        ? (ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`)
        : defaultImage;

    const fullTitle = title
        ? (title.includes('Acharya') ? title : `${title} | Acharya Professional Accountants`)
        : 'Acharya Professional Accountants | CA Firm & Tax Consultant in Kozhikode';

    const schemaList = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
    const scriptProps = schemaList.map(s => ({
        type: 'application/ld+json',
        innerHTML: JSON.stringify(s)
    }));

    return (
        <Helmet script={scriptProps}>
            {/* Basic Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="robots" content={robots} />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:site_name" content={siteConfig.siteName} />
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:image" content={absoluteImage} />
            <meta property="og:image:secure_url" content={absoluteImage} />
            <meta property="og:image:alt" content={fullTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={absoluteImage} />
        </Helmet>
    );
};

export default SEO;

