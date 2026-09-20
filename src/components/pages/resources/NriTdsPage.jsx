import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../../common/SEO';
import Breadcrumbs from '../../common/Breadcrumbs';
import AuthorReviewer from '../../common/AuthorReviewer';

const NriTdsPage = () => {
    useEffect(() => {
        AOS.refresh();
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="Section 195 NRI TDS & Form 13 Lower Deduction Certificate Guide"
                description="Learn how to obtain a Section 195 Form 13 Lower TDS Certificate to avoid 20%-30% excessive tax withholding on property sales and rental income in India."
                canonical="https://acharyaprofessionalaccountants.in/resources/nri-tax/tds"
            />
            <div className="container mx-auto px-5 md:px-12 lg:px-20 pt-4">
                <Breadcrumbs />
            </div>

            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-16" data-aos="fade-up">
                <div className="max-w-4xl">
                    <span className="text-primary-accent uppercase tracking-[0.2em] text-xs font-semibold">
                        Resources / NRI Taxation / Section 195 TDS
                    </span>
                    <h1 className="font-montserrat text-3xl md:text-5xl font-bold mt-3 mb-6">
                        Section 195 TDS & <span className="text-primary-accent">Form 13 Lower Deduction Certificate</span>
                    </h1>
                    <p className="text-boulder text-lg leading-relaxed mb-8">
                        When an NRI sells a property or earns rental income in India, buyers and tenants are required to deduct TDS under Section 195 at the maximum marginal rate (up to 23.92% on property sales or 31.2% on rent). Applying for a Section 195 Form 13 Lower Deduction Certificate allows you to reduce TDS to your actual tax liability.
                    </p>

                    <AuthorReviewer
                        author="Acharya International Tax Practice"
                        reviewer="Chartered Accountant (ICAI)"
                        lastUpdated="September 2026"
                    />

                    <div className="space-y-6 mt-8 text-boulder text-sm md:text-base leading-relaxed">
                        <div className="bg-secondary-dark border border-white/5 rounded-2xl p-6">
                            <h2 className="text-xl font-bold text-white mb-3">Why Form 13 is Critical for Property Sellers</h2>
                            <p className="mb-3">
                                When a resident buyer purchases property from an NRI, Section 195 requires deducting 20% + surcharge + cess on the **total sale price**, NOT on the capital gain. For example, if you sell property for ₹1 Crore with a capital gain of only ₹10 Lakhs, the buyer will withhold over ₹20 Lakhs in TDS!
                            </p>
                            <p>
                                By filing **Form 13** with the Assessing Officer (IT Department) before execution of the sale deed, the officer issues a certificate directing the buyer to deduct TDS only on the actual capital gain amount (or at zero rate if fully exempt under Section 54/54EC).
                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-secondary-dark to-dark-bg border border-primary-accent/20 rounded-2xl p-8 text-center mt-10">
                        <h3 className="text-2xl font-bold text-white mb-3">Selling Property in India?</h3>
                        <p className="text-boulder text-sm mb-6 max-w-xl mx-auto">
                            Acharya handles end-to-end Form 13 applications, capital gains calculation, Form 15CA/CB remittance clearance, and ITR filings.
                        </p>
                        <Link to="/contact" className="inline-block bg-primary-accent text-dark-bg font-bold px-8 py-3 rounded-full hover:bg-white transition-colors">
                            Apply for Lower TDS Certificate
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default NriTdsPage;
