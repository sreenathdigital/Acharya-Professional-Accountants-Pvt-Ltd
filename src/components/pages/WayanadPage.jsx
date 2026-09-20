import React, { useEffect } from 'react';
import AOS from 'aos';
import SEO from '../common/SEO';
import Breadcrumbs from '../common/Breadcrumbs';
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

const WayanadPage = () => {
    useEffect(() => {
        setTimeout(() => {
            AOS.refresh();
        }, 100);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const tickerItems = [
        "GST Filing Wayanad",
        "Income Tax Consultant Wayanad",
        "Company Registration Wayanad",
        "ESOP Taxation Wayanad",
        "Audit Firm Wayanad",
        "Transfer Pricing Wayanad",
        "Bookkeeping Services Wayanad",
        "NRI Tax Filing Wayanad",
        "DPIIT Registration Wayanad"
    ];

    const pills = [
        { text: "GST Filing", lit: true },
        { text: "Income Tax", lit: true },
        { text: "Company Registration", lit: true },
        { text: "Statutory Audit", lit: false },
        { text: "Bookkeeping", lit: false },
        { text: "NRI Tax", lit: false },
        { text: "Payroll & PF", lit: false },
        { text: "Internal Audit", lit: false },
        { text: "TDS Filing", lit: false },
        { text: "MSME Registration", lit: false }
    ];

    const promises = [
        {
            icon: "🏛️",
            title: "Senior CA on Every File",
            desc: "All engagements are led and reviewed directly by ICAI-registered chartered accountants. No delegation to junior assistants."
        },
        {
            icon: "📅",
            title: "Zero Missed Deadlines",
            desc: "We run a live compliance calendar for every client. Returns are filed with time to spare — zero penalty record."
        },
        {
            icon: "🔒",
            title: "Transparent Fixed Pricing",
            desc: "No hourly bills or surprise year-end invoices. You know the exact compliance cost before our work starts."
        },
        {
            icon: "💬",
            title: "Direct Access to Your CA",
            desc: "Talk to the person actually working on your file. Clear answers in plain Malayalam or English."
        },
        {
            icon: "🌐",
            title: "Full Digital & WhatsApp Workflow",
            desc: "Send documents via WhatsApp or email. Remote convenience for businesses across Kalpetta, Sultan Bathery and Mananthavady."
        }
    ];

    const services = [
        {
            num: "01",
            icon: "📊",
            title: "GST Filing Services Wayanad",
            intro: "We manage your GST end-to-end — from first-time registration to monthly GSTR-1 & 3B filings, annual returns, and notice responses. You get clean, timely compliance with zero missed deadlines.",
            tags: ["GST Registration", "GSTR-1 / 3B", "GSTR-9 Annual", "GST Notice Reply", "ITC Reconciliation"]
        },
        {
            num: "02",
            icon: "🧾",
            title: "Income Tax Consultant Wayanad",
            intro: "From individual ITR filing to business tax planning and audit-level compliance, we manage your income tax obligations year-round — including NRI filings, TDS, and responding to department notices.",
            tags: ["ITR Filing", "Tax Planning", "TDS Filing", "NRI Tax Filing", "Tax Audit", "Notice Response"]
        },
        {
            num: "03",
            icon: "🔍",
            title: "Audit Firm in Wayanad",
            intro: "We conduct statutory, internal, and tax audits for companies and firms in Wayanad. Our audit process is thorough and constructive — highlighting compliance gaps before they become penalties.",
            tags: ["Statutory Audit", "Internal Audit", "Tax Audit", "Audit & Assurance", "Financial Statements"]
        },
        {
            num: "04",
            icon: "📒",
            title: "Bookkeeping Services Wayanad",
            intro: "We maintain your books monthly — ledgers, bank reconciliations, purchase and sales registers — so your accounts are always current, clean, and ready for tax season or a bank loan application.",
            tags: ["Tally Accounting", "Bank Reconciliation", "Payroll", "PF & ESI Filing", "MIS Reports"]
        },
        {
            num: "05",
            icon: "🏢",
            title: "Company Registration Wayanad",
            intro: "Starting a business in Wayanad? We handle your entire registration — from structure advice and name approval to incorporation, PAN/TAN, and ongoing MCA compliance — so you launch right.",
            tags: ["Pvt. Ltd. Registration", "LLP Registration", "MSME / Udyam", "Startup Registration", "ROC Filing"]
        },
        {
            num: "06",
            icon: "💻",
            title: "Online Accounting Services Wayanad",
            intro: "You don't need to visit our office for routine work. We handle GST, ITR, bookkeeping, and compliance entirely online — sharing documents via WhatsApp or email, with zero disruption to your schedule.",
            tags: ["Remote Filing", "Digital Bookkeeping", "Virtual CA", "Cloud Tally", "WhatsApp Support"]
        }
    ];

    const whyUs = [
        {
            num: "01",
            title: "We Work Here — Not From a Distance",
            desc: "Our CAs are based in Wayanad. When you call, you reach someone who knows your file. When you need to walk in, our door is open. No call centre. No outsourced work."
        },
        {
            num: "02",
            title: "One Relationship Manager for Your Account",
            desc: "Every client gets a single point of contact — a CA who handles your file from start to finish. You never repeat yourself or get passed from one person to another."
        },
        {
            num: "03",
            title: "Clean, Documented Filings — Every Time",
            desc: "We maintain a compliance calendar for every client. Returns are filed with supporting documentation, reconciled properly, and archived — so you are audit-ready at any time."
        },
        {
            num: "04",
            title: "Transparent, Fixed-Fee Pricing",
            desc: "You know the cost before we begin. Our packages are fixed, clearly defined, and sized for small and mid-size businesses in Wayanad. No surprise invoices at year-end."
        },
        {
            num: "05",
            title: "Full Spectrum — Under One Roof",
            desc: "GST, income tax, audit, company registration, payroll, PF — we handle everything. You don't need three different consultants for three different compliance areas."
        }
    ];

    const testimonials = [
        {
            text: "We registered our firm and set up GST in a single week through Acharya. The whole process was handled online — I didn't have to leave Kalpetta even once.",
            attr: "Anoop V. · Proprietor, Kalpetta"
        },
        {
            text: "Our coffee estate accounts were a mess before Acharya took over. Now we have proper monthly reports, and our tax filings are always on time. Complete peace of mind.",
            attr: "Sreeja T. · Estate Owner, Sultan Bathery"
        },
        {
            text: "Being an NRI, managing Indian tax compliance remotely was stressful. Acharya manages everything via WhatsApp — I just send documents and they handle the rest.",
            attr: "Sujith M. · NRI Client, Mananthavady"
        }
    ];

    const areas = [
        {
            title: "CA in Kalpetta",
            desc: "GST, tax, audit and company registration for businesses and individuals in the district headquarters."
        },
        {
            title: "Accountant in Sultan Bathery",
            desc: "Full accounting and compliance services for traders, NRI clients, and plantation businesses in Sultan Bathery."
        },
        {
            title: "Tax Consultant Mananthavady",
            desc: "GST, income tax, payroll and bookkeeping for businesses in Mananthavady and surrounding areas."
        },
        {
            title: "Vythiri & Tourism Belt",
            desc: "Accounting and GST services for resorts, homestays, and hospitality businesses in the Vythiri corridor."
        },
        {
            title: "Plantation Businesses",
            desc: "Specialised CA services for coffee, cardamom, tea, and spice estate operators across Wayanad."
        },
        {
            title: "All of Wayanad — Online",
            desc: "Can't visit? We serve clients across every corner of Wayanad digitally — WhatsApp, email, and video."
        }
    ];

    const faqs = [
        {
            q: "Do you have an office in Wayanad?",
            a: "Yes. We operate from Wayanad and offer in-person consultations at our Kalpetta office. We also serve clients in Sultan Bathery, Mananthavady, Vythiri, and remote areas of the district fully online via WhatsApp and email."
        },
        {
            q: "Who needs GST registration in Wayanad?",
            a: "Any business in Wayanad with annual turnover exceeding ₹40 lakhs (goods) or ₹20 lakhs (services) must register for GST. Businesses making inter-state sales, e-commerce sellers, and certain specific categories must register regardless of turnover. We assess your eligibility and complete the registration within days."
        },
        {
            q: "Can you handle accounts for my plantation or agri-based business?",
            a: "Yes. We work with coffee, cardamom, pepper, tea, and spice businesses in Wayanad. Plantation businesses have specific GST classifications, income tax treatment, and seasonal accounting needs — our team handles all of this correctly, including crop commodity HSN codes and estate-level financials."
        },
        {
            q: "I am an NRI. Can you manage my Indian tax filings remotely?",
            a: "Absolutely. We handle ITR filing, TDS on rental income, capital gains tax, and FEMA-related compliance for NRI clients with property or business interests in Wayanad. All coordination is done digitally — you do not need to travel back to India for routine tax compliance."
        },
        {
            q: "How quickly can you register a new company in Wayanad?",
            a: "A Private Limited Company registration typically takes 10–15 working days from document submission, subject to MCA processing time. LLP and sole proprietorship registrations are faster. We manage DSC, DIN, name reservation, incorporation, and PAN/TAN — you just provide the documents."
        },
        {
            q: "What documents are needed to start GST registration in Wayanad?",
            a: "You will need: PAN card, Aadhaar card, business address proof (electricity bill or rent agreement), bank account details, and a passport-size photograph. Additional documents apply for companies and LLPs. We provide a precise checklist based on your business type at the time of consultation."
        },
        {
            q: "Do you offer affordable packages for small businesses in Wayanad?",
            a: "Yes. We have clear, fixed-fee packages for GST-only filing, combined GST + ITR plans, and annual bookkeeping retainers — all priced for the small and medium business scale common in Wayanad. No hidden charges. We discuss pricing in the first consultation before any commitment."
        }
    ];

    const wayanadAreas = [
        "Kalpetta", "Sultan Bathery", "Mananthavady", "Vythiri",
        "Meppadi", "Panamaram", "Pozhuthana", "Sulthan Bathery"
    ];

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="CA Firm in Wayanad | Chartered Accountant & Tax Services – Acharya Professional Accountants"
                description="Acharya Professional Accountants – a trusted CA firm in Wayanad offering GST filing, income tax, audit, bookkeeping & company registration across Kalpetta, Sultan Bathery and Mananthavady."
                keywords="CA firm in Wayanad, chartered accountant in Wayanad, GST filing Wayanad, income tax consultant Wayanad, audit firm Wayanad, accounting services Wayanad, company registration Wayanad"
                canonical="https://www.acharyaprofessionalaccountants.in/accounting-service-in-wayanad"
            />

            {/* Structured Schema Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AccountingService",
                    "name": "Acharya Professional Accountants – Wayanad",
                    "description": "CA firm in Wayanad offering GST filing, income tax, audit, bookkeeping and company registration services.",
                    "url": "https://www.acharyaprofessionalaccountants.in/accounting-service-in-wayanad",
                    "telephone": ["+919562069434", "+919072118877"],
                    "email": "acharya.apa@gmail.com",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Palace Arcade, Palace Road, Mankavu",
                        "addressLocality": "Kozhikode",
                        "addressRegion": "Kerala",
                        "postalCode": "673002",
                        "addressCountry": "IN"
                    },
                    "areaServed": [
                        { "@type": "City", "name": "Kalpetta" },
                        { "@type": "City", "name": "Sultan Bathery" },
                        { "@type": "City", "name": "Mananthavady" },
                        { "@type": "District", "name": "Wayanad" }
                    ],
                    "serviceType": ["GST Filing", "Income Tax", "Audit", "Bookkeeping", "Company Registration"],
                    "priceRange": "₹₹",
                    "openingHours": "Mo-Sa 09:00-18:00"
                })}
            </script>

            {/* HERO SECTION */}
            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-20 relative" data-aos="fade-up">
                {/* Backdrop watermark text WYD */}
                <div className="absolute top-1/2 left-4 -translate-y-1/2 font-montserrat text-[16vw] font-bold text-white/[0.01] pointer-events-none select-none z-0">
                    WYD
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch relative z-10">
                    {/* Left Info Column */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                ✦ ICAI Registered · Wayanad
                            </span>
                        </div>
                        <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            CA Firm in<br />
                            <span className="italic text-primary-accent">Wayanad</span>
                        </h1>
                        <p className="text-lg text-boulder max-w-xl">
                            We handle your GST, income tax, audit, and compliance — so you can focus entirely on running your business. Serving clients across Kalpetta, Sultan Bathery, Mananthavady, and all of Wayanad.
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
                        {/* Decorative background pulse */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_70%_20%,rgba(229,161,69,0.4),transparent_50%)]" />

                        <div className="relative z-10 grid grid-cols-2 gap-y-12 md:gap-y-16 gap-x-8 md:gap-x-12">
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none"><AnimatedCounter value={500} suffix="+" /></span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Active Clients</span>
                            </div>
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none"><AnimatedCounter value={12} suffix="+" /></span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Years in Wayanad</span>
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
                                Your <span className="italic text-primary-accent">Chartered Accountant</span> in Wayanad
                            </h2>
                            <div className="text-boulder space-y-4 text-base md:text-lg leading-relaxed">
                                <p>
                                    We are Acharya Professional Accountants — a CA firm operating in Wayanad, providing accounting, tax, and compliance services to businesses and individuals across the district. Our office is here, our team is here, and our clients are your neighbours.
                                </p>
                                <p>
                                    Whether you need to file your GST returns before the deadline, register your new company, respond to an income tax notice, or simply get your books in order before year-end — <strong className="text-white font-semibold">we handle it all under one roof</strong>, with qualified CAs who are directly accessible to you.
                                </p>
                                <p>
                                    We work with sole traders, MSMEs, partnership firms, private limited companies, plantation businesses, homeowners, NRIs, and salaried individuals. If you have a financial compliance need in Wayanad, we are the team to call.
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
                                <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-xl flex-shrink-0">
                                    🏛️
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">ICAI-Qualified CAs</h4>
                                    <p className="text-boulder text-xs leading-relaxed">
                                        All engagements are led by ICAI-registered chartered accountants. No delegation to unqualified staff.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-xl flex-shrink-0">
                                    📍
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">Based in Wayanad</h4>
                                    <p className="text-boulder text-xs leading-relaxed">
                                        Our office is in Wayanad. Walk in, call, or WhatsApp — we are always reachable in Malayalam or English.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-xl flex-shrink-0">
                                    📅
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">Deadline-Driven Process</h4>
                                    <p className="text-boulder text-xs leading-relaxed">
                                        Every client file has a compliance calendar. We file before the due date — you never pay a late fee.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-xl flex-shrink-0">
                                    🔒
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">Confidential & Secure</h4>
                                    <p className="text-boulder text-xs leading-relaxed">
                                        Your financial data stays private. We follow strict document handling and data security protocols.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-xl flex-shrink-0">
                                    💬
                                </div>
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
                            Accounting Services in <span className="italic text-primary-accent">Wayanad</span>
                        </h2>
                        <p className="text-boulder text-lg">
                            We offer a complete range of financial and compliance services — all delivered from our Wayanad office, tailored to the scale and type of your business.
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
                                            {service.icon}
                                        </span>
                                    </div>
                                    <h3 className="font-montserrat text-xl font-bold text-white mb-3 group-hover:text-primary-accent transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-boulder text-sm mb-6 leading-relaxed">
                                        {service.intro}
                                    </p>
                                </div>
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

            {/* WHY US SECTION */}
            <section id="why-us" className="py-20">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                Why Us
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Why Clients Choose Our <span className="italic text-primary-accent">CA Firm in Wayanad</span>
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
                            We Serve All of <span className="italic text-primary-accent">Wayanad</span>
                        </h2>
                        <p className="text-boulder text-lg">
                            Our CA services reach every corner of Wayanad — in person across our key town offices and fully online for remote clients.
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
                            Common Questions — <span className="italic text-primary-accent">CA Services Wayanad</span>
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
                        {wayanadAreas.map((area) => (
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
                                Speak to a <span className="italic text-primary-accent">Chartered Accountant</span> in Wayanad
                            </h2>
                            <p className="text-boulder text-lg max-w-xl">
                                Free first consultation. Bring your GST, tax, audit, or registration question — we will give you a straight answer and a clear quote, no obligations.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href="tel:+919562069434"
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
                                            <a href="tel:+919562069434" className="hover:text-primary-accent transition-colors">+91 9562 06 9434</a><br />
                                            <a href="tel:+919072118877" className="hover:text-primary-accent transition-colors">+91 9072 11 8877</a>
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
                                            Kalpetta, Wayanad, Kerala
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

                            {/* Map Embed matching standard look */}
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

            {/* OTHER LOCATIONS LINKS */}
            <section className="py-16 border-t border-white/5 bg-secondary-dark/10">
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
                                        else if (city.includes('Bengaluru')) slug = 'bangalore';
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

export default WayanadPage;
