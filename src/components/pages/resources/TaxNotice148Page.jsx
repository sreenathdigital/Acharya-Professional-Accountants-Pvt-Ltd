import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../../common/SEO';
import Breadcrumbs from '../../common/Breadcrumbs';
import AuthorReviewer from '../../common/AuthorReviewer';

const TaxNotice148Page = () => {
    useEffect(() => {
        AOS.refresh();
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="Section 148 Income Tax Notice Guide | Reassessment Procedure & Reply"
                description="Received a Section 148 or 148A income tax notice for income escaping assessment? Learn statutory timelines, 148A(b) show cause reply steps, and professional CA assistance."
                canonical="https://acharyaprofessionalaccountants.in/resources/tax-notices/notice-148"
            />
            <div className="container mx-auto px-5 md:px-12 lg:px-20 pt-4">
                <Breadcrumbs />
            </div>

            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-16" data-aos="fade-up">
                <div className="max-w-4xl">
                    <span className="text-primary-accent uppercase tracking-[0.2em] text-xs font-semibold">
                        Resources / Tax Notice Guides / Section 148 & 148A
                    </span>
                    <h1 className="font-montserrat text-3xl md:text-5xl font-bold mt-3 mb-6">
                        Income Tax Notice under <span className="text-primary-accent">Section 148 & 148A</span>
                    </h1>
                    <p className="text-boulder text-lg leading-relaxed mb-8">
                        A notice under Section 148 of the Income Tax Act is issued by the Assessing Officer (AO) when there is reason to believe that taxable income has escaped assessment. Under current tax laws, Section 148 notices are preceded by an inquiry and show-cause notice under Section 148A(b).
                    </p>

                    <AuthorReviewer
                        author="Acharya Tax Litigation & Notice Division"
                        reviewer="Chartered Accountant (ICAI)"
                        lastUpdated="September 2026"
                    />

                    <div className="space-y-6 mt-8 text-boulder text-sm md:text-base leading-relaxed">
                        <div className="bg-secondary-dark border border-white/5 rounded-2xl p-6">
                            <h2 className="text-xl font-bold text-white mb-3">Key Stages of Section 148 Reassessment</h2>
                            <ol className="list-decimal pl-5 space-y-3">
                                <li><strong>Section 148A(b) Show-Cause Notice:</strong> The Assessing Officer provides information suggesting income escaping assessment and asks you to show cause why a 148 notice should not be issued.</li>
                                <li><strong>Submitting the 148A Reply:</strong> You must submit a detailed response within the given timeframe (usually 7 to 30 days) along with supporting bank statements, property sale deeds, or investment proofs.</li>
                                <li><strong>Order under Section 148A(d):</strong> The AO decides whether it is a fit case for issuing Section 148 notice.</li>
                                <li><strong>Filing ITR in Response to 148:</strong> If Section 148 is issued, you are required to submit an income tax return within the specified deadline.</li>
                            </ol>
                        </div>

                        <div className="bg-secondary-dark border border-white/5 rounded-2xl p-6">
                            <h2 className="text-xl font-bold text-white mb-3">Common Triggers for Section 148 Notices</h2>
                            <ul className="space-y-2">
                                <li>• High-value immovable property purchases/sales not matching declared income.</li>
                                <li>• Unreported foreign bank accounts, offshore assets, or NRI cash deposits.</li>
                                <li>• High-value stock trading, F&O transactions, or crypto gains reported in SFT data.</li>
                                <li>• Mismatches identified between AIS/TIS figures and filed ITR computations.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-secondary-dark to-dark-bg border border-primary-accent/20 rounded-2xl p-8 text-center mt-10">
                        <h3 className="text-2xl font-bold text-white mb-3">Received a Section 148 or 148A Show-Cause Notice?</h3>
                        <p className="text-boulder text-sm mb-6 max-w-xl mx-auto">
                            Reassessment notices require precise legal draftings and evidence reconciliation. Consult our Chartered Accountants for specialized notice handling and portal responses.
                        </p>
                        <Link to="/contact" className="inline-block bg-primary-accent text-dark-bg font-bold px-8 py-3 rounded-full hover:bg-white transition-colors">
                            Consult CA for Section 148 Reply
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TaxNotice148Page;
