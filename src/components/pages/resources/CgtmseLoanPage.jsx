import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../../common/SEO';
import Breadcrumbs from '../../common/Breadcrumbs';
import AuthorReviewer from '../../common/AuthorReviewer';

const CgtmseLoanPage = () => {
    useEffect(() => {
        AOS.refresh();
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="CGTMSE Collateral-Free Bank Loan Guide | MSME Scheme & Limits"
                description="Guide to securing up to Rs 5 Crore collateral-free business loans under CGTMSE scheme for MSMEs, micro enterprises, and startups. Eligibility, guarantee fees, and documentation."
                canonical="https://acharyaprofessionalaccountants.in/services/business-loans/cgtmse"
            />
            <div className="container mx-auto px-5 md:px-12 lg:px-20 pt-4">
                <Breadcrumbs />
            </div>

            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-16" data-aos="fade-up">
                <div className="max-w-4xl">
                    <span className="text-primary-accent uppercase tracking-[0.2em] text-xs font-semibold">
                        Services / Business Loans / CGTMSE Guide
                    </span>
                    <h1 className="font-montserrat text-3xl md:text-5xl font-bold mt-3 mb-6">
                        CGTMSE Collateral-Free <span className="text-primary-accent">Bank Loan Scheme Guide</span>
                    </h1>
                    <p className="text-boulder text-lg leading-relaxed mb-8">
                        The Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) allows eligible MSMEs to obtain bank credit up to ₹5 Crore without offering third-party guarantees or collateral security.
                    </p>

                    <AuthorReviewer
                        author="Acharya MSME & Government Scheme Division"
                        reviewer="Chartered Accountant (ICAI)"
                        lastUpdated="September 2026"
                    />

                    <div className="space-y-6 mt-8 text-boulder text-sm md:text-base leading-relaxed">
                        <div className="bg-secondary-dark border border-white/5 rounded-2xl p-6">
                            <h2 className="text-xl font-bold text-white mb-3">Key Features of CGTMSE Loans</h2>
                            <ul className="space-y-3">
                                <li>• <strong>Enhanced Limit:</strong> Credit ceiling up to ₹5 Crore for eligible micro and small enterprises.</li>
                                <li>• <strong>Guarantee Coverage:</strong> CGTMSE provides 75% to 85% credit guarantee coverage to lending institutions (banks/NBFCs).</li>
                                <li>• <strong>Eligible Borrowers:</strong> New and existing MSME manufacturing, service, and retail trading enterprises holding Udyam Registration.</li>
                                <li>• <strong>Hybrid Security Option:</strong> Option to attach available partial collateral while placing balance risk under CGTMSE guarantee.</li>
                            </ul>
                        </div>

                        <div className="bg-secondary-dark border border-white/5 rounded-2xl p-6">
                            <h2 className="text-xl font-bold text-white mb-3">Required Documents for CGTMSE Sanction</h2>
                            <ol className="list-decimal pl-5 space-y-2">
                                <li>Udyam Registration Certificate & MSME registration details.</li>
                                <li>Past 3 years audited financial statements and ITR copies.</li>
                                <li>CMA Data and Detailed Project Report prepared by Chartered Accountant.</li>
                                <li>KYC documents of all partners/directors and business entity registration proofs.</li>
                            </ol>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-secondary-dark to-dark-bg border border-primary-accent/20 rounded-2xl p-8 text-center mt-10">
                        <h3 className="text-2xl font-bold text-white mb-3">Looking for Collateral-Free MSME Funding?</h3>
                        <p className="text-boulder text-sm mb-6 max-w-xl mx-auto">
                            Acharya assists micro and small businesses in preparing bank-ready CGTMSE project reports and loan documentation.
                        </p>
                        <Link to="/contact" className="inline-block bg-primary-accent text-dark-bg font-bold px-8 py-3 rounded-full hover:bg-white transition-colors">
                            Apply for CGTMSE Loan Support
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CgtmseLoanPage;
