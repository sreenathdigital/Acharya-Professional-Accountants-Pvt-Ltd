import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../../common/SEO';
import Breadcrumbs from '../../common/Breadcrumbs';
import AuthorReviewer from '../../common/AuthorReviewer';

const GstItcMismatchPage = () => {
    useEffect(() => {
        AOS.refresh();
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="GST ITC Mismatch Guide | GSTR-2B vs GSTR-3B Notice Reply (ASMT-10 / DRC-01B)"
                description="Handling GST Input Tax Credit (ITC) mismatch notices under ASMT-10, DRC-01B, and DRC-01C. Step-by-step resolution for supplier default and GSTR-2A/2B reconciliations."
                canonical="https://acharyaprofessionalaccountants.in/resources/tax-notices/gst-itc-mismatch"
            />
            <div className="container mx-auto px-5 md:px-12 lg:px-20 pt-4">
                <Breadcrumbs />
            </div>

            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-16" data-aos="fade-up">
                <div className="max-w-4xl">
                    <span className="text-primary-accent uppercase tracking-[0.2em] text-xs font-semibold">
                        Resources / Tax Notice Guides / GST ITC Mismatch
                    </span>
                    <h1 className="font-montserrat text-3xl md:text-5xl font-bold mt-3 mb-6">
                        GST Input Tax Credit Mismatch <span className="text-primary-accent">GSTR-2B vs GSTR-3B</span>
                    </h1>
                    <p className="text-boulder text-lg leading-relaxed mb-8">
                        Automated GST notice DRC-01B and ASMT-10 scrutinies are issued when the Input Tax Credit (ITC) claimed in your GSTR-3B return exceeds the auto-populated eligible ITC reflected in your GSTR-2B.
                    </p>

                    <AuthorReviewer
                        author="Acharya GST Compliance & Audit Team"
                        reviewer="Chartered Accountant (ICAI)"
                        lastUpdated="September 2026"
                    />

                    <div className="space-y-6 mt-8 text-boulder text-sm md:text-base leading-relaxed">
                        <div className="bg-secondary-dark border border-white/5 rounded-2xl p-6">
                            <h2 className="text-xl font-bold text-white mb-3">Primary Causes of ITC Mismatches</h2>
                            <ul className="space-y-3">
                                <li>• <strong>Supplier Filing Delays:</strong> Your vendor uploaded invoices late in GSTR-1, so credit appeared in a subsequent month's GSTR-2B.</li>
                                <li>• <strong>Incorrect GSTIN or B2C Entry:</strong> Vendor filed the sale under B2C or entered an erroneous GST number.</li>
                                <li>• <strong>Ineligible ITC Claimed:</strong> Claiming ITC on block items under Section 17(5) such as personal motor vehicles or employee club memberships.</li>
                                <li>• <strong>Reversal Omissions:</strong> Failure to reverse ITC for non-payment to suppliers within 180 days under Rule 37.</li>
                            </ul>
                        </div>

                        <div className="bg-secondary-dark border border-white/5 rounded-2xl p-6">
                            <h2 className="text-xl font-bold text-white mb-3">How to Reply to Form DRC-01B / ASMT-10</h2>
                            <ol className="list-decimal pl-5 space-y-2">
                                <li>Perform invoice-level reconciliation between your purchase register and GSTR-2B data.</li>
                                <li>Identify supplier-wise differences and obtain vendor confirmation letters or delayed tax payment challans.</li>
                                <li>Submit Part B response to DRC-01B within 7 days stating exact reconciliation reason code or paying difference via DRC-03.</li>
                            </ol>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-secondary-dark to-dark-bg border border-primary-accent/20 rounded-2xl p-8 text-center mt-10">
                        <h3 className="text-2xl font-bold text-white mb-3">Facing GST Scrutiny or Demand Notices?</h3>
                        <p className="text-boulder text-sm mb-6 max-w-xl mx-auto">
                            Acharya provides monthly vendor-wise ITC reconciliation and expert representation for GST ASMT-10, DRC-01B, and DRC-07 proceedings.
                        </p>
                        <Link to="/contact" className="inline-block bg-primary-accent text-dark-bg font-bold px-8 py-3 rounded-full hover:bg-white transition-colors">
                            Request GST Notice Audit
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default GstItcMismatchPage;
