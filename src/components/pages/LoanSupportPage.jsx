import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../common/SEO';
import Breadcrumbs from '../common/Breadcrumbs';
import DynamicFaIcon from '../common/FontAwesomeRegistry';

const LoanSupportPage = () => {
    useEffect(() => {
        AOS.refresh();
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="relative z-10 font-inter text-white bg-transparent pt-24 md:pt-28">
            <SEO
                title="Business Loan & Project Report Support in Kerala | Acharya"
                description="Expert business loan assistance and project report support in Kerala. CMA data, MSME loans, working capital & CGTMSE collateral-free loan documentation by Acharya."
                canonical="https://acharyaprofessionalaccountants.in/services/business-loans"
            />
            <div className="container mx-auto px-4 md:px-20 pt-4">
                <Breadcrumbs />
            </div>

            {/* Hero Section */}
            <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 items-center" data-aos="fade-up">
                <div>
                    <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">Services / Loan Support</p>
                    <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        Business Loan & <br className="hidden md:block" />
                        <span className="text-primary-accent">Project Report Support in Kerala</span>
                    </h1>
                    <p className="text-lg text-boulder mb-8 max-w-2xl">
                        Navigating business financing requires meticulous documentation. From preliminary eligibility checks to bank-ready project reports, Acharya Professional Accountants helps Startups, MSMEs, and established enterprises prepare professional CMA data and loan applications meeting strict banking standards.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://wa.me/919446369434?text=Hi%2C%20I%20need%20a%20Loan%20Eligibility%20Check"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex justify-center items-center bg-primary-accent text-dark-bg font-semibold px-6 py-3 rounded-full hover:bg-white transition-all duration-300 shadow-[0_4px_14px_rgba(229,161,69,0.3)]"
                        >
                            <DynamicFaIcon name="fa-whatsapp" className="mr-2" /> Free Eligibility Check
                        </a>
                        <a
                            href="#project-reports"
                            className="inline-flex justify-center items-center bg-transparent border border-white/20 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300"
                        >
                            Get Project Report Sample
                        </a>
                    </div>
                </div>
                <div className="relative" data-aos="fade-left">
                    {/* Hero Image */}
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-primary-accent/20">
                        <img
                            src="/images/business_loan_hero.webp"
                            alt="Business Loan Consultation"
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4 bg-secondary-dark/90 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                            <p className="text-primary-accent font-bold text-sm mb-1"><DynamicFaIcon name="fa-check-circle" className="mr-2" />Bank-Compliant Project Reports</p>
                            <p className="text-xs text-gray-300">We ensure your financial projections and CMA data meet compliance standards.</p>
                        </div>
                    </div>

                    {/* Decorative blurred background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary-accent/20 blur-[80px] -z-10 rounded-full"></div>
                </div>
            </section>

            {/* Loan Types Section */}
            <section className="relative z-10 bg-secondary-dark/50 backdrop-blur-sm py-16" data-aos="fade-up">
                <div className="container mx-auto px-4 md:px-20">
                    <div className="text-center mb-12">
                        <h2 className="font-montserrat text-2xl md:text-4xl font-bold mb-4">Types of Business Loans We Support</h2>
                        <p className="text-boulder max-w-3xl mx-auto">
                            Choosing the right credit facility is crucial for maintaining healthy cash flow and sustainable growth. We assist you in identifying and securing the optimal loan instrument based on your unique business profile.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'MSME / Small Business', icon: 'fa-store', desc: 'For retail, trading, and small manufacturing units.', slug: 'msme-loans' },
                            { title: 'Startup Loans', icon: 'fa-rocket', desc: 'Funding for new ventures with scalable business models.', slug: 'startup-loans' },
                            { title: 'MUDRA Loans', icon: 'fa-hand-holding-usd', desc: 'Shishu, Kishore, and Tarun schemes for micro-units.', slug: 'mudra-loans' },
                            { title: 'Working Capital', icon: 'fa-chart-line', desc: 'CC/OD limits to manage day-to-day operations.', slug: 'working-capital' },
                            { title: 'Term Loans', icon: 'fa-clock', desc: 'Long-term funding for expansion and assets.', slug: 'term-loans' },
                            { title: 'Professional Loans', icon: 'fa-user-md', desc: 'For Doctors, CAs, Architects, and Consultants.', slug: 'private-bank-loans' },
                            { title: 'Machinery Loans', icon: 'fa-cogs', desc: 'Purchase of new equipment and technology.', slug: 'machinery-loans' },
                            { title: 'Expansion Loans', icon: 'fa-expand-arrows-alt', desc: 'Scaling operations to new markets or verticals.', slug: 'expansion-loans' },
                        ].map((loan, index) => (
                            <Link
                                to={`/services/business-loans/${loan.slug}`}
                                key={index}
                                className="bg-dark-bg/60 backdrop-blur-sm border border-white/5 p-6 rounded-xl hover:border-primary-accent/30 transition-all duration-300 group block"
                            >
                                <div className="w-12 h-12 bg-secondary-dark rounded-lg flex items-center justify-center text-primary-accent text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <DynamicFaIcon name={loan.icon} />
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-white group-hover:text-primary-accent transition-colors">{loan.title}</h3>
                                <p className="text-sm text-boulder">{loan.desc}</p>
                            </Link>
                        ))}
                    </div>


                    <div className="mt-10 text-center">
                        <p className="text-gray-400 mb-4">Not sure which loan suits you?</p>
                        <Link to="/contact" className="text-primary-accent hover:text-white font-semibold transition-colors">
                            Talk to Our Loan Support Team <DynamicFaIcon name="fa-arrow-right" className="ml-1" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Project Report Section */}
            <section id="project-reports" className="container mx-auto px-4 md:px-20 py-16 md:py-24" data-aos="fade-up">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-primary-accent font-bold tracking-wider uppercase text-sm">Financial Documentation</span>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mt-2 mb-6">
                            Bank-Approved <span className="text-primary-accent">Project Reports</span>
                        </h2>
                        <p className="text-boulder text-lg mb-6">
                            A Detailed Project Report (DPR) is the most critical document in your loan application. It acts as a comprehensive financial roadmap that helps credit managers assess the viability, risk profile, and repayment capacity of your business. We prepare highly customized, bank-compliant project reports and CMA data strictly as per the formats accepted by Nationalized Banks, Private Sector Banks, and leading NBFCs.
                            <span className="block mt-4 text-white font-semibold text-sm bg-dark-bg/50 p-3 rounded border border-white/10">📌 No copied templates. Every financial model and projection is custom-built and meticulously justified for your specific business.</span>
                        </p>

                        <div className="bg-secondary-dark border border-white/10 rounded-xl p-6">
                            <h4 className="font-bold mb-4 text-white">What Our Report Includes:</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                                {[
                                    'Business & Industry Overview',
                                    'Cost of Project & Means of Finance',
                                    '3–5 Year Profit & Loss Projection',
                                    'Cash Flow & Funds Flow',
                                    'Projected Balance Sheet',
                                    'Break-Even Analysis',
                                    'DSCR & Key Financial Ratios',
                                    'Ratio Analysis & Justification'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                        <DynamicFaIcon name="fa-check" className="text-primary-accent mt-1" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-8">
                            <a href="https://wa.me/919446369434?text=I%20want%20to%20know%20Project%20Report%20Costs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-dark-bg px-6 py-3 rounded-full font-bold hover:bg-primary-accent transition-colors duration-300">
                                Get Project Report Cost
                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                            <img
                                src="/images/project_report.webp"
                                alt="Bank Approved Project Report Sample"
                                className="w-full max-w-md mx-auto drop-shadow-2xl"
                            />
                        </div>
                        {/* Back glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary-accent/10 rounded-full blur-[60px] -z-10"></div>
                    </div>
                </div>
            </section>

            {/* Rejection vs Help Section */}
            <section className="relative z-10 bg-secondary-dark/65 backdrop-blur-sm py-16" data-aos="fade-up">
                <div className="container mx-auto px-4 md:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        {/* Rejection */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-red-400">
                                <DynamicFaIcon name="fa-times-circle" /> Why Loans Get Rejected
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    'Poor or copied project reports (templates)',
                                    'Unrealistic financial projections',
                                    'Mismatch between declared income & loan amount',
                                    'Missing or incorrect primary documents',
                                    'Lack of proper follow-up with bank officials'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 bg-dark-bg/50 p-4 rounded-lg border-l-4 border-red-400/50">
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Acharya Help */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-green-400">
                                <DynamicFaIcon name="fa-check-circle" /> How Acharya Helps
                            </h3>
                            <div className="bg-dark-bg/50 p-6 rounded-lg border-l-4 border-green-400/50 h-full">
                                <p className="text-lg text-white mb-4 leading-relaxed">
                                    We identify compliance gaps and financial inconsistencies <span className="text-green-400 font-bold">before submission</span>.
                                </p>
                                <p className="text-boulder mb-6">
                                    A loan application backed by a professional Chartered Accountant carries significantly more credibility. By pre-verifying your financial eligibility, preparing watertight CMA data, and structuring your documentation perfectly, we maximize your approval chances. We don't just hand you a report; we actively guide you through complex banking queries and credit appraisals.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2"><DynamicFaIcon name="fa-check" className="text-green-400" /> End-to-end banking compliance support</li>
                                    <li className="flex items-center gap-2"><DynamicFaIcon name="fa-check" className="text-green-400" /> Deep understanding of local credit policies</li>
                                    <li className="flex items-center gap-2"><DynamicFaIcon name="fa-check" className="text-green-400" /> Expert justification of financial projections</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Section: What is CMA Data & Why is it Critical? */}
            <section className="container mx-auto px-4 md:px-20 py-16 md:py-24" data-aos="fade-up">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-secondary-dark/40 backdrop-blur-sm border border-primary-accent/10 rounded-2xl p-8 lg:p-10">
                        <span className="text-primary-accent font-bold tracking-wider uppercase text-sm">Credit Analysis</span>
                        <h2 className="font-montserrat text-2xl md:text-3xl font-bold mt-2 mb-6">What is CMA Data & Why do Banks Demand it?</h2>
                        <p className="text-boulder text-sm leading-relaxed mb-4">
                            CMA stands for <strong>Credit Monitoring Arrangement</strong>. It is a structured report containing past financial analysis and future financial projections of a company. Under RBI guidelines, commercial banks require CMA data to assess the creditworthiness of a business requesting working capital loans (Cash Credit/Overdraft) or term loans exceeding ₹50 Lakhs.
                        </p>
                        <p className="text-boulder text-sm leading-relaxed mb-6">
                            A CMA report is not just a spreadsheet of arbitrary numbers. It involves deep financial calculations that credit officers scrutinize closely:
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="text-primary-accent mt-1 flex-shrink-0"><DynamicFaIcon name="fa-percentage" /></div>
                                <div>
                                    <h5 className="font-bold text-white text-sm">MPBF (Maximum Permissible Bank Finance)</h5>
                                    <p className="text-xs text-boulder mt-1">Calculates the working capital gap based on raw material, stock-in-progress, finished goods, and debtors velocity to determine your actual eligible loan limit.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-primary-accent mt-1 flex-shrink-0"><DynamicFaIcon name="fa-chart-line" /></div>
                                <div>
                                    <h5 className="font-bold text-white text-sm">DSCR (Debt Service Coverage Ratio)</h5>
                                    <p className="text-xs text-boulder mt-1">Measures whether your business generates sufficient operational profit to service the proposed loan interest and principal installments. A ratio below 1.25 is typically rejected.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-primary-accent mt-1 flex-shrink-0"><DynamicFaIcon name="fa-balance-scale" /></div>
                                <div>
                                    <h5 className="font-bold text-white text-sm">Current Ratio & Debt-Equity Ratio</h5>
                                    <p className="text-xs text-boulder mt-1">Evaluates your business's solvency and leverage. Banks prefer a current ratio of at least 1.33 to ensure short-term obligations can be comfortably covered.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <span className="text-primary-accent font-bold tracking-wider uppercase text-sm">Required Documentation</span>
                        <h2 className="font-montserrat text-2xl md:text-3xl font-bold mt-2 mb-6">The Business Loan Documentation Checklist</h2>
                        <p className="text-boulder text-sm mb-6">
                            Having your documents structured perfectly is 50% of the battle won. Below is the standard checklist of documents required by top-tier commercial banks and NBFCs for processing a business loan:
                        </p>
                        <div className="space-y-4">
                            <div className="p-4 bg-secondary-dark/60 rounded-xl border border-white/5">
                                <h4 className="font-semibold text-white text-sm flex items-center gap-2"><DynamicFaIcon name="fa-folder-open" className="text-primary-accent" /> KYC & Registration Documents</h4>
                                <p className="text-xs text-boulder mt-1">PAN Card of Entity & Promoters, GST Registration Certificate, Udyam (MSME) Registration Certificate, Partnership Deed / MoA & AoA, and Certificate of Incorporation.</p>
                            </div>
                            <div className="p-4 bg-secondary-dark/60 rounded-xl border border-white/5">
                                <h4 className="font-semibold text-white text-sm flex items-center gap-2"><DynamicFaIcon name="fa-file-invoice-dollar" className="text-primary-accent" /> Financial & Tax Statements</h4>
                                <p className="text-xs text-boulder mt-1">Last 3 years Audited Financial Statements, Income Tax Returns (ITR), GST Returns (GSTR-1 & GSTR-3B) for the last 12 months, and Bank Account Statements for the last 12 months.</p>
                            </div>
                            <div className="p-4 bg-secondary-dark/60 rounded-xl border border-white/5">
                                <h4 className="font-semibold text-white text-sm flex items-center gap-2"><DynamicFaIcon name="fa-shield-alt" className="text-primary-accent" /> Collateral & Project Documents</h4>
                                <p className="text-xs text-boulder mt-1">Title Deeds of properties offered as collateral security, building approval plans, machinery quotes from authorized vendors, and a Detailed Project Report (DPR) with CMA data.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Section: Pre-Sanction and Post-Sanction Advisory */}
            <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16" data-aos="fade-up">
                <div className="bg-secondary-dark/30 backdrop-blur-sm border border-primary-accent/15 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-10">
                        <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-4">Pre-Sanction & Post-Sanction Advisory Services</h2>
                        <p className="text-boulder max-w-3xl mx-auto">
                            Getting a loan isn't just about filing forms. We provide expert advice at every critical phase of the lending cycle to protect your business interests.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-dark-bg/60 backdrop-blur-sm p-6 rounded-xl border border-white/5">
                            <h4 className="font-semibold text-primary-accent mb-2">1. Credit Appraisal Advisory</h4>
                            <p className="text-xs text-boulder leading-relaxed">
                                We help you prepare for interactions with bank credit managers, explaining the logic behind your sales projections, inventory margins, and capital expenditure timelines.
                            </p>
                        </div>
                        <div className="bg-dark-bg/60 p-6 rounded-xl border border-white/5">
                            <h4 className="font-semibold text-primary-accent mb-2">2. Answering Query Letters</h4>
                            <p className="text-xs text-boulder leading-relaxed">
                                When bank risk teams issue query letters regarding historical losses, debtor aging, or credit deviations, we draft professional responses backed by accounting standards to justify your position.
                            </p>
                        </div>
                        <div className="bg-dark-bg/60 p-6 rounded-xl border border-white/5">
                            <h4 className="font-semibold text-primary-accent mb-2">3. Sanction Conditions Review</h4>
                            <p className="text-xs text-boulder leading-relaxed">
                                We scrutinize the bank's draft Sanction Letter, advising on hidden clauses like debt service reserve accounts (DSRA), escrow mandates, debt-covenants, and processing charge concessions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="container mx-auto px-4 md:px-20 py-16" data-aos="fade-up">
                <div className="text-center mb-12">
                    <h2 className="font-montserrat text-3xl font-bold mb-4">Our Simple Loan Assistance Process</h2>
                    <p className="text-boulder max-w-2xl mx-auto mt-4">
                        We transform the traditionally stressful and paperwork-heavy loan application journey into a structured, transparent, and seamless five-step process designed to get you funded faster.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 relative">
                    {[
                        { step: '1', title: 'Eligibility Check', desc: 'Free assessment of your profile' },
                        { step: '2', title: 'Doc Review', desc: 'Guidance on missing papers' },
                        { step: '3', title: 'Report Prep', desc: 'Detailed financial projections' },
                        { step: '4', title: 'Submission', desc: 'Bank-ready file preparation' },
                        { step: '5', title: 'Follow-up', desc: 'Clarification assistance' }
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center flex-1 relative group">
                            {/* Connector Line (Desktop) */}
                            {index < 4 && (
                                <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-white/10 -z-10"></div>
                            )}

                            <div className="w-16 h-16 rounded-full bg-secondary-dark border border-primary-accent/30 flex items-center justify-center text-xl font-bold text-primary-accent mb-4 group-hover:bg-primary-accent group-hover:text-dark-bg transition-colors duration-300 shadow-lg">
                                {item.step}
                            </div>
                            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                            <p className="text-sm text-gray-400 px-2">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="https://wa.me/919446369434?text=Start%20Loan%20Process" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary-accent text-dark-bg font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform">
                        Start My Loan Process Today
                    </a>
                </div>
            </section>

            {/* Who Can Take Support */}
            <section className="relative z-10 bg-secondary-dark/30 backdrop-blur-sm py-16" data-aos="fade-up">
                <div className="container mx-auto px-4 md:px-20 text-center">
                    <h2 className="font-montserrat text-2xl font-bold mb-4">Who Can Benefit from Our Loan Support?</h2>
                    <p className="text-boulder max-w-2xl mx-auto mb-8">
                        Our specialized business loan advisory and project report services are tailored to meet the diverse funding requirements of multiple sectors across the Indian economy.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                        {[
                            'Startup Founders', 'Small Business Owners', 'Shop Owners & Traders',
                            'Manufacturers', 'Service Businesses', 'Doctors & Clinics',
                            'Freelancers', 'Consultants', 'Exporters'
                        ].map((tag, i) => (
                            <span key={i} className="bg-dark-bg border border-white/10 px-4 py-2 rounded-full text-gray-300 text-sm md:text-base hover:border-primary-accent/50 transition-colors cursor-default">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* New Section: FAQs for Business Loans & Project Reports */}
            <section className="container mx-auto px-4 md:px-20 mb-12 md:mb-16" data-aos="fade-up">
                <div className="bg-secondary-dark/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-primary-accent/10">
                    <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-6 text-center">Business Loans & Project Reports – FAQs</h2>
                    <div className="space-y-6 text-boulder">
                        <div>
                            <h3 className="font-semibold text-white mb-2 text-base md:text-lg">
                                How much time does it take to prepare a bankable Project Report and CMA data?
                            </h3>
                            <p>Typically, we prepare a detailed project report and CMA data within 3 to 5 business days, depending on the complexity of your business model and the availability of historical financial statements. If you have an urgent bank deadline, let us know, and we will prioritize your file accordingly.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-2 text-base md:text-lg">
                                Does Acharya guarantee loan approval from banks?
                            </h3>
                            <p>No, we do not guarantee loan approvals, as final sanctioning depends entirely on bank policies, CIBIL scores, eligibility, and security valuations. However, our professional documentation, CMA data accuracy, and pre-verification process significantly minimize compliance rejections and maximize approval chances.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-2 text-base md:text-lg">
                                Can a new startup get a business loan without collateral security?
                            </h3>
                            <p>Yes. Under the government's CGTMSE scheme (Credit Guarantee Fund Trust for Micro and Small Enterprises), eligible startups and MSMEs can secure collateral-free business loans up to ₹5 Crores. We help you prepare your project report matching the guidelines of CGTMSE-approved banks.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-2 text-base md:text-lg">
                                What is DSCR (Debt Service Coverage Ratio) and why is it important?
                            </h3>
                            <p>DSCR is a financial metric used by credit managers to assess your ability to repay a loan. It compares your net operating income with your total debt service obligations (interest + principal). Banks generally look for a DSCR of 1.25 or higher to ensure the business produces a healthy cushion of profit.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-2 text-base md:text-lg">
                                What is the difference between working capital limits (CC/OD) and a term loan?
                            </h3>
                            <p>A term loan is a fixed-amount loan disbursed as a lump sum for capital expenses (like buying land, buildings, or machinery) and is repaid via regular monthly installments (EMIs). A Cash Credit (CC) or Overdraft (OD) is a revolving credit limit determined based on your inventory and debtors, used to manage daily cash flow fluctuations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA / Footer-ish area */}
            <section className="container mx-auto px-4 md:px-20 py-16" data-aos="fade-up">
                <div className="bg-gradient-to-r from-secondary-dark to-dark-bg border border-primary-accent/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-accent/5 rounded-full blur-[80px]"></div>

                    <h2 className="font-montserrat text-3xl font-bold mb-4 relative z-10">Talk to a Loan Expert Today</h2>
                    <p className="text-lg text-boulder mb-8 max-w-2xl mx-auto relative z-10">
                        Don’t let documentation stop your business growth. Get professional support and improve your chances of bank approval.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                        <a href="https://wa.me/919446369434?text=Hi%2C%20I%20want%20to%20book%20a%20consultation" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white font-bold px-6 py-3 rounded-full hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                            <DynamicFaIcon name="fa-whatsapp" /> WhatsApp Us Instantly
                        </a>
                        <Link to="/contact" className="bg-white text-dark-bg font-bold px-6 py-3 rounded-full hover:bg-gray-200 transition-colors">
                            Book a Free Consultation
                        </Link>
                    </div>

                    <p className="mt-8 text-xs text-gray-500 max-w-3xl mx-auto relative z-10">
                        * Important Note: Loan approval depends on bank policies, eligibility, and financial viability. We provide professional documentation and support to improve approval chances, but do not guarantee loans.
                    </p>
                </div>
            </section>
        </main >
    );
};

export default LoanSupportPage;
