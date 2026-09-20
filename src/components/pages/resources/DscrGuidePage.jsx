import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../../common/SEO';
import Breadcrumbs from '../../common/Breadcrumbs';
import AuthorReviewer from '../../common/AuthorReviewer';

const DscrGuidePage = () => {
    useEffect(() => {
        AOS.refresh();
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="Debt Service Coverage Ratio (DSCR) Guide | Bank Loan Eligibility"
                description="Learn how banks calculate Debt Service Coverage Ratio (DSCR) for term loans. Standard DSCR formulas, ideal ratios (1.5x - 2.0x), and techniques to improve loan approval prospects."
                canonical="https://acharyaprofessionalaccountants.in/services/business-loans/dscr"
            />
            <div className="container mx-auto px-5 md:px-12 lg:px-20 pt-4">
                <Breadcrumbs />
            </div>

            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-16" data-aos="fade-up">
                <div className="max-w-4xl">
                    <span className="text-primary-accent uppercase tracking-[0.2em] text-xs font-semibold">
                        Services / Business Loans / DSCR Guide
                    </span>
                    <h1 className="font-montserrat text-3xl md:text-5xl font-bold mt-3 mb-6">
                        Debt Service Coverage Ratio <span className="text-primary-accent">(DSCR) Calculation Guide</span>
                    </h1>
                    <p className="text-boulder text-lg leading-relaxed mb-8">
                        Debt Service Coverage Ratio (DSCR) is the single most critical financial metric evaluated by credit managers to assess a business's ability to service monthly principal and interest repayments on term loans.
                    </p>

                    <AuthorReviewer
                        author="Acharya Bank Credit Advisory"
                        reviewer="Chartered Accountant (ICAI)"
                        lastUpdated="September 2026"
                    />

                    <div className="space-y-6 mt-8 text-boulder text-sm md:text-base leading-relaxed">
                        <div className="bg-secondary-dark border border-white/5 rounded-2xl p-6">
                            <h2 className="text-xl font-bold text-white mb-3">The Banking DSCR Formula</h2>
                            <div className="bg-dark-bg p-4 rounded-xl font-mono text-primary-accent text-sm md:text-base mb-4 overflow-x-auto">
                                DSCR = (Net Profit after Tax + Depreciation + Interest on Term Loan) / (Interest on Term Loan + Annual Principal Installments)
                            </div>
                            <ul className="space-y-3">
                                <li>• <strong>DSCR &lt; 1.0:</strong> Operating cash flows are insufficient to pay debt obligations. Bank loan will be rejected.</li>
                                <li>• <strong>DSCR 1.25 to 1.50:</strong> Minimum acceptable threshold for most Indian public and private sector banks.</li>
                                <li>• <strong>DSCR 1.50 to 2.0+:</strong> Benchmark range ensuring comfortable repayment capacity and favorable interest rates.</li>
                            </ul>
                        </div>

                        <div className="bg-secondary-dark border border-white/5 rounded-2xl p-6">
                            <h2 className="text-xl font-bold text-white mb-3">How Acharya Optimizes Financial Ratios for Loan Approval</h2>
                            <p className="mb-3">
                                If your proposed project report shows a low DSCR, our financial analysts assist in restructuring term loan tenures, adjusting promoter equity contribution, or reallocating depreciation schedules to present a realistic and bank-compliant credit profile.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-secondary-dark to-dark-bg border border-primary-accent/20 rounded-2xl p-8 text-center mt-10">
                        <h3 className="text-2xl font-bold text-white mb-3">Checking Loan Eligibility for Your Project?</h3>
                        <p className="text-boulder text-sm mb-6 max-w-xl mx-auto">
                            Calculate exact DSCR and debt capacity with our chartered accountant advisory team.
                        </p>
                        <Link to="/contact" className="inline-block bg-primary-accent text-dark-bg font-bold px-8 py-3 rounded-full hover:bg-white transition-colors">
                            Calculate Loan DSCR
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default DscrGuidePage;
