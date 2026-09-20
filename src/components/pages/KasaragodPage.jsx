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

const KasaragodPage = () => {
    useEffect(() => {
        setTimeout(() => {
            AOS.refresh();
        }, 100);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const tickerItems = [
        "GST Filing Kasaragod",
        "Income Tax Consultant Kasaragod",
        "Company Registration Kasaragod",
        "ESOP Taxation Kasaragod",
        "Audit Firm Kasaragod",
        "Transfer Pricing Kasaragod",
        "Bookkeeping Services Kasaragod",
        "NRI Tax Filing Kasaragod",
        "DPIIT Registration Kasaragod"
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
            desc: "Talk to the person actually working on your file. Clear answers in plain Malayalam, Kannada or English."
        },
        {
            icon: "🌐",
            title: "Full Digital & WhatsApp Workflow",
            desc: "Send documents via WhatsApp or email. Remote convenience for businesses across Kasaragod, Kanhangad and Manjeshwar."
        }
    ];

    const services = [
        {
            num: "01",
            icon: "📊",
            title: "GST Filing Services Kasaragod",
            intro: "We register your business for GST, file your monthly and quarterly returns on time, and handle annual reconciliation. If you receive a GST notice, we draft and submit the response — you don't need to step into a government office.",
            tags: ["GST Registration", "GSTR-1 / 3B", "GSTR-9 Annual Return", "GST Notice Reply", "ITC Reconciliation", "Online GST Filing"]
        },
        {
            num: "02",
            icon: "🧾",
            title: "Income Tax Consultant Kasaragod",
            intro: "We file income tax returns for salaried employees, self-employed professionals, business owners, and NRIs with income or assets in India. We also handle tax planning, TDS compliance, and department notice responses throughout the year.",
            tags: ["ITR Filing", "Tax Planning", "TDS Filing", "NRI Tax Filing", "Tax Audit", "IT Notice Response"]
        },
        {
            num: "03",
            icon: "🔍",
            title: "Audit Firm in Kasaragod",
            intro: "We conduct statutory, internal, and tax audits for companies, LLPs, and partnership firms in Kasaragod. Our audit reports are thorough, deadline-compliant, and come with a management letter highlighting issues before they become liabilities.",
            tags: ["Statutory Audit", "Internal Audit", "Tax Audit Sec 44AB", "Audit & Assurance", "Financial Statements"]
        },
        {
            num: "04",
            icon: "📒",
            title: "Bookkeeping Services Kasaragod",
            intro: "We maintain your accounts on a monthly basis — purchase and sales ledgers, bank reconciliations, stock records, and cash flow statements — so you always have accurate financials ready for a loan application, investor meeting, or tax assessment.",
            tags: ["Tally Accounting", "Bank Reconciliation", "Payroll Processing", "PF & ESI Filings", "MIS & Cash Flow"]
        },
        {
            num: "05",
            icon: "🏢",
            title: "Company Registration Kasaragod",
            intro: "We set up your business structure from day one — advising on the right entity type, handling name approval, ROC incorporation, PAN/TAN registration, and post-incorporation MCA compliance so your company is clean from the start.",
            tags: ["Pvt. Ltd. Registration", "LLP Registration", "MSME / Udyam", "Startup Registration", "ROC & MCA Filing"]
        },
        {
            num: "06",
            icon: "🌐",
            title: "Online Accounting Services Kasaragod",
            intro: "Our fully digital service track means you never need to visit our office for routine work. Send documents via WhatsApp, receive filed returns and signed reports by email — we handle everything remotely with the same quality as in-person service.",
            tags: ["Remote ITR Filing", "Digital GST Returns", "Virtual CA Support", "Cloud Tally", "WhatsApp Coordination"]
        }
    ];

    const whyUs = [
        {
            num: "01",
            title: "A Dedicated CA Knows Your File — Not a Different Person Every Call",
            desc: "Every Kasaragod client is assigned a single relationship CA who handles your account from onboarding through every annual cycle. You never have to re-explain your business. You reach the same person who filed your last return."
        },
        {
            num: "02",
            title: "We File Before the Deadline — Not the Day Of",
            desc: "Our internal compliance calendar triggers client reminders two weeks before every due date. We prepare, review, and submit your returns with time to spare — so a last-minute document delay never causes a late filing penalty."
        },
        {
            num: "03",
            title: "NRI Tax Handled Completely Remotely",
            desc: "Kasaragod has one of the highest NRI concentrations in Kerala. We have refined a fully digital process for Gulf clients — ITR filing, TDS on rent, capital gains, FEMA compliance — without requiring a single trip back to India."
        },
        {
            num: "04",
            title: "Flat-Fee Pricing — No Invoice Surprises",
            desc: "We agree on a fixed fee before we start. Your GST filing, income tax return, or bookkeeping retainer costs exactly what was quoted. No extras charged at year-end, no billing surprises after a notice response."
        },
        {
            num: "05",
            title: "Every Service In-House — GST, Tax, Audit, Registration",
            desc: "We do not refer your GST to one firm and your audit to another. Our Kasaragod team handles all compliance areas under one engagement — which means your financials stay consistent, your fees stay predictable, and nothing falls between the cracks."
        }
    ];

    const testimonials = [
        {
            text: "We run a cashew processing unit in Kasaragod. Acharya handles all our GST, payroll, and annual audit. Filings are always on time and the reports are clean — our bank is happy, we are happy.",
            attr: "Rameshan K. · Cashew Processor, Kasaragod Town"
        },
        {
            text: "I have been in the Gulf for eleven years. Acharya manages my rental income tax, property TDS, and ITR every year without me travelling home. Everything is done on WhatsApp — simple and reliable.",
            attr: "Shafeeq M. · NRI Client, Kanhangad"
        },
        {
            text: "When I registered my trading company in Hosdurg, Acharya completed the full incorporation and GST registration in under two weeks. The process was explained clearly at every step.",
            attr: "Divya R. · Business Owner, Hosdurg"
        }
    ];

    const areas = [
        {
            title: "Kasaragod Town",
            desc: "GST, income tax, audit and company registration for businesses and individuals in the district headquarters."
        },
        {
            title: "Accountant in Kanhangad",
            desc: "Full accounting and compliance services for traders, contractors, and NRI families in Kanhangad and Nileshwar."
        },
        {
            title: "Tax Consultant Hosdurg",
            desc: "GST filing, bookkeeping, and income tax services for retail and trade businesses in the Hosdurg belt."
        },
        {
            title: "Manjeshwar & Bekal",
            desc: "CA services for businesses near the Karnataka border — including cross-state GST compliance and dual-state trade accounting."
        },
        {
            title: "Kasaragod NRI Clients",
            desc: "Remote ITR, TDS on rent, capital gains and FEMA compliance for Kasaragod's large Gulf NRI community — no travel needed."
        },
        {
            title: "All of Kasaragod — Online",
            desc: "We serve clients across every corner of the district digitally. Reach us via WhatsApp, email, or video call — anytime."
        }
    ];

    const faqs = [
        {
            q: "Do you have a physical office in Kasaragod?",
            a: "Yes. We operate from Kasaragod and offer in-person appointments at our local office. We also serve clients across Kanhangad, Hosdurg, Manjeshwar, Bekal, and remote areas of the district fully online through WhatsApp and email — no travel required for routine compliance."
        },
        {
            q: "Can you handle GST and income tax for an NRI living in the Gulf?",
            a: "Yes. We work with a large number of Gulf NRI clients from Kasaragod. We manage ITR filing, TDS deduction on rental income, capital gains computation on property sales, and FEMA-related compliance — all handled digitally. You share your documents via WhatsApp or email and we handle the rest. You do not need to travel to India for any of this."
        },
        {
            q: "My business operates across the Kerala–Karnataka border. Can you manage that?",
            a: "Yes. We regularly handle GST and accounting for businesses in Kasaragod with operations or customers on both sides of the state border. This includes inter-state supply classification, cross-state ITC matching, and maintaining compliant accounts for businesses registered in both Kerala and Karnataka."
        },
        {
            q: "How quickly can you complete GST registration in Kasaragod?",
            a: "GST registration is typically completed within 3–7 working days from the submission of complete documents. We manage the full process — preparing your application, submitting it on the portal, and tracking approval. You will receive your GSTIN as soon as it is issued by the department."
        },
        {
            q: "What is the cost of your GST filing service in Kasaragod?",
            a: "Our GST filing packages are fixed-fee and transparent — priced by the number of returns filed and transaction volume. We quote a fixed monthly or annual fee before starting, with no hidden charges for routine filings. Contact us for a package tailored to your business type and transaction size."
        },
        {
            q: "Do you help with income tax notices from the IT department?",
            a: "Yes. We prepare and file responses to all types of income tax notices — scrutiny assessments, demand notices, mismatch notices (26AS / AIS), and appeal filings before the CIT(A). We review the notice, advise on the correct response strategy, and submit the reply on your behalf within the stipulated deadline."
        },
        {
            q: "Can you register my new company or LLP in Kasaragod?",
            a: "Absolutely. We handle the full company formation process — entity type advice, director KYC and DSC, name reservation on MCA, incorporation filing, Certificate of Incorporation, and subsequent PAN, TAN, and GST registration. A Private Limited Company typically takes 10–15 working days; an LLP or proprietorship is faster."
        }
    ];

    const kasaragodAreas = [
        "Kasaragod Town", "Kanhangad", "Hosdurg", "Manjeshwar",
        "Bekal", "Nileshwar", "Cheruvathur", "Kumbla", "Uppala"
    ];

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="CA Firm in Kasaragod | Chartered Accountant & Tax Services – Acharya Professional Accountants"
                description="Acharya Professional Accountants – a trusted CA firm in Kasaragod offering GST filing, income tax, audit, bookkeeping & company registration across Kasaragod town, Kanhangad, Hosdurg and Manjeshwar."
                keywords="CA firm in Kasaragod, chartered accountant in Kasaragod, GST filing Kasaragod, income tax consultant Kasaragod, audit firm Kasaragod, accounting services Kasaragod, company registration Kasaragod"
                canonical="https://www.acharyaprofessionalaccountants.in/accounting-service-in-kasaragod"
            />

            {/* Structured Schema Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AccountingService",
                    "name": "Acharya Professional Accountants – Kasaragod",
                    "description": "CA firm in Kasaragod offering GST filing, income tax, audit, bookkeeping and company registration services.",
                    "url": "https://www.acharyaprofessionalaccountants.in/accounting-service-in-kasaragod",
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
                        { "@type": "City", "name": "Kasaragod" },
                        { "@type": "City", "name": "Kanhangad" },
                        { "@type": "City", "name": "Hosdurg" },
                        { "@type": "City", "name": "Manjeshwar" },
                        { "@type": "District", "name": "Kasaragod" }
                    ],
                    "serviceType": ["GST Filing", "Income Tax", "Audit", "Bookkeeping", "Company Registration"],
                    "priceRange": "₹₹",
                    "openingHours": "Mo-Sa 09:00-18:00"
                })}
            </script>

            {/* HERO SECTION */}
            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-20 relative" data-aos="fade-up">
                {/* Backdrop watermark text KSG */}
                <div className="absolute top-1/2 left-4 -translate-y-1/2 font-montserrat text-[16vw] font-bold text-white/[0.01] pointer-events-none select-none z-0">
                    KSG
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch relative z-10">
                    {/* Left Info Column */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                ✦ ICAI Registered · Kasaragod
                            </span>
                        </div>
                        <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            CA Firm in<br />
                            <span className="italic text-primary-accent">Kasaragod</span>
                        </h1>
                        <p className="text-lg text-boulder max-w-xl">
                            From GST registration to income tax filing, statutory audit to company formation — we manage every aspect of your financial compliance right here in Kasaragod.
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
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">NRI Tax</span>
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">TDS Filing</span>
                            <span className="text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/5 text-boulder bg-transparent">Payroll & PF</span>
                        </div>
                    </div>

                    {/* Right Stats Column */}
                    <div className="lg:col-span-5 bg-secondary-dark border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col justify-center relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_70%_20%,rgba(229,161,69,0.4),transparent_50%)]" />

                        <div className="relative z-10 grid grid-cols-2 gap-y-12 md:gap-y-16 gap-x-8 md:gap-x-12">
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none"><AnimatedCounter value={600} suffix="+" /></span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Active Clients</span>
                            </div>
                            <div>
                                <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none"><AnimatedCounter value={14} suffix="+" /></span>
                                <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Years in Kasaragod</span>
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
                                Your <span className="italic text-primary-accent">Chartered Accountant</span> in Kasaragod
                            </h2>
                            <div className="text-boulder space-y-4 text-base md:text-lg leading-relaxed">
                                <p>
                                    We are Acharya Professional Accountants — an ICAI-registered CA firm with a permanent presence in Kasaragod. We provide GST compliance, income tax filing, statutory audit, bookkeeping, and company registration services to businesses and individuals across the district. Our team is available in person, by phone, and online — in Malayalam, Tulu, Kannada, and English.
                                </p>
                                <p>
                                    Our client base in Kasaragod includes proprietorships, trading firms, construction contractors, cashew processors, Gulf NRI families managing rental income and property, healthcare professionals, and growing MSMEs. Every engagement gets a <strong className="text-white font-semibold">dedicated CA</strong>, a structured compliance calendar, and communication that cuts through jargon. You always know what is filed, when it is filed, and what comes next.
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
                                <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-xl flex-shrink-0">💬</div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">Multilingual Team</h4>
                                    <p className="text-boulder text-xs leading-relaxed">
                                        We communicate in Malayalam, Tulu, Kannada & English — whichever you are most comfortable with.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-xl flex-shrink-0">✈️</div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">NRI-Specialist Services</h4>
                                    <p className="text-boulder text-xs leading-relaxed">
                                        Kasaragod's large NRI population trusts us for remote Indian tax filing, TDS & FEMA compliance.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-xl flex-shrink-0">🌉</div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">Cross-Border Trade</h4>
                                    <p className="text-boulder text-xs leading-relaxed">
                                        We handle GST and accounting for businesses operating across the Kerala–Karnataka border corridor.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-xl flex-shrink-0">📅</div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">Zero Missed Deadlines</h4>
                                    <p className="text-boulder text-xs leading-relaxed">
                                        Every client has a live compliance calendar. We file before the due date — always, without exception.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-xl flex-shrink-0">🔒</div>
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
                            Accounting Services in <span className="italic text-primary-accent">Kasaragod</span>
                        </h2>
                        <p className="text-boulder text-lg">
                            Every service is delivered locally — from our Kasaragod office to your business. No outsourcing, no call queues, no strangers on your file.
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
                            Why Clients Choose Our <span className="italic text-primary-accent">CA Firm in Kasaragod</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Why us list */}
                        <div className="lg:col-span-7 space-y-8" data-aos="fade-right">
                            {whyUs.map((item, index) => (
                                <div key={index} className="flex gap-6 items-start hover:translate-x-1 transition-transform duration-300">
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
                            We Serve All of <span className="italic text-primary-accent">Kasaragod District</span>
                        </h2>
                        <p className="text-boulder text-lg">
                            Our CA and accounting services reach every town and taluk across Kasaragod — in person and fully online.
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
                            Common Questions — <span className="italic text-primary-accent">CA Services in Kasaragod</span>
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
                        {kasaragodAreas.map((area) => (
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
                                Speak to a <span className="italic text-primary-accent">Chartered Accountant</span> in Kasaragod
                            </h2>
                            <p className="text-boulder text-lg max-w-xl">
                                Book a free first consultation — bring your GST, tax, audit, or registration question and we will give you a direct answer and a clear quote with no obligations.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href="tel:+919562069434"
                                    className="bg-primary-accent text-dark-bg px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 inline-flex items-center gap-3 cursor-pointer"
                                >
                                    📞 Call Now
                                </a>
                                <a
                                    href="https://wa.me/919446369434"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-2 border-primary-accent text-primary-accent bg-transparent px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 cursor-pointer text-center"
                                >
                                    💬 WhatsApp Us
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

export default KasaragodPage;
