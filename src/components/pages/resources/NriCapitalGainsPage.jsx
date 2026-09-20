import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../../common/SEO';
import Breadcrumbs from '../../common/Breadcrumbs';
import AuthorReviewer from '../../common/AuthorReviewer';

const NriCapitalGainsPage = () => {
    useEffect(() => {
        AOS.refresh();
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="NRI Capital Gains Tax on Property Sale in India | Sec 54 & 54EC Guide"
                description="Guide on Long-Term Capital Gains (LTCG) tax for NRIs selling property in India. Section 54 reinvestment, 54EC bonds & Section 195 TDS mitigation."
                canonical="https://acharyaprofessionalaccountants.in/resources/nri-tax/capital-gains"
            />
            <div className="container mx-auto px-5 md:px-12 lg:px-20 pt-4">
                <Breadcrumbs />
            </div>

            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-16" data-aos="fade-up">
                <div className="max-w-4xl">
                    <span className="text-primary-accent uppercase tracking-[0.2em] text-xs font-semibold">
                        Resources / NRI Taxation / Capital Gains
                    </span>
                    <h1 className="font-montserrat text-3xl md:text-5xl font-bold mt-3 mb-6">
                        NRI Capital Gains Tax on <span className="text-primary-accent">Property Sale in India</span>
                    </h1>
                    <p className="text-boulder text-lg leading-relaxed mb-8">
                        Selling immovable property in India as a Non-Resident Indian triggers capital gains tax obligations. Understanding holding periods (24 months for land/building), indexation, LTCG tax rates, and tax-saving exemptions under Section 54 and Section 54EC helps save significant tax legally.
                    </p>

                    <AuthorReviewer
                        author="Acharya Capital Gains Practice"
                        reviewer="Chartered Accountant (ICAI)"
                        lastUpdated="September 2026"
                    />

                    <div className="space-y-6 mt-8 text-boulder text-sm md:text-base leading-relaxed">
                        <div className="bg-secondary-dark border border-white/5 rounded-2xl p-6">
                            <h2 className="text-xl font-bold text-white mb-3">1. Short-Term vs Long-Term Capital Gains</h2>
                            <p className="mb-2">
                                • **Short-Term Capital Gain (STCG):** Held for 24 months or less. Taxed as per NRI's applicable income tax slab rates.
                            </p>
                            <p>
                                • **Long-Term Capital Gain (LTCG):** Held for more than 24 months. Taxed at 20% (plus surcharge and cess) with indexation benefit (or applicable revised provisions).
                            </p>
                        </div>

                        <div className="bg-secondary-dark border border-white/5 rounded-2xl p-6">
                            <h2 className="text-xl font-bold text-white mb-3">2. How NRIs Can Save LTCG Tax Legally</h2>
                            <div className="space-y-3">
                                <div>
                                    <strong className="text-white block">Section 54 Exemption:</strong>
                                    <span>Reinvest net capital gains in buying or constructing another residential house in India within specified timelines.</span>
                                </div>
                                <div>
                                    <strong className="text-white block">Section 54EC Exemption (Capital Gain Bonds):</strong>
                                    <span>Invest capital gains up to ₹50 Lakhs in notified NHAI / REC capital gain bonds within 6 months of sale. Lock-in period is 5 years.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-secondary-dark to-dark-bg border border-primary-accent/20 rounded-2xl p-8 text-center mt-10">
                        <h3 className="text-2xl font-bold text-white mb-3">Calculate Your Property Capital Gains & TDS</h3>
                        <p className="text-boulder text-sm mb-6 max-w-xl mx-auto">
                            Our team prepares full capital gains statements, Form 15CA/15CB for outward money transfer, and represents NRIs before tax authorities.
                        </p>
                        <Link to="/contact" className="inline-block bg-primary-accent text-dark-bg font-bold px-8 py-3 rounded-full hover:bg-white transition-colors">
                            Get Capital Gains Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default NriCapitalGainsPage;
