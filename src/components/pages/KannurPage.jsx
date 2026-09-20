import React, { useEffect } from 'react';
import AOS from 'aos';
import SEO from '../common/SEO';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { locationGroups } from '../../data/locationData';
import AnimatedCounter from '../common/AnimatedCounter';
import {
    IconCheck,
    IconPhone,
    IconEnvelope,
    IconMapMarker,
    IconClock
} from '../common/Icons';

const KannurPage = () => {
    useEffect(() => {
        setTimeout(() => {
            AOS.refresh();
        }, 100);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const tickerItems = [
        "GST Filing Kannur",
        "Income Tax Consultant Kannur",
        "Company Registration Kannur",
        "ESOP Taxation Kannur",
        "Audit Firm Kannur",
        "Transfer Pricing Kannur",
        "Bookkeeping Services Kannur",
        "NRI Tax Filing Kannur",
        "DPIIT Registration Kannur"
    ];

    const services = [
        {
            num: "01",
            title: "GST Registration & Filing",
            intro: "Most businesses reach us first with a GST problem — a missed deadline, an ITC mismatch, or a notice they can't make sense of. We handle it, and then keep it clean going forward.",
            items: [
                "New GST registration and threshold-crossing businesses",
                "Monthly and quarterly GSTR-1 and GSTR-3B filing",
                "Annual GSTR-9 and GSTR-9C reconciliation",
                "ITC verification and mismatch resolution",
                "E-invoicing setup for eligible businesses",
                "GST notice response and department representation"
            ],
            note: "ITC mismatches are the most common reason businesses in Kannur get a GST notice. We catch them during filing, not after.",
            tags: ["GST Registration", "GSTR-1 / 3B", "GSTR-9 Annual", "GST Notice Reply", "ITC Reconciliation"]
        },
        {
            num: "02",
            title: "Income Tax Filing & Planning",
            intro: "Whether you run a sole proprietorship, a partnership, or a registered company — and especially if you're an NRI managing assets in Kerala — your tax return needs proper attention.",
            items: [
                "ITR filing for individuals, HUFs, firms, and companies",
                "Advance tax computation (Sec. 234B & 234C)",
                "TDS filing — Form 24Q, 26Q, 27Q",
                "Legitimate tax planning and income structuring",
                "Income tax notice response and scrutiny handling",
                "PAN and TAN applications"
            ],
            note: "Mixing personal and business expenses is the single most common mistake that causes trouble in assessments. Good bookkeeping prevents it from day one.",
            tags: ["ITR Filing", "Tax Planning", "TDS Filing", "NRI Tax Filing", "Tax Audit", "Notice Response"]
        },
        {
            num: "03",
            title: "Bookkeeping & Accounting",
            intro: "Tidy books aren't just for the taxman. They tell you where your money is going, which parts of the business are actually earning, and what you can afford to do next.",
            items: [
                "Monthly bookkeeping — Tally, QuickBooks, Zoho Books",
                "Ledger maintenance and account reconciliation",
                "P&L statements and balance sheets",
                "Bank reconciliation statements (BRS)",
                "MIS reports for business owners",
                "Year-end accounts finalization"
            ],
            note: "Most clients get a clearer view of their business within three months — without changing how they currently work.",
            tags: ["Tally Accounting", "Bank Reconciliation", "Payroll", "PF & ESI Filing", "MIS Reports"]
        },
        {
            num: "04",
            title: "Audit & Assurance",
            intro: "Statutory audit is a legal requirement for many companies. Internal audit is something you do because you want to actually know what's happening inside your business.",
            items: [
                "Statutory audit under the Companies Act 2013",
                "Tax audit under Section 44AB",
                "GST audit and annual return (GSTR-9C)",
                "Internal audit for process and control review",
                "Stock audit for inventory-heavy businesses",
                "Bank audit support"
            ],
            note: "We audit across trading, healthcare, manufacturing, and services — and give you a report you can actually use, not just one that satisfies the regulator.",
            tags: ["Statutory Audit", "Internal Audit", "Tax Audit", "Audit & Assurance", "Financial Statements"]
        },
        {
            num: "05",
            title: "Company Registration & ROC Compliance",
            intro: "Starting fresh in Kannur, or thinking about formalising an existing business? We handle the registration paperwork from start to finish and keep you compliant afterwards.",
            items: [
                "Private limited company incorporation",
                "LLP and partnership firm registration",
                "Sole proprietorship — MSME/Udyam, GST registration",
                "ROC filings — annual returns, director changes",
                "MCA compliance for existing companies",
                "Shop and establishment registration"
            ],
            note: "Your business structure affects how much tax you pay and what risks you carry personally. Worth choosing carefully at the beginning.",
            tags: ["Pvt. Ltd. Registration", "LLP Registration", "MSME / Udyam", "Startup Registration", "ROC Filing"]
        },
        {
            num: "06",
            title: "Payroll & HR Compliance",
            intro: "If you have employees, payroll compliance adds up quickly — PF, ESI, professional tax, TDS on salary. We manage all of it so you don't have to chase deadlines yourself.",
            items: [
                "Monthly payroll processing",
                "PF and ESI filing and registration",
                "Professional Tax (Kerala) compliance",
                "TDS on salary computation and Form 24Q filing",
                "Payslip generation and records",
                "Form 16 issuance at year end"
            ],
            note: null,
            tags: ["PF & ESI Filing", "Payroll Processing", "Form 16", "Professional Tax"]
        }
    ];

    const industries = [
        { icon: "🧵", name: "Handloom & Textile Businesses", desc: "Kannur's weaving industry has specific GST classification questions around fabrics and export documentation that most generic CAs overlook." },
        { icon: "✈️", name: "Gulf-Connected Families & NRIs", desc: "NRI taxation, foreign remittance accounting, and Kerala-based income reporting for those managing property or business from abroad." },
        { icon: "🏪", name: "Wholesale & Retail Traders", desc: "Especially businesses doing interstate supply where GST compliance is complex and ITC reconciliation needs ongoing attention." },
        { icon: "🏗️", name: "Construction & Real Estate", desc: "Project-based accounting, sub-contractor TDS, and WCT compliance — handled from the foundation up, not patched together at year end." },
        { icon: "🏥", name: "Healthcare & Clinics", desc: "Knowing which medical services are GST-exempt and which are taxable is something many clinic owners get wrong. We get it right from the start." },
        { icon: "🤝", name: "Co-operatives & Societies", desc: "Kannur has a strong co-operative culture. We handle audit and compliance for societies, credit co-ops, and registered organisations." },
        { icon: "💻", name: "Freelancers & IT Consultants", desc: "Professionals with international clients who need to manage GST registration, advance tax, and foreign income declarations correctly." }
    ];

    const whyUs = [
        {
            num: "01",
            title: "You Talk to the CA, Not a Helpdesk",
            desc: "The person handling your account is a qualified CA or senior accountant. You won't be passed to a trainee or receive a reply three days later from someone who doesn't know your file."
        },
        {
            num: "02",
            title: "We Keep Things Plain",
            desc: "Tax compliance is already complicated. We explain what we're doing and why in language that makes sense — not to show off, but because you should understand what's happening with your own business."
        },
        {
            num: "03",
            title: "Problems Don't Surprise Us",
            desc: "Most notices and penalties are predictable. We flag issues while there's still room to fix them — not after the deadline has passed and your options are limited."
        },
        {
            num: "04",
            title: "Fixed Fees. No Surprises.",
            desc: "We give you a clear quote before we start. What we quote is what you pay. If your situation changes, we'll discuss it — we won't quietly charge more at the end of the year."
        }
    ];

    const testimonials = [
        {
            text: "We had an ITC mismatch going back two years and were scared of what the notice meant. Acharya's team resolved it quickly, explained exactly what had gone wrong, and set up a system so it won't happen again.",
            attr: "Textile trader · Kannur district"
        },
        {
            text: "I'm based in Sharjah and have property and a small business registered in Kannur. Managing it remotely was a mess until I found this firm. Now everything is filed on time and I get clear summaries without having to chase anyone.",
            attr: "NRI client · UAE-based, Kannur income"
        },
        {
            text: "We incorporated as a private limited company on their advice. They explained the full compliance picture upfront — ROC, audit, MCA — and handle it all. No surprises, no missed deadlines.",
            attr: "Director, services company · Thalassery"
        }
    ];

    const areas = [
        {
            title: "CA in Thalassery",
            desc: "GST returns, bookkeeping, tax planning, and partnership firm registration for local businesses."
        },
        {
            title: "Accountant in Payyanur",
            desc: "Complete accounting, bookkeeping, and tax filings for retailers, traders, and cooperative members."
        },
        {
            title: "Tax Consultant in Iritty",
            desc: "Dedicated GST filing, advance tax planning, and NRI asset taxation advisory."
        },
        {
            title: "Taliparamba & Mattannur",
            desc: "CA audits, corporate registration, and MCA compliance for commercial operators near the airport belt."
        },
        {
            title: "Gulf NRI Asset Services",
            desc: "Remote compliance, capital gains computation, and property tax management handled fully over WhatsApp."
        },
        {
            title: "All of Kannur — Online",
            desc: "Coordinate entirely online with documents via email/WhatsApp and digital acknowledgment files."
        }
    ];

    const faqs = [
        {
            q: "How much does a CA firm in Kannur typically charge?",
            a: "It depends on what you need. A small proprietorship requiring GST filing and an ITR typically costs between ₹2,500 and ₹6,000 per month on a retainer. Companies needing statutory audit, payroll, and full compliance will be higher. We give you a fixed-fee quote after a short conversation about your business — no ambiguity."
        },
        {
            q: "Do I need a CA, or can I handle GST filing on my own?",
            a: "You can manage basic GST filing yourself. But ITC reconciliation, the annual GSTR-9, and responding to department notices are where errors compound. Most clients who come to us filed on their own for a few years and arrived with a backlog of mismatches. Starting right is cheaper than fixing it later."
        },
        {
            q: "Can you handle clients outside Kannur town — Thalassery, Payyanur, Iritty?",
            a: "Yes. We work with businesses across the Kannur district and nearby taluks. Most of the work is done remotely through shared documents and calls. We travel for audits when needed. Distance isn't a barrier for day-to-day compliance work."
        },
        {
            q: "My accountant left and the records are in rough shape. Can you take over?",
            a: "Yes, and this is something we've done many times. We'll need access to previous returns, books, and login credentials. We'll give you an honest picture of where things stand before we take it on — no false promises about overnight fixes, but a clear plan for getting things in order."
        },
        {
            q: "I'm an NRI with rental income and a small business in Kannur. Can you help?",
            a: "Yes, this is a common situation for Kannur clients. NRI taxation involves FEMA considerations, TDS on rental income, foreign remittance accounting, and annual ITR filing in India. We handle all of this remotely — most NRI clients don't need to visit Kerala just for tax matters."
        },
        {
            q: "How do you handle income tax notices?",
            a: "Notice response and representation before the Assessing Officer is part of our standard work. We handle notices under Section 143(1), 143(2), 148, and 139(9) defective return notices. If you've received a notice, contact us — the sooner we look at it, the more options are available."
        }
    ];

    const kannurAreas = [
        "Kannur", "Thalassery", "Payyanur", "Iritty", "Taliparamba", "Mattannur", "Dharmadam", "Anjarakandy"
    ];

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="CA Firm in Kannur | Accounting & Tax Services — Acharya"
                description="Acharya Professional Accountants provides CA, GST filing, handloom tax advisory, income tax, and audit support for businesses in Kannur from our Kozhikode office."
                canonical="https://acharyaprofessionalaccountants.in/accounting-service-in-kannur"
            />
            <div className="container mx-auto px-5 md:px-12 lg:px-20 pt-4">
                <Breadcrumbs />
            </div>

            {/* HERO SECTION */}
            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-20 relative" data-aos="fade-up">
                {/* Backdrop watermark text KNR */}
                <div className="absolute top-1/2 left-4 -translate-y-1/2 font-montserrat text-[16vw] font-bold text-white/[0.01] pointer-events-none select-none z-0">
                    KNR
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch relative z-10">
                    {/* Left Info Column */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                ✦ ICAI Registered · Kannur
                            </span>
                        </div>
                        <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            CA Firm in<br />
                            <span className="italic text-primary-accent">Kannur</span>
                        </h1>
                        <p className="text-lg text-boulder max-w-xl">
                            Straightforward accounting and tax compliance done properly. Serving traders, handloom weavers, exporters, and Gulf-connected families across Thalassery, Payyanur, and Iritty.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <ScrollLink
                                to="contact"
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="bg-primary-accent text-dark-bg px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 cursor-pointer text-center"
                            >
                                Book Free Consultation
                            </ScrollLink>
                            <ScrollLink
                                to="services"
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="border-2 border-primary-accent text-primary-accent bg-transparent px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 cursor-pointer text-center"
                            >
                                View All Services
                            </ScrollLink>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-6">
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-primary-accent text-primary-accent bg-primary-accent/5 font-semibold">GST Filing</span>
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-primary-accent text-primary-accent bg-primary-accent/5 font-semibold">Income Tax</span>
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-primary-accent text-primary-accent bg-primary-accent/5 font-semibold">Audit & Assurance</span>
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">Bookkeeping</span>
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">Company Registration</span>
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">Payroll & PF</span>
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">NRI Tax</span>
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">TDS Filing</span>
                        </div>
                    </div>

                    {/* Right Stats Column */}
                    <div className="lg:col-span-5 bg-secondary-dark border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col justify-center relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_70%_20%,rgba(229,161,69,0.4),transparent_50%)]" />

                        <div className="relative z-10 grid grid-cols-2 gap-y-12 md:gap-y-16 gap-x-8 md:gap-x-12">
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none"><AnimatedCounter value={500} suffix="+" /></span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Active Clients</span>
                            </div>
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none"><AnimatedCounter value={10} suffix="+" /></span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Years Experience</span>
                            </div>
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none"><AnimatedCounter value={100} suffix="%" /></span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">On-Time Filing</span>
                            </div>
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none"><AnimatedCounter value={0} prefix="₹" /></span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Penalty Record</span>
                            </div>
                            <div className="col-span-2 border-t border-white/10 pt-6 mt-2">
                                <span className="font-montserrat text-3xl font-bold text-primary-accent block leading-none">ICAI Registered</span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-2">Chartered Accountants</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TICKER */}
            <div className="ticker border-y border-white/5 py-4 overflow-hidden bg-secondary-dark/30">
                <div className="animate-marquee-custom">
                    {[...tickerItems, ...tickerItems].map((item, idx) => (
                        <span key={idx} className="flex items-center text-xs tracking-wider uppercase text-boulder gap-2.5 mx-6 whitespace-nowrap">
                            <span className="text-primary-accent font-bold">●</span> {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* WHO WE ARE (ABOUT) SECTION */}
            <section id="about" className="py-20 bg-secondary-dark/10 border-t border-white/5">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Left Content column */}
                        <div className="lg:col-span-7 space-y-6" data-aos="fade-right">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-primary-accent"></span>
                                <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                    Who We Are
                                </span>
                            </div>
                            <h2 className="font-montserrat text-3xl md:text-4xl font-bold leading-tight">
                                Your <span className="italic text-primary-accent">Chartered Accountant</span> in Kannur
                            </h2>
                            <div className="text-boulder space-y-4 text-base md:text-lg leading-relaxed">
                                <p>
                                    We are Acharya Professional Accountants — a professional CA firm providing reliable accounting, tax planning, GST filing, audit, and company registration support in Kannur. We understand the specific regional business landscape, with deep experience advising the weaving and handloom sector, local retail traders, and cross-border families.
                                </p>
                                <p>
                                    Whether you need to file your GST returns before the deadline, register your new company, respond to an income tax notice, or simply get your books in order before year-end — <strong className="text-white font-semibold">we handle it all under one roof</strong>, with qualified CAs who are directly accessible to you.
                                </p>
                                <p>
                                    We work with sole traders, MSMEs, partnership firms, private limited companies, wholesalers, and NRI clients. If you have a financial compliance need in Kannur, we are the team to call.
                                </p>
                            </div>
                            <div className="pt-4">
                                <ScrollLink
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    className="inline-flex items-center bg-primary-accent text-dark-bg px-8 py-3.5 rounded-full font-semibold hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                                >
                                    Talk to Our CA <span className="ml-2">→</span>
                                </ScrollLink>
                            </div>
                        </div>

                        {/* Right pillars column */}
                        <div className="lg:col-span-5 bg-secondary-dark border border-white/5 rounded-3xl p-8 space-y-6 shadow-xl" data-aos="fade-left">
                            <h3 className="font-montserrat text-lg font-bold text-white mb-4 pb-2 border-b border-white/5">
                                Our Client Promises
                            </h3>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-xl flex-shrink-0">🏛️</div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">ICAI-Qualified CAs</h4>
                                    <p className="text-boulder text-xs leading-relaxed">
                                        All engagements are led by ICAI-registered chartered accountants. No delegation to unqualified staff.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-xl flex-shrink-0">📍</div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">Active Local Presence</h4>
                                    <p className="text-boulder text-xs leading-relaxed">
                                        Active support across Kannur district. Walk in, call, or WhatsApp — we are always reachable in Malayalam or English.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-xl flex-shrink-0">📅</div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">Deadline-Driven Process</h4>
                                    <p className="text-boulder text-xs leading-relaxed">
                                        Every client file has a compliance calendar. We file before the due date — you never pay a late fee.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-xl flex-shrink-0">🔒</div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">Confidential & Secure</h4>
                                    <p className="text-boulder text-xs leading-relaxed">
                                        Your financial data stays private. We follow strict document handling and data security protocols.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-xl flex-shrink-0">💬</div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">Jargon-Free Advice</h4>
                                    <p className="text-boulder text-xs leading-relaxed">
                                        We explain your tax position in plain language so you always know where you stand — no confusing accounting-speak.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section id="services" className="py-20 bg-secondary-dark/30 border-y border-white/5">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                Our Services
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Accounting Services in <span className="italic text-primary-accent">Kannur</span>
                        </h2>
                        <p className="text-boulder text-lg">
                            We offer a complete range of financial and compliance services — all delivered by qualified CAs, tailored to the scale of your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-secondary-dark border border-white/5 rounded-2xl p-6 md:p-8 hover:border-primary-accent/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-accent/5 flex flex-col justify-between"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="font-montserrat text-sm font-semibold text-primary-accent/50 block">
                                            {service.num}
                                        </span>
                                        <span className="text-2xl rounded-lg bg-primary-accent/5 w-10 h-10 flex items-center justify-center border border-white/5">
                                            {index === 0 ? "📊" : index === 1 ? "🧾" : index === 2 ? "📒" : index === 3 ? "🔍" : index === 4 ? "🏢" : "💻"}
                                        </span>
                                    </div>
                                    <h3 className="font-montserrat text-xl font-bold text-white mb-3 group-hover:text-primary-accent transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-boulder text-sm mb-6 leading-relaxed">
                                        {service.intro}
                                    </p>
                                    <ul className="space-y-3 mb-6">
                                        {service.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                                <span className="text-primary-accent mt-0.5 flex-shrink-0">
                                                    <IconCheck className="w-4 h-4" />
                                                </span>
                                                <span className="text-xs leading-relaxed text-boulder">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {service.note && (
                                    <div className="border-l-2 border-primary-accent pl-4 py-2 mt-4 bg-primary-accent/5 rounded-r-xl">
                                        <p className="text-[11px] text-boulder italic leading-relaxed">
                                            {service.note}
                                        </p>
                                    </div>
                                )}
                                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
                                    {service.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="text-[10px] uppercase tracking-wider font-semibold text-silver-sand bg-white/5 px-2 py-1 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHO WE WORK WITH (INDUSTRIES) */}
            <section className="py-20">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                Industries served
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Who We Work With in Kannur
                        </h2>
                        <p className="text-boulder text-lg">
                            We work across most industries in the Kannur district. A few of the business types we handle most often:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {industries.map((ind, index) => (
                            <div
                                key={index}
                                className="bg-secondary-dark border border-white/5 rounded-2xl p-6 hover:border-primary-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/5"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                <div className="w-12 h-12 rounded-full bg-primary-accent/10 flex items-center justify-center text-2xl mb-4">
                                    {ind.icon}
                                </div>
                                <h3 className="font-montserrat text-lg font-bold text-white mb-2">
                                    {ind.name}
                                </h3>
                                <p className="text-boulder text-sm leading-relaxed">
                                    {ind.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section id="why-us" className="py-20 bg-secondary-dark/30 border-y border-white/5">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                Why Us
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Why Clients Choose Our <span className="italic text-primary-accent">CA Firm in Kannur</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Why us list */}
                        <div className="lg:col-span-7 space-y-8" data-aos="fade-right">
                            {whyUs.map((item) => (
                                <div key={item.num} className="flex gap-6 items-start hover:translate-x-1 transition-transform duration-300">
                                    <span className="font-montserrat text-3xl md:text-4xl font-bold text-primary-accent/30 leading-none">
                                        {item.num}
                                    </span>
                                    <div>
                                        <h3 className="font-montserrat text-lg font-bold text-white mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-boulder text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Testimonials stack */}
                        <div className="lg:col-span-5 space-y-6" data-aos="fade-left">
                            {testimonials.map((t, index) => (
                                <div
                                    key={index}
                                    className="bg-secondary-dark border border-white/5 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between hover:border-primary-accent/30 transition-all duration-300"
                                    style={{ borderLeft: index === 1 ? '3px solid #e5a145' : '1px solid rgba(255,255,255,0.05)' }}
                                >
                                    <span className="font-serif text-primary-accent/10 text-7xl absolute -top-4 -left-2 select-none pointer-events-none">
                                        “
                                    </span>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-4 pt-4 italic relative z-10">
                                        {t.text}
                                    </p>
                                    <div className="border-t border-white/5 pt-3 mt-auto">
                                        <span className="text-xs uppercase tracking-wider text-primary-accent font-semibold leading-relaxed block">
                                            {t.attr}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* AREAS COVERED SECTION */}
            <section id="areas" className="py-20 bg-secondary-dark/30 border-y border-white/5">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                Coverage
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            We Serve All of <span className="italic text-primary-accent">Kannur</span>
                        </h2>
                        <p className="text-boulder text-lg">
                            Our CA services reach every corner of Kannur district — fully online for remote clients and in person across key towns:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {areas.map((area, index) => (
                            <div
                                key={index}
                                className="bg-secondary-dark border border-white/5 rounded-2xl p-6 hover:border-primary-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                <h3 className="font-montserrat text-lg font-bold text-primary-accent mb-2">
                                    {area.title}
                                </h3>
                                <p className="text-boulder text-sm leading-relaxed">
                                    {area.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section id="faq" className="py-20">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                FAQ
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Common Questions — <span className="italic text-primary-accent">CA Services Kannur</span>
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <details
                                key={index}
                                className="group bg-secondary-dark border border-white/5 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden"
                                data-aos="fade-up"
                                data-aos-delay={index * 30}
                            >
                                <summary className="flex items-center justify-between text-base md:text-lg font-bold font-montserrat text-white cursor-pointer select-none">
                                    <span>{faq.q}</span>
                                    <span className="ml-4 flex-shrink-0 rounded-full border border-white/10 p-1.5 text-primary-accent transition group-open:rotate-45">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </span>
                                </summary>
                                <div className="mt-4 text-boulder text-sm md:text-base leading-relaxed border-t border-white/5 pt-4">
                                    <p>{faq.a}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* WE COVER STRIP */}
            <section className="py-8 bg-secondary-dark/40 border-t border-white/5">
                <div className="container mx-auto px-5 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-4">
                    <span className="text-primary-accent uppercase tracking-[0.2em] text-xs font-bold whitespace-nowrap">
                        We Cover
                    </span>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {kannurAreas.map((area) => (
                            <span
                                key={area}
                                className="bg-white/5 text-gray-300 text-xs px-3 py-1.5 rounded-full border border-white/5 hover:border-primary-accent/30 transition-colors cursor-default"
                            >
                                {area}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION & CONTACT INFO */}
            <section id="contact" className="py-20 border-t border-white/5">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Contact details text */}
                        <div className="lg:col-span-7 flex flex-col justify-center space-y-6" data-aos="fade-right">
                            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                Speak to a <span className="italic text-primary-accent">Chartered Accountant</span> in Kannur
                            </h2>
                            <p className="text-boulder text-lg max-w-xl">
                                Free first consultation. Bring your GST, tax, audit, or registration question — we will give you a straight answer and a clear quote, no obligations.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href="tel:+919561694914"
                                    className="bg-primary-accent text-dark-bg px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 inline-flex items-center gap-3 cursor-pointer"
                                >
                                    📞 Call Us Now
                                </a>
                                <a
                                    href="https://wa.me/919446369434"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-2 border-primary-accent text-primary-accent bg-transparent px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 cursor-pointer text-center"
                                >
                                    💬 WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* Office Detail Cards & Map */}
                        <div className="lg:col-span-5 space-y-6" data-aos="fade-left">
                            <div className="bg-secondary-dark border border-white/5 rounded-3xl p-8 space-y-6 shadow-2xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent flex-shrink-0">
                                        <IconPhone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-wider text-primary-accent font-bold mb-1">Call</h4>
                                        <p className="text-gray-200 text-sm leading-relaxed">
                                            <a href="tel:+919561694914" className="hover:text-primary-accent transition-colors">+91 95616 94914</a><br />
                                            <a href="tel:+919012118877" className="hover:text-primary-accent transition-colors">+91 90121 18877</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent flex-shrink-0">
                                        <IconEnvelope className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-wider text-primary-accent font-bold mb-1">Email</h4>
                                        <p className="text-gray-200 text-sm leading-relaxed">
                                            <a href="mailto:acharya.apa@gmail.com" className="hover:text-primary-accent transition-colors">acharya.apa@gmail.com</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent flex-shrink-0">
                                        <IconMapMarker className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-wider text-primary-accent font-bold mb-1">Office</h4>
                                        <p className="text-gray-200 text-sm leading-relaxed">
                                            1st Floor, Palace Arcade,<br />
                                            Palace Road, Mankavu,<br />
                                            Kozhikode 673002
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent flex-shrink-0">
                                        <IconClock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-wider text-primary-accent font-bold mb-1">Hours</h4>
                                        <p className="text-gray-200 text-sm leading-relaxed">
                                            Monday – Saturday<br />
                                            9:00 AM – 6:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Embed */}
                            <div className="h-64 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3077.6841848514887!2d75.8030430737993!3d11.2358719889422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6596ca4d1cb11%3A0xa76f81f9ba68fee1!2sAcharya%20professional%20accountants%20pvt%20ltd!5e1!3m2!1sen!2sin!4v1750755342483!5m2!1sen!2sin"
                                    className="w-full h-full border-0 filter grayscale contrast-125 brightness-75"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* OTHER LOCATIONS */}
            <section className="py-16 border-t border-white/5">
                <div className="container mx-auto px-5 md:px-12 lg:px-20" data-aos="fade-up">
                    <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-8 text-center">
                        Other Locations We Serve
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {locationGroups.map((group, index) => (
                            <div key={index} className="bg-secondary-dark/40 rounded-2xl p-6 border border-white/5">
                                <h3 className="text-primary-accent font-semibold text-lg mb-4 pb-2 border-b border-white/5">
                                    {group.region}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {group.cities.map((city) => {
                                        let slug = city.toLowerCase();
                                        if (city.includes('Delhi')) slug = 'delhi';
                                        else if (city.includes('Kochi')) slug = 'kochi';
                                        else if (city.includes('Bengaluru')) slug = 'bengaluru';
                                        else if (city.includes('Mangaluru')) slug = 'mangaluru';
                                        else slug = city.trim().toLowerCase().replace(/\s+/g, '-');

                                        return (
                                            <Link
                                                key={city}
                                                to={`/accounting-service-in-${slug}`}
                                                className="inline-block bg-white/5 hover:bg-primary-accent hover:text-dark-bg text-boulder hover:text-white text-xs md:text-sm px-4 py-2 rounded-full transition-all duration-300 border border-white/5 hover:border-transparent"
                                            >
                                                {city}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default KannurPage;
