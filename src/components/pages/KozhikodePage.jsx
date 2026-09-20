import React, { useEffect } from 'react';
import AOS from 'aos';
import SEO from '../common/SEO';
import Breadcrumbs from '../common/Breadcrumbs';
import { Helmet } from 'react-helmet-async';
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

const KozhikodePage = () => {
    useEffect(() => {
        setTimeout(() => {
            AOS.refresh();
        }, 100);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const tickerItems = [
        "GST Filing Kozhikode",
        "Chartered Accountant in Calicut",
        "Income Tax Consultant Kozhikode",
        "Company Registration Kozhikode",
        "ESOP Taxation Kozhikode",
        "Audit Firm Kozhikode",
        "Transfer Pricing Kozhikode",
        "Bookkeeping Services Kozhikode",
        "NRI Tax Filing Kozhikode",
        "DPIIT Registration Kozhikode"
    ];

    const services = [
        {
            num: "01",
            title: "GST Registration & Filing in Kozhikode",
            intro: (
                <>We help with <Link to="/services/gst/registration-profile-management" className="text-primary-accent hover:underline">GST registration</Link>, regular returns, annual reconciliation, ITC checks and responses to GST notices for Calicut & Kozhikode businesses.</>
            ),
            tags: ["GST Registration", "GSTR-1", "GSTR-3B", "ITC Reconciliation"]
        },
        {
            num: "02",
            title: "Income Tax Filing & Planning",
            intro: (
                <><Link to="/services/taxation" className="text-primary-accent hover:underline">Income tax returns</Link> for individuals, firms, companies and NRIs, along with <Link to="/services/taxation/tax-planning" className="text-primary-accent hover:underline">tax planning</Link> and support with department notices.</>
            ),
            tags: ["ITR Filing", "Tax Planning", "TDS", "Notice Response"]
        },
        {
            num: "03",
            title: "Accounting & Bookkeeping Services",
            intro: (
                <>Regular <Link to="/services/accounting/bookkeeping" className="text-primary-accent hover:underline">bookkeeping</Link>, ledger maintenance, bank reconciliation and financial reports that help you understand how your business is doing.</>
            ),
            tags: ["Tally", "Zoho Books", "BRS", "MIS Reports"]
        },
        {
            num: "04",
            title: "Audit & Assurance Firm",
            intro: (
                <>Statutory, tax and <Link to="/services/auditing/internal-audit" className="text-primary-accent hover:underline">internal audits</Link> for companies, firms and other organisations that need reliable financial reporting and compliance.</>
            ),
            tags: ["Statutory Audit", "Tax Audit", "Internal Audit"]
        },

        {
            num: "05",
            title: "Company Registration",
            intro: (
                <>Support with choosing a business structure, registration and the compliance work that follows after the business is formed, including <Link to="/services/business-loans/mudra-loans" className="text-primary-accent hover:underline">Mudra loan</Link> support for eligible small businesses.</>
            ),
            tags: ["Private Limited", "LLP", "MSME", "ROC Compliance"]
        },
        {
            num: "06",
            title: "NRI Tax & Property Income",
            intro: "Remote support for NRIs dealing with Indian income, rental property, capital gains, TDS and other tax requirements.",
            tags: ["NRI ITR", "Rental Income", "Capital Gains", "TDS"]
        }
    ];

    const industries = [
        { icon: "🏪", name: "Traders & Retailers", desc: "GST returns, bookkeeping, ITC reconciliation and income tax support." },
        { icon: "🏥", name: "Clinics & Professionals", desc: "Tax filing, payroll, accounting and advice on compliance requirements." },
        { icon: "🏗️", name: "Construction & Real Estate", desc: "Project accounting, TDS, GST and financial records for ongoing work." },
        { icon: "✈️", name: "NRIs & Gulf Families", desc: "Support with Indian property income, rental income, TDS and tax returns." },
        { icon: "💻", name: "Freelancers & Consultants", desc: "Tax planning, GST and income reporting for professionals with local or overseas clients." },
        { icon: "🏭", name: "Manufacturing & Trading Firms", desc: "Accounting, internal audit, GST compliance and financial reporting for growing businesses." },
        { icon: "🎓", name: "Educational Institutions", desc: "Payroll, accounting and advice on applicable compliance requirements." },
        { icon: "🏢", name: "Growing Companies", desc: "Company compliance, bookkeeping, tax and audit support as the business expands." }
    ];

    const whyUs = [
        {
            num: "01",
            title: "You can speak to the people handling your work",
            desc: "We try to keep communication direct. You should be able to ask questions about your accounts and understand the answer."
        },
        {
            num: "02",
            title: "We explain the work in plain language",
            desc: "Tax and accounting terms can be confusing. We explain what is being done and why it matters to your situation."
        },
        {
            num: "03",
            title: "We look at the details, not just the deadline",
            desc: "Regular reconciliation and proper records can help identify problems before they turn into notices or avoidable costs."
        },
        {
            num: "04",
            title: "You know the scope before the work begins",
            desc: "We discuss the requirement, the work involved and the fee before starting the engagement."
        }
    ];

    const testimonials = [
        {
            text: "“We were running three retail shops and handling GST ourselves. When we got a notice for ITC mismatch, we didn't know what to do. Acharya's team resolved it within two weeks and cleaned up two years of filings.”",
            attr: "Proprietor, garment trader · SM Street area, Kozhikode"
        },
        {
            text: "“I live abroad and manage my family's property income in Kerala. Being able to send documents remotely and get clear updates has made the yearly tax work much easier.”",
            attr: "NRI client, Dubai"
        },
        {
            text: "“Our startup registered as a private limited company based on their advice. They explained the compliance requirements upfront, ROC filing, statutory audit, MCA, and now handle everything so we can focus on the product.”",
            attr: "Co-founder, tech startup · Kozhikode"
        }
    ];

    const areas = [
        {
            title: "Kozhikode City: Mankavu, SM Street, Mavoor Road",
            desc: "Our main office is in Mankavu. GST, income tax, bookkeeping and company compliance for retail traders and merchant businesses around SM Street and Mavoor Road."
        },
        {
            title: "Kallai Timber & Industrial Zone",
            desc: "Statutory audits, cost records and tax filings for timber operators and local manufacturers."
        },
        {
            title: "Vadakara & Koyilandy",
            desc: "GST returns, bookkeeping and NRI taxation advice for traders and professionals across Northern Kozhikode district."
        },
        {
            title: "Feroke & Ramanattukara",
            desc: "Bookkeeping and payroll management for tile factories, trading houses and clay processing units."
        },
        {
            title: "Beypore & Nearby Areas",
            desc: "Tax and accounting services for businesses and families in the southern parts of Kozhikode."
        },
        {
            title: "Online Across Kerala",
            desc: "Documents can be shared digitally for many services, so distance does not have to stop you from getting support."
        }
    ];

    const faqs = [
        {
            q: "What services does a CA in Kozhikode provide?",
            a: "A CA may help with GST registration and filing, income tax returns, bookkeeping, audits, company registration, tax planning and other compliance requirements. The exact service depends on your business or personal situation."
        },
        {
            q: "How much do accounting and tax services cost in Kozhikode?",
            a: "For a small proprietorship needing GST filing and ITR, monthly retainer costs typically range from ₹2,500 to ₹6,000. Companies needing statutory audit, payroll and full compliance fall in a higher range. We provide a fixed-fee quote after understanding your business."
        },
        {
            q: "Do you provide accounting services in Kozhikode for small businesses?",
            a: "Yes. Accounting requirements vary from business to business. We can discuss regular bookkeeping, reconciliation, financial reports and the compliance work connected to your business."
        },
        {
            q: "Do I need to visit the office for tax or accounting work?",
            a: "Not always. Many routine services can be handled through digital document sharing, phone calls and online communication. Some requirements may need an in-person meeting depending on the nature of the work."
        },
        {
            q: "Do you have a CA firm in Calicut?",
            a: "Calicut is the older, more commonly used name for Kozhikode. Our office in Mankavu serves the same city under both names, so if you are comparing CA firms in Calicut, we are one of the options based right here."
        },
        {
            q: "What should I look for in a CA firm in Kozhikode?",
            a: "Look at how directly you can reach the person handling your work, whether the fee is clear before you start, and whether they explain filings in plain language instead of just submitting paperwork. A track record of on-time filing and no penalty history is worth asking about directly."
        },
        {
            q: "Can you help NRIs with Indian income and property taxation?",
            a: "Yes. NRI tax requirements can involve rental income, capital gains, TDS and other Indian tax matters. We first understand the details of the income or transaction and then advise on the relevant compliance work."
        },
        {
            q: "Can you help if my previous accounts or filings are not up to date?",
            a: "We can review the available records and explain what is pending. The steps required depend on the condition of the accounts, previous filings and the nature of the issue."
        }
    ];

    const kozhikodeAreas = [
        "Mankavu", "Mavoor Road", "SM Street", "Kallai", "Vadakara", "Koyilandy", "Feroke", "Ramanattukara", "Kallai Road"
    ];

    const accountingServiceSchema = {
        "@context": "https://schema.org",
        "@type": "AccountingService",
        "name": "Acharya Professional Accountants",
        "image": "https://www.acharyaprofessionalaccountants.in/images/Acharya-Professional-Accountants-OG-image.webp",
        "url": "https://www.acharyaprofessionalaccountants.in/accounting-service-in-kozhikode",
        "telephone": "+919562069434",
        "email": "acharya.apa@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "1st Floor, Palace Arcade, Palace Road, Mankavu",
            "addressLocality": "Kozhikode",
            "addressRegion": "Kerala",
            "postalCode": "673002",
            "addressCountry": "IN"
        },
        "areaServed": ["Kozhikode", "Vadakara", "Koyilandy", "Ramanattukara", "Feroke", "Beypore"],
        "priceRange": "₹₹",
        "foundingDate": "2015",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "96"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Accounting and Tax Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GST Registration & Filing" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Income Tax Filing & Planning" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Accounting & Bookkeeping" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Audit & Assurance" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Company Registration" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "NRI Tax & Property Income" } }
            ]
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <main className="font-inter text-white bg-dark-bg pt-24 md:pt-28 overflow-x-hidden">
            <SEO
                title="CA Firm in Kozhikode | Chartered Accountants in Calicut | Acharya"
                description="Acharya Professional Accountants is a leading CA firm in Kozhikode (Calicut) providing GST filing, income tax returns, bookkeeping, statutory audits, and NRI tax advisory."
                canonical="https://acharyaprofessionalaccountants.in/accounting-service-in-kozhikode"
                schema={[accountingServiceSchema, faqSchema]}
            />
            <div className="container mx-auto px-5 md:px-12 lg:px-20 pt-4">
                <Breadcrumbs />
            </div>

            {/* HERO SECTION */}
            <section className="container mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-20 relative" data-aos="fade-up">
                {/* Backdrop watermark text KKD */}
                <div className="absolute top-1/2 left-4 -translate-y-1/2 font-montserrat text-[16vw] font-bold text-white/[0.01] pointer-events-none select-none z-0">
                    KKD
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch relative z-10">
                    {/* Left Info Column */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                CA Firm in Kozhikode
                            </span>
                        </div>
                        <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            CA & Accounting Services in Kozhikode
                        </h1>
                        <p className="text-lg text-boulder max-w-xl">
                            GST returns, income tax, bookkeeping, audits. All the compliance work that piles up when you're busy running a business. Acharya is a CA firm in Kozhikode that handles it for businesses, professionals, families and NRIs, and explains what's happening at every step.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <ScrollLink
                                to="contact"
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="bg-primary-accent text-dark-bg px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 cursor-pointer text-center"
                            >
                                Book a Free Consultation
                            </ScrollLink>
                            <ScrollLink
                                to="services"
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="border-2 border-primary-accent text-primary-accent bg-transparent px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 cursor-pointer text-center"
                            >
                                View Our Services
                            </ScrollLink>
                        </div>
                    </div>

                    {/* Right Hero Card Column */}
                    <div className="lg:col-span-5 bg-secondary-dark border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col justify-center relative overflow-hidden shadow-2xl space-y-6">
                        <h3 className="font-montserrat text-2xl font-bold text-white">
                            Dealing with a tax or accounting problem right now?
                        </h3>
                        <p className="text-sm text-boulder">
                            Tell us what's going on. We'll tell you what needs to be done and what documents we'll need.
                        </p>
                        <div className="space-y-4 pt-2 border-t border-white/10">
                            <div className="flex gap-3 items-start">
                                <span className="text-primary-accent font-bold">✓</span>
                                <div>
                                    <strong className="block text-white text-sm">Talk to the team doing the work</strong>
                                    <span className="text-xs text-boulder">Not a call centre. The person on the file is the person you talk to.</span>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start">
                                <span className="text-primary-accent font-bold">✓</span>
                                <div>
                                    <strong className="block text-white text-sm">A process you can follow</strong>
                                    <span className="text-xs text-boulder">You'll know what's being filed and when.</span>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start">
                                <span className="text-primary-accent font-bold">✓</span>
                                <div>
                                    <strong className="block text-white text-sm">Most of it can be done online</strong>
                                    <span className="text-xs text-boulder">Documents over WhatsApp or email, no office visit required.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* STATS BAR */}
                <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                        <span className="font-montserrat text-4xl md:text-5xl font-bold text-primary-accent block leading-none">
                            <AnimatedCounter value={500} suffix="+" />
                        </span>
                        <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Active Clients</span>
                    </div>
                    <div>
                        <span className="font-montserrat text-4xl md:text-5xl font-bold text-primary-accent block leading-none">
                            <AnimatedCounter value={10} suffix="+" />
                        </span>
                        <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Years in Kozhikode</span>
                    </div>
                    <div>
                        <span className="font-montserrat text-4xl md:text-5xl font-bold text-primary-accent block leading-none">
                            <AnimatedCounter value={100} suffix="%" />
                        </span>
                        <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">On-Time Filing</span>
                    </div>
                    <div>
                        <span className="font-montserrat text-4xl md:text-5xl font-bold text-primary-accent block leading-none">
                            <AnimatedCounter value={0} prefix="₹" />
                        </span>
                        <span className="text-xs md:text-sm text-silver-sand font-medium uppercase tracking-wider block mt-3">Penalty Record</span>
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

            {/* INTRO SECTION */}
            <section id="about" className="py-20 bg-secondary-dark/10 border-t border-white/5">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Left column */}
                        <div className="lg:col-span-6 space-y-4" data-aos="fade-right">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-primary-accent"></span>
                                <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                    Your local accounting partner
                                </span>
                            </div>
                            <h2 className="font-montserrat text-3xl md:text-4xl font-bold leading-tight">
                                A CA firm in Kozhikode for the everyday financial work businesses cannot ignore
                            </h2>
                        </div>

                        {/* Right column */}
                        <div className="lg:col-span-6 space-y-6 text-boulder text-base md:text-lg leading-relaxed" data-aos="fade-left">
                            <p>
                                Acharya Professional Accountants is an <a href="https://www.icai.org/" target="_blank" rel="noopener noreferrer" className="text-primary-accent underline">ICAI registered</a> CA firm handling accounting and tax work for businesses and individuals in Kozhikode. If you're looking for a CA firm in Kozhikode, we can take care of your regular compliance and also the one-off stuff: a new company registration, a tax notice you weren't expecting, an audit, NRI taxation.
                            </p>
                            <p>
                                We work with traders, retailers, professionals, companies, clinics, construction businesses, families with property in Kerala and clients living abroad. Some clients need a monthly accounting service in Kozhikode. Others contact us only when they have a tax notice or need help setting up a new business. The work is different for every client, so we start by understanding the situation before recommending the next step.
                            </p>
                            <div className="border-l-4 border-primary-accent p-6 bg-secondary-dark rounded-r-2xl space-y-2">
                                <strong className="block text-white font-bold text-base">Looking for a Chartered Accountant in Kozhikode?</strong>
                                <span className="text-sm text-boulder block">Start with a conversation about your requirement. We can discuss the work involved, the documents needed and how we can help.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section id="services" className="py-20 bg-secondary-dark/30 border-y border-white/5">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="section-head max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
                        <div className="kicker flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                Our services
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Accounting, tax and compliance support in one place
                        </h2>
                        <p className="text-boulder text-lg">
                            Whether you need regular support or help with a specific requirement, our services cover the main financial and compliance needs of businesses and individuals.
                        </p>
                    </div>

                    <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <article
                                key={index}
                                className="card bg-secondary-dark border border-white/5 rounded-2xl p-6 md:p-8 hover:border-primary-accent/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-accent/5 flex flex-col justify-between"
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                <div>
                                    <span className="service-no font-montserrat text-sm font-semibold text-primary-accent/50 block mb-3">
                                        {service.num}
                                    </span>
                                    <h3 className="font-montserrat text-xl font-bold text-white mb-3 group-hover:text-primary-accent transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-boulder text-sm mb-6 leading-relaxed">
                                        {service.intro}
                                    </p>
                                </div>
                                <div className="tags flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
                                    {service.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="tag text-[10px] uppercase tracking-wider font-semibold text-silver-sand bg-white/5 px-2 py-1 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </article>
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
                                Who we work with
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Different businesses have different accounting problems
                        </h2>
                        <p className="text-boulder text-lg">
                            Our work includes regular compliance as well as the accounting and tax questions that come with running different types of businesses.
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
                                Why clients work with us
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Good accounting support should make things clearer
                        </h2>
                        <p className="text-boulder text-lg">
                            A CA's job isn't just filing returns. It's catching what needs attention before a small issue turns into a bigger, more expensive one.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
                        {whyUs.map((item) => (
                            <div key={item.num} className="flex gap-6 items-start hover:translate-x-1 transition-transform duration-300 bg-secondary-dark/50 border border-white/5 rounded-2xl p-6">
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
                </div>
            </section>

            {/* PROCESS SECTION */}
            <section className="py-20 border-b border-white/5">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                How we get started
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            A simple process for getting your accounts and compliance in order
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-secondary-dark border-t-4 border-primary-accent rounded-2xl p-6">
                            <strong className="text-primary-accent text-xs uppercase tracking-wider block mb-2 font-bold">Step 01</strong>
                            <h3 className="font-montserrat text-lg font-bold text-white mb-2">Tell us what you need</h3>
                            <p className="text-boulder text-xs leading-relaxed">Share the situation, whether it is regular accounting, a new business, a tax return or a notice.</p>
                        </div>
                        <div className="bg-secondary-dark border-t-4 border-primary-accent rounded-2xl p-6">
                            <strong className="text-primary-accent text-xs uppercase tracking-wider block mb-2 font-bold">Step 02</strong>
                            <h3 className="font-montserrat text-lg font-bold text-white mb-2">We understand the details</h3>
                            <p className="text-boulder text-xs leading-relaxed">We look at the documents and information needed to understand the actual requirement.</p>
                        </div>
                        <div className="bg-secondary-dark border-t-4 border-primary-accent rounded-2xl p-6">
                            <strong className="text-primary-accent text-xs uppercase tracking-wider block mb-2 font-bold">Step 03</strong>
                            <h3 className="font-montserrat text-lg font-bold text-white mb-2">We explain the next steps</h3>
                            <p className="text-boulder text-xs leading-relaxed">You will know what work is required, what documents are needed and what the engagement involves.</p>
                        </div>
                        <div className="bg-secondary-dark border-t-4 border-primary-accent rounded-2xl p-6">
                            <strong className="text-primary-accent text-xs uppercase tracking-wider block mb-2 font-bold">Step 04</strong>
                            <h3 className="font-montserrat text-lg font-bold text-white mb-2">We take care of the work</h3>
                            <p className="text-boulder text-xs leading-relaxed">Once everything is agreed, we handle the relevant filing, accounting or compliance work.</p>
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
                                Local coverage
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Serving Kozhikode and nearby business centres
                        </h2>
                        <p className="text-boulder text-lg">
                            Many routine accounting and tax services can be handled online. We also support clients across the wider Kozhikode region.
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

            {/* CLIENT EXPERIENCES SECTION */}
            <section className="py-20 border-t border-white/5">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="section-head max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
                        <div className="kicker flex items-center gap-3 mb-4">
                            <span className="w-8 h-[1px] bg-primary-accent"></span>
                            <span className="text-primary-accent uppercase tracking-[0.25em] text-xs font-semibold">
                                Client experiences
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4 text-white">
                            What clients value in an accounting relationship
                        </h2>
                    </div>

                    <div className="testimonials grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t, index) => (
                            <article
                                key={index}
                                className="quote bg-secondary-dark border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-primary-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative"
                                style={{ borderLeft: index === 1 ? '3px solid #e5a145' : undefined }}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 italic">
                                    {t.text}
                                </p>
                                <small className="text-xs uppercase tracking-wider text-primary-accent font-semibold leading-relaxed block border-t border-white/5 pt-4 mt-auto not-italic">
                                    {t.attr}
                                </small>
                            </article>
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
                                Frequently asked questions
                            </span>
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
                            Questions people often ask before choosing a CA
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
                        {kozhikodeAreas.map((area) => (
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
                                Speak to a <span className="italic text-primary-accent">Chartered Accountant</span> in Kozhikode
                            </h2>
                            <p className="text-boulder text-lg max-w-xl">
                                Free first consultation. Bring your GST, tax, audit, or registration question; we will give you a straight answer and a clear quote with no obligation.
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
        </main>
    );
};

export default KozhikodePage;
