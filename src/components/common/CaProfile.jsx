import React from 'react';
import siteConfig from '../../config/siteConfig';

const CaProfile = ({ customProfile }) => {
    const profile = customProfile || siteConfig.caPartnerProfile;

    // Render ONLY when verified details are provided to adhere to YMYL guidelines
    if (!profile || !profile.isVerified || !profile.name) {
        return (
            <div className="bg-secondary-dark/60 border border-white/5 rounded-2xl p-6 md:p-8 my-8 text-xs text-boulder">
                <div className="flex items-center gap-3 text-primary-accent mb-2">
                    <span className="font-semibold uppercase tracking-wider text-[11px]">✦ Professional Oversight & Ethics</span>
                </div>
                <p>
                    All financial, taxation, and statutory audit services at Acharya Professional Accountants are conducted in strict compliance with the Chartered Accountants Act and ICAI guidelines.
                </p>
            </div>
        );
    }

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": profile.name,
        "jobTitle": profile.designation,
        "worksFor": {
            "@type": "AccountingService",
            "name": siteConfig.legalName,
            "url": siteConfig.siteUrl
        },
        "description": profile.specialization
    };

    return (
        <section className="bg-secondary-dark border border-primary-accent/20 rounded-2xl p-6 md:p-8 my-8 shadow-xl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <div className="flex flex-col md:flex-row items-center gap-6">
                {profile.photoUrl && (
                    <img
                        src={profile.photoUrl}
                        alt={profile.name}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-primary-accent shadow-lg shrink-0"
                        loading="lazy"
                    />
                )}
                <div className="space-y-2 text-center md:text-left">
                    <div className="inline-block px-3 py-1 bg-primary-accent/10 rounded-full text-primary-accent text-xs font-semibold uppercase tracking-wider">
                        ICAI Registered Professional
                    </div>
                    <h3 className="font-montserrat text-xl font-bold text-white">{profile.name}</h3>
                    <p className="text-sm text-silver-sand font-medium">{profile.designation} · {profile.qualification}</p>
                    {profile.icaiMembershipNo && (
                        <p className="text-xs text-boulder font-mono">ICAI Membership No: {profile.icaiMembershipNo}</p>
                    )}
                    <p className="text-xs text-boulder max-w-xl leading-relaxed mt-2">
                        {profile.specialization} ({profile.experienceYears} experience)
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CaProfile;
