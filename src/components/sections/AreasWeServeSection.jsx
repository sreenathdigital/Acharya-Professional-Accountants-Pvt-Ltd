import React from 'react';
import { Link } from 'react-router-dom';

const AreasWeServeSection = () => {
    const serviceAreas = [
        {
            city: "Kozhikode",
            title: "CA Firm in Kozhikode",
            desc: "Full accounting, GST filing, statutory audit, and NRI tax services from our Mankavu headquarters.",
            link: "/accounting-service-in-kozhikode",
            anchorText: "CA Firm in Kozhikode"
        },
        {
            city: "Kannur",
            title: "Chartered Accountants in Kannur",
            desc: "Accounting, GST return filing, handloom GST advisory, and business setup for Kannur clients.",
            link: "/accounting-service-in-kannur",
            anchorText: "Chartered Accountants in Kannur"
        },
        {
            city: "Malappuram",
            title: "Accounting Services in Malappuram",
            desc: "Tax planning, bookkeeping, GSTR filing, and company compliance across Manjeri, Perinthalmanna, and Tirur.",
            link: "/accounting-service-in-malappuram",
            anchorText: "Accounting Services in Malappuram"
        },
        {
            city: "Wayanad",
            title: "Tax Consultants in Wayanad",
            desc: "GST practitioner services, income tax return filing, and small business accounting in Kalpetta and Bathery.",
            link: "/accounting-service-in-wayanad",
            anchorText: "Tax Consultants in Wayanad"
        },
        {
            city: "Kasaragod",
            title: "GST Services in Kasaragod",
            desc: "GST registration, bookkeeping, internal audits, and trade compliance for Kasaragod and Kanhangad.",
            link: "/accounting-service-in-kasaragod",
            anchorText: "GST Services in Kasaragod"
        },
        {
            city: "Bangalore",
            title: "CA Firm in Bangalore",
            desc: "Startup compliance, ESOP taxation, DPIIT registration, and corporate tax advisory in Indiranagar, Koramangala, and HSR.",
            link: "/accounting-service-in-bangalore",
            anchorText: "CA Firm in Bangalore"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-secondary-dark/30 border-y border-white/5 relative">
            <div className="container mx-auto px-5 md:px-12 lg:px-20">
                <div className="max-w-3xl mb-12" data-aos="fade-up">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="w-8 h-[1px] bg-primary-accent"></span>
                        <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                            Locations & Regional Coverage
                        </span>
                    </div>
                    <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-white mb-4">
                        Areas We Serve Across <span className="text-primary-accent italic">Kerala & Beyond</span>
                    </h2>
                    <p className="text-boulder text-base md:text-lg leading-relaxed">
                        Acharya Professional Accountants provides structured accounting, tax consultation, statutory audits, and financial advisory to businesses and individuals across key commercial hubs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
                    {serviceAreas.map((area, idx) => (
                        <div
                            key={idx}
                            className="bg-secondary-dark border border-white/5 rounded-2xl p-6 hover:border-primary-accent/30 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                        >
                            <div>
                                <span className="text-xs uppercase tracking-wider font-semibold text-primary-accent block mb-2">
                                    ✦ {area.city} Region
                                </span>
                                <h3 className="font-montserrat text-xl font-bold text-white mb-3 group-hover:text-primary-accent transition-colors">
                                    {area.title}
                                </h3>
                                <p className="text-boulder text-sm leading-relaxed mb-6">
                                    {area.desc}
                                </p>
                            </div>
                            <Link
                                to={area.link}
                                className="inline-flex items-center text-sm font-semibold text-primary-accent hover:underline group-hover:translate-x-1 transition-transform"
                            >
                                <span>{area.anchorText}</span>
                                <span className="ml-1">→</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AreasWeServeSection;
