import React from 'react';
import siteConfig from '../../config/siteConfig';

const AuthorReviewer = ({
    author = "Acharya Tax & Advisory Team",
    reviewer = "Chartered Accountant (ICAI)",
    lastUpdated = "October 2026",
    disclaimer
}) => {
    return (
        <div className="bg-secondary-dark/80 border-l-4 border-primary-accent p-4 md:p-6 rounded-r-xl my-6 text-xs text-boulder space-y-2">
            <div className="flex flex-wrap justify-between items-center gap-2 border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">Written & Reviewed By:</span>
                    <span className="text-primary-accent">{author}</span>
                    <span className="text-white/30">|</span>
                    <span className="text-silver-sand">{reviewer}</span>
                </div>
                <div className="text-silver-sand">
                    <span>Last Updated: {lastUpdated}</span>
                </div>
            </div>
            {disclaimer ? (
                <p className="italic text-white/50 pt-1">{disclaimer}</p>
            ) : (
                <p className="italic text-white/50 pt-1">
                    Disclaimer: This content is for general informational purposes only and does not constitute personalized legal or financial advice. For specific tax filings or audits, consult our qualified accountants directly.
                </p>
            )}
        </div>
    );
};

export default AuthorReviewer;
