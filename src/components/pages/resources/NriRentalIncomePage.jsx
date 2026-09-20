import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../../common/SEO';
import Breadcrumbs from '../../common/Breadcrumbs';
import AuthorReviewer from '../../common/AuthorReviewer';

const NriRentalIncomePage = () => {
    useEffect(() => {
        AOS.refresh();
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="NRI Rental Income Tax Guide | Section 195 TDS & Deductions in India"
                description="Complete guide on how NRI rental income is taxed in India. 30% standard deduction, Section 195 TDS withholding, TAN requirements & tax filing."
                canonical="https://acharyaprofessionalaccountants.in/resources/nri-tax/rental-income"
            />
            <div className="container mx-auto px-5 md:px-12 lg:px-20 pt-4">
                <Breadcrumbs />
            </div>

            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-16" data-aos="fade-up">
                <div className="max-w-4xl">
                    <span className="text-primary-accent uppercase tracking-[0.2em] text-xs font-semibold">
                        Resources / NRI Taxation / Rental Income
                    </span>
                    <h1 className="font-montserrat text-3xl md:text-5xl font-bold mt-3 mb-6">
                        Taxation of <span className="text-primary-accent">NRI Rental Income in India</span>
                    </h1>
                    <p className="text-boulder text-lg leading-relaxed mb-8">
                        Non-Resident Indians owning residential or commercial property in Kerala or elsewhere in India are liable to pay income tax on rental yields under the Income Tax Act, 1961. This practical guide breaks down Section 195 TDS requirements, available deductions, and how to avoid double taxation.
                    </p>

                    <AuthorReviewer
                        author="Acharya International Tax Advisory"
                        reviewer="Chartered Accountant (ICAI)"
                        lastUpdated="September 2026"
                    />

                    <div className="space-y-6 mt-8 text-boulder text-sm md:text-base leading-relaxed">
                        <div className="bg-secondary-dark border border-white/5 rounded-2xl p-6">
                            <h2 className="text-xl font-bold text-white mb-3">1. How Rental Income is Taxed for NRIs</h2>
                            <p className="mb-3">
                                Rental income received from property situated in India is treated as income accruing or arising in India, regardless of whether the rent is deposited into an NRO bank account in India or directly remitted to an overseas account.
                            </p>
                            <div className="p-4 bg-dark-bg/60 rounded-xl border border-white/5 text-xs text-white/80 space-y-1">
                                <strong className="text-primary-accent block text-sm mb-1">Calculation Formula:</strong>
                                <p>Gross Annual Rent Received</p>
                                <p>Less: Municipal / Property Taxes Paid during the year</p>
                                <p>= Net Annual Value (NAV)</p>
                                <p>Less: 30% Standard Deduction under Section 24(a)</p>
                                <p>Less: Home Loan Interest Paid under Section 24(b)</p>
                                <p>= Taxable Rental Income</p>
                            </div>
                        </div>

                        <div className="bg-secondary-dark border border-white/5 rounded-2xl p-6">
                            <h2 className="text-xl font-bold text-white mb-3">2. TDS Requirement Under Section 195 (31.2%)</h2>
                            <p className="mb-3">
                                Tenants paying rent to an NRI landlord are legally mandated under Section 195 to deduct TDS at **31.2%** (30% tax + surcharge/cess) before remitting rent. The tenant must obtain a TAN (Tax Deduction and Collection Account Number) and deposit the TDS monthly using Form 281.
                            </p>
                            <p>
                                **Common Problem:** If your total taxable Indian income is below the basic exemption limit (₹2,50,000 / ₹3,00,000), 31.2% TDS is excessive. You can claim a full refund by filing ITR-2 or obtain a Lower TDS Certificate (Form 13).
                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-secondary-dark to-dark-bg border border-primary-accent/20 rounded-2xl p-8 text-center mt-10">
                        <h3 className="text-2xl font-bold text-white mb-3">Have Questions About Your NRI Rental Tax?</h3>
                        <p className="text-boulder text-sm mb-6 max-w-xl mx-auto">
                            Acharya assists NRIs with TAN registration for tenants, Section 195 lower deduction certificates, and yearly ITR filing.
                        </p>
                        <Link to="/contact" className="inline-block bg-primary-accent text-dark-bg font-bold px-8 py-3 rounded-full hover:bg-white transition-colors">
                            Contact NRI Tax Specialist
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default NriRentalIncomePage;
