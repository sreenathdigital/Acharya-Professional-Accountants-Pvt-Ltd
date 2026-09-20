import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../../common/SEO';
import Breadcrumbs from '../../common/Breadcrumbs';
import AuthorReviewer from '../../common/AuthorReviewer';

const NriTaxHubPage = () => {
    useEffect(() => {
        AOS.refresh();
        window.scrollTo(0, 0);
    }, []);

    const topics = [
        {
            title: "NRI Rental Income Taxation in Kerala",
            desc: "Understand TDS under Section 195 (30%+cess), 30% standard deduction, municipal tax deductions, and lower TDS certificates (Form 13).",
            link: "/resources/nri-tax/rental-income"
        },
        {
            title: "NRI TDS & Form 13 Lower Deduction Certificate",
            desc: "Avoid excessive 20%-30% TDS withholding on property sales and rental payouts by obtaining a Section 195 lower deduction certificate.",
            link: "/resources/nri-tax/tds"
        },
        {
            title: "NRI Capital Gains on Property Sale in India",
            desc: "Long-Term Capital Gains (LTCG) vs Short-Term (STCG), Section 54/54EC exemptions, reinvestment in residential property & capital gain bonds.",
            link: "/resources/nri-tax/capital-gains"
        }
    ];

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="NRI Tax Services in Kerala | NRI ITR, TDS & Property Tax Guide"
                description="Complete NRI tax hub for Non-Resident Indians managing Indian property, rental income, capital gains, DTAA benefits, Form 13 & ITR filing with Acharya."
                canonical="https://acharyaprofessionalaccountants.in/resources/nri-tax"
            />
            <div className="container mx-auto px-5 md:px-12 lg:px-20 pt-4">
                <Breadcrumbs />
            </div>

            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-16" data-aos="fade-up">
                <div className="max-w-4xl">
                    <span className="text-primary-accent uppercase tracking-[0.2em] text-xs font-semibold">
                        Resources / NRI Taxation
                    </span>
                    <h1 className="font-montserrat text-3xl md:text-5xl font-bold mt-3 mb-6">
                        NRI Tax Services & <span className="text-primary-accent">Compliance Hub in Kerala</span>
                    </h1>
                    <p className="text-boulder text-lg leading-relaxed mb-8">
                        Managing Indian tax compliance from abroad requires clear understanding of residential status (Section 6), Double Taxation Avoidance Agreements (DTAA), TDS withholding rules under Section 195, and foreign tax credits. Acharya Professional Accountants provides end-to-end tax support for NRIs living in the GCC, US, UK, and worldwide.
                    </p>

                    <AuthorReviewer
                        author="Acharya International Tax Practice"
                        reviewer="Chartered Accountant (ICAI)"
                        lastUpdated="September 2026"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                        {topics.map((item, idx) => (
                            <div key={idx} className="bg-secondary-dark border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-primary-accent/30 transition-all duration-300">
                                <div>
                                    <h3 className="font-montserrat font-bold text-white text-lg mb-3">{item.title}</h3>
                                    <p className="text-boulder text-xs leading-relaxed mb-4">{item.desc}</p>
                                </div>
                                <Link to={item.link} className="text-xs font-semibold text-primary-accent hover:underline">
                                    Read Detailed Guide →
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="bg-secondary-dark/60 border border-white/5 rounded-2xl p-6 md:p-8 space-y-4">
                        <h2 className="text-xl font-bold text-white">Our NRI Tax Services Range</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-boulder text-sm">
                            <li className="flex items-center gap-2"><span className="text-primary-accent">✓</span> NRI Income Tax Return (ITR-2 / ITR-3)</li>
                            <li className="flex items-center gap-2"><span className="text-primary-accent">✓</span> Section 195 Lower TDS Certificates</li>
                            <li className="flex items-center gap-2"><span className="text-primary-accent">✓</span> DTAA Tax Credit Relief Claims</li>
                            <li className="flex items-center gap-2"><span className="text-primary-accent">✓</span> Property Sale Capital Gains Computation</li>
                            <li className="flex items-center gap-2"><span className="text-primary-accent">✓</span> NRE / NRO Bank Interest Advisory</li>
                            <li className="flex items-center gap-2"><span className="text-primary-accent">✓</span> Repatriation Certificates (Form 15CA & 15CB)</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-r from-secondary-dark to-dark-bg border border-primary-accent/20 rounded-2xl p-8 text-center mt-10">
                        <h3 className="text-2xl font-bold text-white mb-3">Need NRI Tax Assistance from Kerala?</h3>
                        <p className="text-boulder text-sm mb-6 max-w-xl mx-auto">
                            Send your query or property transaction details via WhatsApp or email. Our international tax team handles everything digitally.
                        </p>
                        <Link to="/contact" className="inline-block bg-primary-accent text-dark-bg font-bold px-8 py-3 rounded-full hover:bg-white transition-colors">
                            Book NRI Tax Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default NriTaxHubPage;
