import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../../common/SEO';
import Breadcrumbs from '../../common/Breadcrumbs';
import AuthorReviewer from '../../common/AuthorReviewer';

const ProjectReportPage = () => {
    useEffect(() => {
        AOS.refresh();
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="Bank Project Report & Financial Feasibility Services | Business Loans"
                description="Detailed Bank Project Reports for term loans, factory expansion, machinery loans, and subsidy schemes. CA-certified project reports tailored for PSU & private bank sanctions."
                canonical="https://acharyaprofessionalaccountants.in/services/business-loans/project-report"
            />
            <div className="container mx-auto px-5 md:px-12 lg:px-20 pt-4">
                <Breadcrumbs />
            </div>

            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-16" data-aos="fade-up">
                <div className="max-w-4xl">
                    <span className="text-primary-accent uppercase tracking-[0.2em] text-xs font-semibold">
                        Services / Business Loans / Project Reports
                    </span>
                    <h1 className="font-montserrat text-3xl md:text-5xl font-bold mt-3 mb-6">
                        Bank Project Report <span className="text-primary-accent">& Feasibility Services</span>
                    </h1>
                    <p className="text-boulder text-lg leading-relaxed mb-8">
                        A Bank Detailed Project Report (DPR) is a comprehensive financial and technical blueprint submitted to banks and financial institutions to secure term loans, machinery funding, and government subsidies.
                    </p>

                    <AuthorReviewer
                        author="Acharya Financial Advisory Team"
                        reviewer="Chartered Accountant (ICAI)"
                        lastUpdated="September 2026"
                    />

                    <div className="space-y-6 mt-8 text-boulder text-sm md:text-base leading-relaxed">
                        <div className="bg-secondary-dark border border-white/5 rounded-2xl p-6">
                            <h2 className="text-xl font-bold text-white mb-3">Key Elements of a Bank Appraisal Project Report</h2>
                            <ul className="space-y-3">
                                <li>• <strong>Promoter Background & Profile:</strong> Experience, net worth statements, and management structure.</li>
                                <li>• <strong>Project Cost & Means of Finance:</strong> Detailed breakup of land, building construction, machinery quotes, promoter margin contribution, and bank debt requirement.</li>
                                <li>• <strong>Technical & Market Feasibility:</strong> Industry demand, production capacity, raw material availability, and competitive landscape.</li>
                                <li>• <strong>Financial Projections (5 to 10 Years):</strong> Projected Profit & Loss, Balance Sheet, Cash Flow, Break-Even Analysis, Internal Rate of Return (IRR), and DSCR.</li>
                            </ul>
                        </div>

                        <div className="bg-secondary-dark border border-white/5 rounded-2xl p-6">
                            <h2 className="text-xl font-bold text-white mb-3">Customized DPRs for Multiple Loan Categories</h2>
                            <ul className="space-y-2">
                                <li>• MSME Term Loans & Industrial Plant Setup</li>
                                <li>• Commercial Real Estate & Hospital/Hotel Construction Projects</li>
                                <li>• KVB, Canara, SBI, HDFC, and Federal Bank Appraisal Formats</li>
                                <li>• Government Subsidy Schemes (PMEGP, KVIC, DIC Scheme Reports)</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-secondary-dark to-dark-bg border border-primary-accent/20 rounded-2xl p-8 text-center mt-10">
                        <h3 className="text-2xl font-bold text-white mb-3">Need a Detailed Project Report for Your Bank Loan?</h3>
                        <p className="text-boulder text-sm mb-6 max-w-xl mx-auto">
                            Our team prepares bankable DPRs complete with financial modeling and CA certification.
                        </p>
                        <Link to="/contact" className="inline-block bg-primary-accent text-dark-bg font-bold px-8 py-3 rounded-full hover:bg-white transition-colors">
                            Request Project Report Draft
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProjectReportPage;
