import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../../common/SEO';
import Breadcrumbs from '../../common/Breadcrumbs';
import AuthorReviewer from '../../common/AuthorReviewer';

const FinancialFeasibilityPage = () => {
    useEffect(() => {
        AOS.refresh();
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="Financial Feasibility Study & Project Evaluation | Acharya"
                description="Evaluate new business ventures, capital expansion, ROI, Net Present Value (NPV), and Payback Period with financial feasibility advisory by Acharya."
                canonical="https://acharyaprofessionalaccountants.in/services/business-consulting/financial-feasibility"
            />
            <div className="container mx-auto px-5 md:px-12 lg:px-20 pt-4">
                <Breadcrumbs />
            </div>

            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-16" data-aos="fade-up">
                <div className="max-w-4xl">
                    <span className="text-primary-accent uppercase tracking-[0.2em] text-xs font-semibold">
                        Business Consulting / Financial Feasibility
                    </span>
                    <h1 className="font-montserrat text-3xl md:text-5xl font-bold mt-3 mb-6">
                        Financial Feasibility Studies & <span className="text-primary-accent">Project Evaluation</span>
                    </h1>
                    <p className="text-boulder text-lg leading-relaxed mb-8">
                        Before committing capital to a new venture, branch expansion, or manufacturing facility, a rigorous financial feasibility study is essential. Acharya Professional Accountants conducts comprehensive financial projections, sensitivity analyses, and capital budgeting evaluations to ensure your business investment is economically viable.
                    </p>

                    <AuthorReviewer
                        author="Acharya Advisory & Strategy Practice"
                        reviewer="Chartered Accountant (ICAI)"
                        lastUpdated="September 2026"
                    />

                    <div className="space-y-8 mt-10">
                        <div className="bg-secondary-dark border border-white/5 rounded-2xl p-6 md:p-8">
                            <h2 className="text-xl font-bold text-white mb-4">What Our Feasibility Study Covers</h2>
                            <ul className="space-y-4 text-boulder text-sm md:text-base">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary-accent font-bold">✓</span>
                                    <div>
                                        <strong className="text-white block">Capital Expenditure & Means of Finance</strong>
                                        <span>Detailed estimates of land, building, machinery, pre-operative expenses, and promoter contribution ratios.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary-accent font-bold">✓</span>
                                    <div>
                                        <strong className="text-white block">NPV, IRR & Payback Period Modeling</strong>
                                        <span>Discounted cash flow (DCF) models calculating Net Present Value, Internal Rate of Return (IRR), and capital recovery timelines.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary-accent font-bold">✓</span>
                                    <div>
                                        <strong className="text-white block">Break-Even & Sensitivity Analysis</strong>
                                        <span>Stress-testing project performance against adverse raw material cost increases, sales volume drops, or interest rate fluctuations.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-r from-secondary-dark to-dark-bg border border-primary-accent/20 rounded-2xl p-8 text-center">
                            <h3 className="text-2xl font-bold text-white mb-3">Planning a New Expansion or Investment?</h3>
                            <p className="text-boulder text-sm mb-6 max-w-xl mx-auto">
                                Get a custom financial feasibility report prepared by experienced financial analysts and chartered accountants.
                            </p>
                            <Link to="/contact" className="inline-block bg-primary-accent text-dark-bg font-bold px-8 py-3 rounded-full hover:bg-white transition-colors">
                                Consult on Feasibility Study
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default FinancialFeasibilityPage;
