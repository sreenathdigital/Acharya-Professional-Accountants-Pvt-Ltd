import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../../common/SEO';
import Breadcrumbs from '../../common/Breadcrumbs';
import AuthorReviewer from '../../common/AuthorReviewer';

const MudraLoanPage = () => {
    useEffect(() => {
        AOS.refresh();
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="PMMY MUDRA Loan Guide | Shishu, Kishore & Tarun Categories"
                description="Guide to Pradhan Mantri MUDRA Yojana (PMMY) business loans up to Rs 10 Lakhs or ₹20 Lakhs for micro-enterprises. Categories, interest rates, and loan application assistance."
                canonical="https://acharyaprofessionalaccountants.in/services/business-loans/mudra"
            />
            <div className="container mx-auto px-5 md:px-12 lg:px-20 pt-4">
                <Breadcrumbs />
            </div>

            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-16" data-aos="fade-up">
                <div className="max-w-4xl">
                    <span className="text-primary-accent uppercase tracking-[0.2em] text-xs font-semibold">
                        Services / Business Loans / MUDRA Loan Guide
                    </span>
                    <h1 className="font-montserrat text-3xl md:text-5xl font-bold mt-3 mb-6">
                        Pradhan Mantri MUDRA Yojana <span className="text-primary-accent">(PMMY) Loan Guide</span>
                    </h1>
                    <p className="text-boulder text-lg leading-relaxed mb-8">
                        PMMY MUDRA loans provide institutional credit to non-corporate, non-farm micro and small enterprises across trading, manufacturing, and service activities without requiring collateral.
                    </p>

                    <AuthorReviewer
                        author="Acharya Small Business Advisory"
                        reviewer="Chartered Accountant (ICAI)"
                        lastUpdated="September 2026"
                    />

                    <div className="space-y-6 mt-8 text-boulder text-sm md:text-base leading-relaxed">
                        <div className="bg-secondary-dark border border-white/5 rounded-2xl p-6">
                            <h2 className="text-xl font-bold text-white mb-3">3 Categories of MUDRA Loans</h2>
                            <ul className="space-y-3">
                                <li>• <strong>Shishu:</strong> Covering business setup loans up to ₹50,000 for startup micro-vendors.</li>
                                <li>• <strong>Kishore:</strong> Covering loan requirements above ₹50,000 and up to ₹5 Lakhs for machinery or working capital.</li>
                                <li>• <strong>Tarun / Tarun Plus:</strong> Covering loan requirements from ₹5 Lakhs up to ₹10 Lakhs (and enhanced ₹20 Lakhs for established enterprises).</li>
                            </ul>
                        </div>

                        <div className="bg-secondary-dark border border-white/5 rounded-2xl p-6">
                            <h2 className="text-xl font-bold text-white mb-3">Essential Documentation Checklist</h2>
                            <ul className="space-y-2">
                                <li>• Duly filled MUDRA loan application form.</li>
                                <li>• Business identity & address proof (GST, Udyam, Trade License).</li>
                                <li>• Last 6 to 12 months bank account statements.</li>
                                <li>• Estimated Balance Sheet and P&L for loans exceeding ₹2 Lakhs.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-secondary-dark to-dark-bg border border-primary-accent/20 rounded-2xl p-8 text-center mt-10">
                        <h3 className="text-2xl font-bold text-white mb-3">Filing for a MUDRA Business Loan?</h3>
                        <p className="text-boulder text-sm mb-6 max-w-xl mx-auto">
                            Acharya helps small businesses and self-employed professionals prepare complete loan application files for hassle-free bank processing.
                        </p>
                        <Link to="/contact" className="inline-block bg-primary-accent text-dark-bg font-bold px-8 py-3 rounded-full hover:bg-white transition-colors">
                            Get MUDRA Loan Support
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MudraLoanPage;
