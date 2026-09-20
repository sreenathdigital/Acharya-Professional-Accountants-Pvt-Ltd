import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../../common/SEO';
import Breadcrumbs from '../../common/Breadcrumbs';
import AuthorReviewer from '../../common/AuthorReviewer';

const WorkingCapitalPage = () => {
    useEffect(() => {
        AOS.refresh();
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="Working Capital Management & Cash Flow Advisory | Acharya"
                description="Optimize operational cash flow, MPBF working capital limits, inventory turnover, and debtor management with Acharya's business consulting services."
                canonical="https://acharyaprofessionalaccountants.in/services/business-consulting/working-capital"
            />
            <div className="container mx-auto px-5 md:px-12 lg:px-20 pt-4">
                <Breadcrumbs />
            </div>

            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-16" data-aos="fade-up">
                <div className="max-w-4xl">
                    <span className="text-primary-accent uppercase tracking-[0.2em] text-xs font-semibold">
                        Business Consulting / Working Capital
                    </span>
                    <h1 className="font-montserrat text-3xl md:text-5xl font-bold mt-3 mb-6">
                        Working Capital Management & <span className="text-primary-accent">Cash Flow Optimization</span>
                    </h1>
                    <p className="text-boulder text-lg leading-relaxed mb-8">
                        Working capital is the lifeblood of any business. Even profitable enterprises can face severe distress if operational cash gets trapped in slow-moving inventory or delayed customer receivables. Acharya Professional Accountants helps businesses analyze, restructure, and optimize their working capital cycles to maintain liquidity and fund expansion.
                    </p>

                    <AuthorReviewer
                        author="Acharya Business Consulting Division"
                        reviewer="Chartered Accountant (ICAI)"
                        lastUpdated="September 2026"
                    />

                    <div className="space-y-8 mt-10">
                        <div className="bg-secondary-dark border border-white/5 rounded-2xl p-6 md:p-8">
                            <h2 className="text-xl font-bold text-white mb-4">Key Working Capital Components We Help You Optimize</h2>
                            <ul className="space-y-4 text-boulder text-sm md:text-base">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary-accent font-bold">✓</span>
                                    <div>
                                        <strong className="text-white block">Cash Conversion Cycle (CCC) Reduction</strong>
                                        <span>Streamlining Days Sales Outstanding (DSO), Days Inventory Outstanding (DIO), and Days Payable Outstanding (DPO).</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary-accent font-bold">✓</span>
                                    <div>
                                        <strong className="text-white block">CC / OD Limit Structuring (MPBF Analysis)</strong>
                                        <span>Calculating Maximum Permissible Bank Finance strictly as per RBI and commercial bank credit appraisal norms.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary-accent font-bold">✓</span>
                                    <div>
                                        <strong className="text-white block">Debtor & Inventory Aging Analysis</strong>
                                        <span>Identifying bad debt risks, slow-moving inventory, and establishing structured credit control policies.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-secondary-dark/60 border border-white/5 rounded-2xl p-6 md:p-8">
                            <h2 className="text-xl font-bold text-white mb-4">Who Needs Working Capital Consulting?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-boulder">
                                <div className="p-4 bg-dark-bg/60 rounded-xl border border-white/5">
                                    <strong className="text-white block mb-1">Trading & Wholesale Businesses</strong>
                                    <span>Managing high debtor velocity and seasonal stock buildup without over-leveraging bank overdrafts.</span>
                                </div>
                                <div className="p-4 bg-dark-bg/60 rounded-xl border border-white/5">
                                    <strong className="text-white block mb-1">Manufacturing & Industrial Units</strong>
                                    <span>Balancing raw material procurement costs, production cycles, and credit terms offered to B2B buyers.</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-secondary-dark to-dark-bg border border-primary-accent/20 rounded-2xl p-8 text-center">
                            <h3 className="text-2xl font-bold text-white mb-3">Improve Your Operational Liquidity Today</h3>
                            <p className="text-boulder text-sm mb-6 max-w-xl mx-auto">
                                Schedule a working capital review with our CAs to evaluate your current cash conversion cycle and bank facility structure.
                            </p>
                            <Link to="/contact" className="inline-block bg-primary-accent text-dark-bg font-bold px-8 py-3 rounded-full hover:bg-white transition-colors">
                                Request Working Capital Review
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default WorkingCapitalPage;
