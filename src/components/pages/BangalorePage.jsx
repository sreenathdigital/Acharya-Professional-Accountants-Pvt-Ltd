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

const BangalorePage = () => {
    useEffect(() => {
        setTimeout(() => {
            AOS.refresh();
        }, 100);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const tickerItems = [
        "GST Filing Bangalore",
        "Income Tax Consultant Bangalore",
        "Company Registration Bangalore",
        "ESOP Taxation Bangalore",
        "Audit Firm Bangalore",
        "Transfer Pricing Bangalore",
        "Bookkeeping Services Bangalore",
        "NRI Tax Filing Bangalore",
        "DPIIT Registration Bangalore"
    ];

    const pills = [
        { text: "GST Filing", lit: true },
        { text: "Income Tax", lit: true },
        { text: "Startup Compliance", lit: true },
        { text: "Company Registration", lit: true },
        { text: "ESOP Taxation", lit: false },
        { text: "Transfer Pricing", lit: false },
        { text: "Statutory Audit", lit: false },
        { text: "Bookkeeping", lit: false },
        { text: "NRI Tax", lit: false },
        { text: "Payroll & PF", lit: false },
        { text: "DPIIT Recognition", lit: false },
        { text: "Virtual CFO", lit: false }
    ];

    const promises = [
        {
            icon: "🏛️",
            title: "Senior CA on Every File",
            desc: "All engagements are led and reviewed directly by ICAI-registered chartered accountants. No delegation to junior assistants."
        },
        {
            icon: "🚀",
            title: "Startup & ESOP Specialist",
            desc: "DPIIT registration, ESOP schemes, RSU tax, transfer pricing, and fundraising support — handled in-house."
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
            title: "Multilingual Support",
            desc: "Active communication in Kannada, Malayalam, Tamil, Hindi, and English to match Bangalore's diverse ecosystem."
        }
    ];

    const services = [
        {
            ico: "📊",
            title: "GST Filing Services Bangalore",
            desc: "We manage the complete GST lifecycle for Bangalore businesses — registration, monthly GSTR-1 and 3B filings, quarterly returns, GSTR-9 annual reconciliation, and department notice responses. For SaaS companies and software exporters, we handle LUT filings for zero-rated exports and GST on import of services under reverse charge.",
            chips: ["GST Registration", "GSTR-1 / 3B", "GSTR-9 Annual", "LUT for Exporters", "RCM Compliance", "GST Notice Reply"]
        },
        {
            ico: "🧾",
            title: "Income Tax Consultant Bangalore",
            desc: "We file income tax returns for Bangalore's salaried tech professionals (including those with RSUs, ESOPs, and foreign income), business owners, LLPs, and companies. Year-round tax planning, advance tax computation, TDS compliance, and full notice management — so no department query catches you off-guard.",
            chips: ["ITR — All Categories", "RSU / ESOP Taxation", "Foreign Income Disclosure", "TDS Filing & TAN", "Advance Tax Planning", "IT Notice Response"]
        },
        {
            ico: "🚀",
            title: "Startup CA Services Bangalore",
            desc: "We are a CA firm that understands Bangalore's startup lifecycle — from day-zero incorporation and DPIIT recognition through seed-round compliance, investor MIS, ESOP scheme setup, and Series A due diligence preparation. We work with founders who need a CA that speaks both accounting and startup.",
            chips: ["DPIIT Recognition", "Startup Incorporation", "ESOP Scheme Setup", "Investor MIS Reports", "Due Diligence Support", "Founder Tax Planning"]
        },
        {
            ico: "🔍",
            title: "Audit Firm in Bangalore",
            desc: "We conduct statutory, internal, and tax audits for private limited companies, LLPs, and large partnership firms in Bangalore. Our audit deliverables are board-ready — signed report, financial statements, and a management letter with findings your leadership team can actually act on.",
            chips: ["Statutory Audit", "Internal Audit", "Tax Audit Sec 44AB", "Transfer Pricing Audit", "Financial Statements"]
        },
        {
            ico: "🌐",
            title: "Transfer Pricing & International Tax",
            desc: "For Bangalore-based companies with subsidiaries, parent entities, or contract relationships overseas — we handle transfer pricing documentation (Form 3CEB), APA support, FEMA compliance for outward remittances, and income tax treaties. Essential for IT services firms, SaaS companies, and captive units.",
            chips: ["TP Documentation", "Form 3CEB Filing", "FEMA Compliance", "Outward Remittance", "DTAA Benefits"]
        },
        {
            ico: "📒",
            title: "Bookkeeping & Payroll Bangalore",
            desc: "Monthly bookkeeping, payroll processing, and PF/ESI compliance for Bangalore companies — from a 5-person seed-stage startup to a 200-person growth-stage firm. We keep your books investor-grade and your payroll compliant, without you needing a full-time finance team on day one.",
            chips: ["Monthly Bookkeeping", "Payroll Processing", "PF & ESI Filing", "Professional Tax", "MIS & P&L Reports", "Virtual CFO"]
        }
    ];

    const comparisonRows = [
        {
            metric: "Who handles your file",
            us: "A dedicated, named CA — available by phone and WhatsApp",
            typical: "Rotating junior staff; CA reviews only at submission"
        },
        {
            metric: "GST filing turnaround",
            us: "Filed 3–5 days before the due date, every month",
            typical: "Often filed on the due date, sometimes after"
        },
        {
            metric: "Startup & ESOP expertise",
            us: "✓ DPIIT, ESOP schemes, RSU tax, fundraising compliance",
            typical: "✗ Not covered or referred elsewhere",
            isBoolean: true
        },
        {
            metric: "Transfer pricing / international",
            us: "✓ TP documentation, Form 3CEB, FEMA, DTAA in-house",
            typical: "✗ Typically outsourced or not offered",
            isBoolean: true
        },
        {
            metric: "Pricing clarity",
            us: "Fixed fee agreed before engagement starts — no surprises",
            typical: "Hourly or variable billing; extras added at year-end"
        },
        {
            metric: "Communication language",
            us: "Kannada, Malayalam, Tamil, Hindi & English",
            typical: "English only, or inconsistent"
        },
        {
            metric: "Service scope",
            us: "✓ GST, tax, audit, payroll, registration — one firm",
            typical: "✗ Often specialised; other services referred out",
            isBoolean: true
        },
        {
            metric: "Digital / remote access",
            us: "✓ Full service via WhatsApp & email — no office visit needed",
            typical: "✗ Mostly in-person; digital workflows inconsistent",
            isBoolean: true
        }
    ];

    const testimonials = [
        {
            role: "SaaS Startup · Koramangala",
            text: "We raised our seed round and needed a CA who understood cap tables, ESOP taxation, and investor reporting — not just GST. Acharya handled everything from incorporation to our first audit. They speak startup.",
            author: "Aryan S.",
            company: "Founder, SaaS Company, Koramangala"
        },
        {
            role: "Tech Professional · Whitefield",
            text: "I have RSUs from my US employer and rental income in Bangalore. My ITR used to take a consultant two months to file incorrectly. Acharya files it accurately within a week — FEMA disclosure, foreign tax credit, everything.",
            author: "Priya N.",
            company: "Senior Engineer, Whitefield"
        },
        {
            role: "IT Services Firm · Electronic City",
            text: "We have a subsidiary in Singapore and contract workers across India. Transfer pricing documentation, GSTR for software exports, and monthly payroll — Acharya manages it all. One firm, zero coordination gaps.",
            author: "Venkatesh R.",
            company: "Director, IT Services, Electronic City"
        }
    ];

    const areas = [
        {
            title: "Koramangala",
            desc: "Startup incorporation, DPIIT, ESOP, GST and ITR for founders and tech businesses in Bangalore's startup hub."
        },
        {
            title: "Indiranagar",
            desc: "Income tax, bookkeeping and GST for professionals, retail businesses and boutique firms in Indiranagar."
        },
        {
            title: "HSR Layout",
            desc: "CA services for tech professionals with RSUs, ESOPs, and NRI income — and for startups operating from HSR."
        },
        {
            title: "Whitefield",
            desc: "Income tax, transfer pricing, and payroll for IT park professionals and companies in Whitefield and ITPB."
        },
        {
            title: "Electronic City",
            desc: "Statutory audit, GST, and company compliance for IT services, BPO, and manufacturing firms in E-City."
        },
        {
            title: "Bellandur & Sarjapur",
            desc: "Accounting and tax services for tech professionals, startup employees, and growing businesses in Bellandur."
        },
        {
            title: "MG Road & CBD",
            desc: "Company registration, audit, and GST compliance for established businesses in Bangalore's commercial centre."
        },
        {
            title: "All of Bangalore — Online",
            desc: "Full digital service anywhere in Bangalore — WhatsApp, email, and video. No office visit needed for routine work."
        }
    ];

    const faqs = [
        {
            q: "Do you have a physical office in Bangalore?",
            a: "Yes. We operate from our Bangalore office and are available for in-person consultations. We also provide a fully digital service for clients across Koramangala, Indiranagar, HSR Layout, Whitefield, Electronic City, Bellandur, and all other areas — all routine compliance handled via WhatsApp and email, no office visit required."
        },
        {
            q: "I work at a tech company in Bangalore and have RSUs from a US-listed employer. How do you handle my ITR?",
            a: "RSU taxation is one of the most common and frequently mis-filed situations for Bangalore's tech professionals. We handle the full ITR including: RSU vesting income reported as perquisite, capital gains on subsequent sale (including DTAA benefit if applicable), Foreign Asset Schedule (Schedule FA) disclosure, and foreign tax credit claims for tax withheld by the US employer. We also ensure your Form 26AS and AIS match before filing to avoid scrutiny notices."
        },
        {
            q: "Can you help register my startup and get DPIIT recognition in Bangalore?",
            a: "Yes. We handle the full startup setup — Private Limited Company or LLP incorporation on MCA, DPIIT recognition application (for income tax exemption under Section 80-IAC and angel tax exemption), GST registration, TAN and TDS setup, and ESOP scheme drafting if required. We also continue as your CA firm for monthly compliance, payroll, and investor reporting as you scale."
        },
        {
            q: "My SaaS company exports software to clients overseas. What GST filings do I need?",
            a: "Software and SaaS exports are classified as export of services under GST and are zero-rated, meaning you can supply without charging GST provided you file a Letter of Undertaking (LUT) at the start of each financial year. We file your LUT, handle GSTR-1 for zero-rated exports, ensure your ITC claims on domestic expenses are properly claimed, and manage RCM on any import of services (overseas subscriptions, cloud services, etc.)."
        },
        {
            q: "Do you handle transfer pricing documentation for companies with overseas entities?",
            a: "Yes. For Bangalore companies with international related-party transactions — IT service agreements with overseas subsidiaries, software licensing to parent companies, shared service cost allocations, or inter-company loans — we prepare transfer pricing documentation, the accountant's report in Form 3CEB, and benchmarking analysis. We also handle FEMA compliance for outward remittances and overseas direct investments."
        },
        {
            q: "What does your GST filing service cost in Bangalore?",
            a: "Our GST filing packages are fixed-fee and vary by filing frequency and transaction volume. A small business on quarterly QRMP scheme pays a different rate from a company filing monthly with high-volume B2B transactions. We provide a clear, itemised quote in the first consultation — no hidden charges, no variable billing. Contact us for pricing based on your specific GSTIN and transaction profile."
        },
        {
            q: "Can you register my new company and also manage its ongoing compliance in Palakkad?",
            a: "Yes. We handle incorporation end-to-end — entity type advice, name reservation, ROC filing, Certificate of Incorporation, PAN, TAN, and GST registration. Once incorporated, we continue as your CA firm for bookkeeping, GST returns, ITR, payroll, and statutory audit — so there is no handover gap between setup and ongoing compliance."
        }
    ];

    const bangaloreAreas = [
        "Koramangala", "Indiranagar", "HSR Layout", "Whitefield", "Electronic City",
        "Bellandur", "Sarjapur", "MG Road", "Jayanagar", "Malleshwaram", "Yelahanka", "Hebbal", "Marathahalli"
    ];

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="CA Firm in Bangalore | Chartered Accountant & Tax Services – Acharya Professional Accountants"
                description="Acharya Professional Accountants – a trusted CA firm in Bangalore offering GST filing, income tax, startup compliance, ESOP taxation, transfer pricing, audit & company registration across Indiranagar, Koramangala, HSR Layout, Whitefield and Electronic City."
                keywords="CA firm in Bangalore, chartered accountant in Bangalore, GST filing Bangalore, income tax consultant Bangalore, audit firm Bangalore, accounting services Bangalore, company registration Bangalore, startup CA Bangalore, ESOP tax Bangalore"
                canonical="https://www.acharyaprofessionalaccountants.in/accounting-service-in-bangalore"
                robots="noindex,follow"
            />

            {/* Structured Schema Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AccountingService",
                    "name": "Acharya Professional Accountants – Bangalore",
                    "description": "CA firm in Bangalore offering GST filing, income tax, startup compliance, ESOP taxation, audit and company registration for tech companies, startups and professionals.",
                    "url": "https://www.acharyaprofessionalaccountants.in/accounting-service-in-bangalore",
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
                        { "@type": "City", "name": "Bangalore" },
                        { "@type": "City", "name": "Koramangala" },
                        { "@type": "City", "name": "Indiranagar" },
                        { "@type": "City", "name": "Whitefield" },
                        { "@type": "City", "name": "Electronic City" },
                        { "@type": "City", "name": "HSR Layout" },
                        { "@type": "City", "name": "Bellandur" }
                    ],
                    "serviceType": ["GST Filing", "Income Tax", "Startup Compliance", "ESOP Taxation", "Transfer Pricing", "Audit", "Company Registration"],
                    "priceRange": "₹₹",
                    "openingHours": "Mo-Sa 09:00-18:00"
                })}
            </script>

            {/* HERO SECTION */}
            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-20 relative" data-aos="fade-up">
                {/* Backdrop watermark text BLR */}
                <div className="absolute top-1/2 left-4 -translate-y-1/2 font-montserrat text-[16vw] font-bold text-white/[0.01] pointer-events-none select-none z-0">
                    BLR
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch relative z-10">
                    {/* Left Info Column */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                ✦ ICAI Registered · Bangalore
                            </span>
                        </div>
                        <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            CA Firm in<br />
                            <span className="italic text-primary-accent">Bangalore</span>
                        </h1>
                        <p className="text-lg text-boulder max-w-xl">
                            We manage GST, income tax, company compliance, audit, and startup-specific financial services — for Bangalore's tech professionals, funded startups, and growing businesses. Completely and on time.
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
                    </div>

                    {/* Right Stats Column */}
                    <div className="lg:col-span-5 bg-secondary-dark border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col justify-center relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_70%_20%,rgba(229,161,69,0.4),transparent_50%)]" />

                        <div className="relative z-10 grid grid-cols-2 gap-y-12 md:gap-y-16 gap-x-8 md:gap-x-12">
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none">
                                    <AnimatedCounter value={800} suffix="+" />
                                </span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Active Clients</span>
                            </div>
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none">
                                    <AnimatedCounter value={15} suffix="+" />
                                </span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Years in Bangalore</span>
                            </div>
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none">
                                    <AnimatedCounter value={100} suffix="%" />
                                </span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">On-Time Filing</span>
                            </div>
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none">
                                    <AnimatedCounter value={0} prefix="₹" />
                                </span>
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

            {/* SERVICE PILLS */}
            <div className="flex flex-wrap gap-2.5 justify-center py-6 px-5 md:px-12 lg:px-20 border-b border-white/5 bg-secondary-dark/30">
                {pills.map((pill, idx) => (
                    <span
                        key={idx}
                        className={`text-[10px] md:text-xs tracking-wider uppercase px-4 py-1.5 rounded-full border transition-all duration-300 ${pill.lit
                                ? 'border-primary-accent text-primary-accent bg-primary-accent/5 font-semibold shadow-sm shadow-primary-accent/10'
                                : 'border-white/5 text-boulder bg-transparent hover:border-white/10'
                            }`}
                    >
                        {pill.text}
                    </span>
                ))}
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
                                Your <span className="italic text-primary-accent">Chartered Accountant</span> in Bangalore
                            </h2>
                            <div className="text-boulder space-y-4 text-base md:text-lg leading-relaxed">
                                <p>
                                    We are Acharya Professional Accountants — an ICAI-registered CA firm serving businesses and professionals across Bangalore. We provide GST compliance, income tax filing, startup financial services, statutory audit, and company registration — all from our Bangalore office, handled by qualified CAs who are directly reachable.
                                </p>
                                <p>
                                    Bangalore's professional landscape is unlike any other city in India — salaried tech employees with RSUs and ESOPs, seed-funded startups navigating DPIIT compliance, SaaS companies with overseas revenue and LUT filing obligations, and expat professionals with multi-country tax residency questions. <strong className="text-white font-semibold">We handle all of it.</strong> Our team stays current with the specific compliance demands of Bangalore's tech and startup ecosystem — not just generic tax filing.
                                </p>
                                <p>
                                    Every engagement is assigned to a dedicated CA. You get one point of contact, consistent communication, and zero deadline misses — from your first GST return to your fifth fundraising round.
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
                                Our Key Strengths
                            </h3>

                            {promises.map((feat, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-xl flex-shrink-0">
                                        {feat.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm mb-1">{feat.title}</h4>
                                        <p className="text-boulder text-xs leading-relaxed">
                                            {feat.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
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
                            Accounting Services in <span className="italic text-primary-accent">Bangalore</span>
                        </h2>
                        <p className="text-boulder text-lg">
                            Full-spectrum financial and compliance services — built for Bangalore's fast-moving professional and business environment.
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
                                            {`0${index + 1}`}
                                        </span>
                                        <span className="text-2xl rounded-lg bg-primary-accent/5 w-10 h-10 flex items-center justify-center border border-white/5">
                                            {service.ico}
                                        </span>
                                    </div>
                                    <h3 className="font-montserrat text-xl font-bold text-white mb-3 group-hover:text-primary-accent transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-boulder text-sm mb-6 leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
                                    {service.chips.map((tag, idx) => (
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

            {/* WHY CHOOSE US */}
            <section id="why-us" className="py-20 bg-secondary-dark/10 border-b border-white/5">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                Why Choose Us
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Why Bangalore Businesses Choose <span className="italic text-primary-accent">Acharya</span>
                        </h2>
                        <p className="text-boulder text-lg mb-8">
                            A direct comparison — what we bring to every Bangalore client vs what the typical CA engagement looks like.
                        </p>
                    </div>

                    {/* comparison table */}
                    <div className="overflow-x-auto rounded-2xl border border-white/5 bg-secondary-dark/40 shadow-2xl mb-12" data-aos="fade-up">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-secondary-dark/80">
                                    <th className="p-4 md:p-5 text-left text-xs uppercase tracking-wider font-semibold text-silver-sand border-b border-white/5 w-[28%]">
                                        What Matters to You
                                    </th>
                                    <th className="p-4 md:p-5 text-left text-xs uppercase tracking-wider font-semibold text-primary-accent border-b border-white/5 w-[36%]">
                                        ✦ Acharya Professional Accountants
                                    </th>
                                    <th className="p-4 md:p-5 text-left text-xs uppercase tracking-wider font-semibold text-silver-sand border-b border-white/5 w-[36%]">
                                        Typical CA Firm
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonRows.map((row, idx) => (
                                    <tr key={idx} className="border-b border-white/5 last:border-0 hover:bg-white/[0.01] transition-colors">
                                        <td className="p-4 md:p-5 text-xs md:text-sm font-semibold text-white">
                                            {row.metric}
                                        </td>
                                        <td className="p-4 md:p-5 text-xs md:text-sm text-gray-200 font-medium">
                                            {row.isBoolean ? (
                                                <span className="text-primary-accent font-semibold">{row.us}</span>
                                            ) : row.us}
                                        </td>
                                        <td className="p-4 md:p-5 text-xs md:text-sm text-white/30">
                                            {row.typical}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Testimonials stack */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16" data-aos="fade-up">
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
                                        {t.author}
                                    </span>
                                    <span className="text-[10px] text-boulder block mt-0.5">
                                        {t.company}
                                    </span>
                                </div>
                            </div>
                        ))}
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
                            We Serve All of <span className="italic text-primary-accent">Bangalore</span>
                        </h2>
                        <p className="text-boulder text-lg">
                            Our CA and accounting services reach every town and commercial district across Bangalore — in person and fully online.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                            Common Questions — <span className="italic text-primary-accent">CA Services in Bangalore</span>
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
                        {bangaloreAreas.map((area) => (
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
                                Speak to a <span className="italic text-primary-accent">Chartered Accountant</span> in Bangalore
                            </h2>
                            <p className="text-boulder text-lg max-w-xl">
                                First consultation is free and without obligation. GST, income tax, startup compliance, ESOP tax, audit or company registration — bring your question and we will give you a direct answer and a clear fee quote.
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
                                            1st Floor, Palace Arcade,<br />
                                            Palace Road, Mankavu,<br />
                                            Kozhikode, Kerala 673002
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

export default BangalorePage;
