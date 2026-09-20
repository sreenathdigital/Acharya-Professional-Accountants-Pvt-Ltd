import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../../common/SEO';
import Breadcrumbs from '../../common/Breadcrumbs';
import AuthorReviewer from '../../common/AuthorReviewer';

const CmaDataPage = () => {
    useEffect(() => {
        AOS.refresh();
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="CMA Data Preparation for Bank Loans | Credit Monitoring Arrangement"
                description="Professional CMA Data preparation for bank cash credit, working capital limits, and term loans. Learn key financial ratios, MPBF calculations, and bank compliance requirements."
                canonical="https://acharyaprofessionalaccountants.in/services/business-loans/cma-data"
            />
            <div className="container mx-auto px-5 md:px-12 lg:px-20 pt-4">
                <Breadcrumbs />
            </div>

            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-16" data-aos="fade-up">
                <div className="max-w-4xl">
                    <span className="text-primary-accent uppercase tracking-[0.2em] text-xs font-semibold">
                        Services / Business Loans / CMA Data Preparation
                    </span>
                    <h1 className="font-montserrat text-3xl md:text-5xl font-bold mt-3 mb-6">
                        Bank <span className="text-primary-accent">CMA Data Preparation</span> Services
                    </h1>
                    <p className="text-boulder text-lg leading-relaxed mb-8">
                        Credit Monitoring Arrangement (CMA Data) is a compulsory financial presentation required by nationalized and private banks in India before sanctioning or renewing cash credit (CC), overdraft (OD), or commercial loan facilities.
                    </p>

                    <AuthorReviewer
                        author="Acharya Bank Loan Advisory Division"
                        reviewer="Chartered Accountant (ICAI)"
                        lastUpdated="September 2026"
                    />

                    <div className="space-y-6 mt-8 text-boulder text-sm md:text-base leading-relaxed">
                        <div className="bg-secondary-dark border border-white/5 rounded-2xl p-6">
                            <h2 className="text-xl font-bold text-white mb-3">6 Mandatory Statements in CMA Data</h2>
                            <ol className="list-decimal pl-5 space-y-3">
                                <li><strong>Form I - Operating Statement:</strong> Past 2 years audited performance and 3 to 5 years projected Profit & Loss statement.</li>
                                <li><strong>Form II - Balance Sheet Analysis:</strong> Historical and projected liabilities, asset building, and net worth build-up.</li>
                                <li><strong>Form III - Comparative Current Assets & Liabilities:</strong> Detailed breakdown of raw material inventory, debtors, creditors, and trade advances.</li>
                                <li><strong>Form IV - Calculation of Working Capital Assessment:</strong> Tandon/Nayak Committee MPBF (Maximum Permissible Bank Finance) calculations.</li>
                                <li><strong>Form V - Funds Flow Statement:</strong> Source and application of funds across operating, investing, and financing cycles.</li>
                                <li><strong>Form VI - Key Financial Ratios:</strong> Current ratio, DSCR, TOL/TNW, inventory holding days, and debtor turnover days.</li>
                            </ol>
                        </div>

                        <div className="bg-secondary-dark border border-white/5 rounded-2xl p-6">
                            <h2 className="text-xl font-bold text-white mb-3">Why Bank Managers Reject Inaccurate CMA Reports</h2>
                            <p className="mb-3">
                                Unrealistic turnover growth rates, incorrect current ratio (&lt; 1.33:1), or inflated inventory benchmarks trigger immediate credit risk flags in bank loan appraisal software.
                            </p>
                            <p>
                                Acharya's experienced Chartered Accountants prepare benchmarked CMA reports aligned with RBI norms and specific commercial bank credit policies.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-secondary-dark to-dark-bg border border-primary-accent/20 rounded-2xl p-8 text-center mt-10">
                        <h3 className="text-2xl font-bold text-white mb-3">Applying for Cash Credit or Business Loan Enhancement?</h3>
                        <p className="text-boulder text-sm mb-6 max-w-xl mx-auto">
                            Get your CMA data prepared and verified by Chartered Accountants for fast bank credit approval.
                        </p>
                        <Link to="/contact" className="inline-block bg-primary-accent text-dark-bg font-bold px-8 py-3 rounded-full hover:bg-white transition-colors">
                            Prepare My CMA Data
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CmaDataPage;
