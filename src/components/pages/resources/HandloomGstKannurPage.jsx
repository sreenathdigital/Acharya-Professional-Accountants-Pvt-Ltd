import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../../common/SEO';
import Breadcrumbs from '../../common/Breadcrumbs';
import AuthorReviewer from '../../common/AuthorReviewer';

const HandloomGstKannurPage = () => {
    useEffect(() => {
        AOS.refresh();
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="Kannur Handloom & Textile GST Compliance Guide | Rates & Subsidies"
                description="Comprehensive guide to GST rates, HSN codes, inverted duty refunds, and government subsidy documentation for handloom, weaver societies, and textile units in Kannur, Kerala."
                canonical="https://acharyaprofessionalaccountants.in/resources/tax-notices/handloom-gst-kannur"
            />
            <div className="container mx-auto px-5 md:px-12 lg:px-20 pt-4">
                <Breadcrumbs />
            </div>

            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-16" data-aos="fade-up">
                <div className="max-w-4xl">
                    <span className="text-primary-accent uppercase tracking-[0.2em] text-xs font-semibold">
                        Resources / Regional Tax Guides / Kannur Handloom GST
                    </span>
                    <h1 className="font-montserrat text-3xl md:text-5xl font-bold mt-3 mb-6">
                        Kannur Handloom & Textile <span className="text-primary-accent">GST Compliance & Subsidies</span>
                    </h1>
                    <p className="text-boulder text-lg leading-relaxed mb-8">
                        Kannur is renowned as the city of looms and lore. For handloom weaver societies, textile exporters, and garment manufacturing units in Kannur, staying compliant with complex GST inverted tax structures and state industrial subsidies is crucial for profitability.
                    </p>

                    <AuthorReviewer
                        author="Acharya Kannur Regional Accounting Division"
                        reviewer="Chartered Accountant (ICAI)"
                        lastUpdated="September 2026"
                    />

                    <div className="space-y-6 mt-8 text-boulder text-sm md:text-base leading-relaxed">
                        <div className="bg-secondary-dark border border-white/5 rounded-2xl p-6">
                            <h2 className="text-xl font-bold text-white mb-3">GST Applicability for Handloom & Textile Units</h2>
                            <ul className="space-y-3">
                                <li>• <strong>Yarn & Raw Material HSN Codes:</strong> Cotton yarn and raw materials generally attract 5% GST, while certain synthetic raw materials attract 12% to 18%.</li>
                                <li>• <strong>Inverted Duty Structure Refunds:</strong> When input tax rates are higher than output fabric/garment sales tax rates, textile units accumulate unutilized ITC. We assist in filing **RFD-01 refund claims** on the GST portal.</li>
                                <li>• <strong>Weaver Cooperative Societies Exemption Norms:</strong> Specific job-work processes performed by registered handloom co-operatives benefit from concessional GST rates under notified circulars.</li>
                            </ul>
                        </div>

                        <div className="bg-secondary-dark border border-white/5 rounded-2xl p-6">
                            <h2 className="text-xl font-bold text-white mb-3">Subsidy & Financial Documentation Services</h2>
                            <p className="mb-3">
                                Textile manufacturers in Kannur can access DIC subsidies, handloom modernization schemes, and state margin money loans. Acharya provides:
                            </p>
                            <ul className="space-y-2">
                                <li>• CA Net Worth & Turnover Certificates required for District Industries Centre (DIC) applications.</li>
                                <li>• Project viability reports for modernized powerloom & weaving unit expansions.</li>
                                <li>• Audit compliance for Handloom Weaver Societies under Kerala Cooperative Societies Act & GST laws.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-secondary-dark to-dark-bg border border-primary-accent/20 rounded-2xl p-8 text-center mt-10">
                        <h3 className="text-2xl font-bold text-white mb-3">Operating a Handloom or Textile Business in Kannur?</h3>
                        <p className="text-boulder text-sm mb-6 max-w-xl mx-auto">
                            Get expert local tax assistance, inverted duty refund filings, and DIC subsidy documentation tailored for Kannur's textile sector.
                        </p>
                        <Link to="/contact" className="inline-block bg-primary-accent text-dark-bg font-bold px-8 py-3 rounded-full hover:bg-white transition-colors">
                            Contact Kannur Advisory Team
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HandloomGstKannurPage;
