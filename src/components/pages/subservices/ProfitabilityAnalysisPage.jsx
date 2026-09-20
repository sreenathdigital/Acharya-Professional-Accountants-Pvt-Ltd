import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../../common/SEO';
import Breadcrumbs from '../../common/Breadcrumbs';
import AuthorReviewer from '../../common/AuthorReviewer';

const ProfitabilityAnalysisPage = () => {
    useEffect(() => {
        AOS.refresh();
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="Profitability Analysis & Margin Optimization | Acharya"
                description="Identify unprofitable product lines, optimize gross margins, control fixed costs, and improve business net profit margins with Acharya."
                canonical="https://acharyaprofessionalaccountants.in/services/business-consulting/profitability-analysis"
            />
            <div className="container mx-auto px-5 md:px-12 lg:px-20 pt-4">
                <Breadcrumbs />
            </div>

            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-16" data-aos="fade-up">
                <div className="max-w-4xl">
                    <span className="text-primary-accent uppercase tracking-[0.2em] text-xs font-semibold">
                        Business Consulting / Profitability Analysis
                    </span>
                    <h1 className="font-montserrat text-3xl md:text-5xl font-bold mt-3 mb-6">
                        Profitability Analysis & <span className="text-primary-accent">Margin Optimization</span>
                    </h1>
                    <p className="text-boulder text-lg leading-relaxed mb-8">
                        Growing top-line revenue without growing net profit is a common trap for expanding enterprises. Acharya Professional Accountants performs deep unit-economics and segment profitability analysis to uncover hidden cost leaks, loss-making product SKUs, and pricing inefficiencies.
                    </p>

                    <AuthorReviewer
                        author="Acharya Management Consulting Practice"
                        reviewer="Chartered Accountant (ICAI)"
                        lastUpdated="September 2026"
                    />

                    <div className="space-y-8 mt-10">
                        <div className="bg-secondary-dark border border-white/5 rounded-2xl p-6 md:p-8">
                            <h2 className="text-xl font-bold text-white mb-4">Core Profitability Consulting Deliverables</h2>
                            <ul className="space-y-4 text-boulder text-sm md:text-base">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary-accent font-bold">✓</span>
                                    <div>
                                        <strong className="text-white block">Product & Service Line Margins</strong>
                                        <span>Cost-of-Goods-Sold (COGS) breakdown per product or service tier to determine true contribution margins.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary-accent font-bold">✓</span>
                                    <div>
                                        <strong className="text-white block">Overhead & Operating Cost Audits</strong>
                                        <span>Benchmarking administrative, marketing, and operational expenses against industry standards.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary-accent font-bold">✓</span>
                                    <div>
                                        <strong className="text-white block">Pricing Strategy & Break-Even Tuning</strong>
                                        <span>Advising on cost-plus vs market-based pricing structures to safeguard net margins.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-r from-secondary-dark to-dark-bg border border-primary-accent/20 rounded-2xl p-8 text-center">
                            <h3 className="text-2xl font-bold text-white mb-3">Want to Improve Your Net Profit Margins?</h3>
                            <p className="text-boulder text-sm mb-6 max-w-xl mx-auto">
                                Speak with our financial management consultants to schedule a segment profitability audit for your business.
                            </p>
                            <Link to="/contact" className="inline-block bg-primary-accent text-dark-bg font-bold px-8 py-3 rounded-full hover:bg-white transition-colors">
                                Book Profitability Review
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProfitabilityAnalysisPage;
