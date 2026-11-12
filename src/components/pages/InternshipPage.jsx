import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../common/SEO';
import DynamicFaIcon from '../common/FontAwesomeRegistry';

const InternshipPage = () => {
    useEffect(() => {
        AOS.refresh();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <main className="relative z-10 font-inter text-white bg-transparent pt-24 md:pt-28">
            <SEO
                title="Accounting & Finance Internship in Kerala | Acharya"
                description="Join Acharya's Accounting & Finance Internship in Kozhikode. Practical training in GST, Income Tax, Audit for BCom, MCom, MBA, CMA, ACCA students."
                canonical="https://www.acharyaprofessionalaccountants.in/Internship"
            />

            {/* =========================
          Page Intro
      ========================== */}
            <section
                className="container mx-auto px-4 md:px-20 mb-10 md:mb-14"
                data-aos="fade-up"
            >
                <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">
                    Careers
                </p>

                <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-6">
                    Accounting & Finance Internship Programs in Kozhikode, Kerala
                </h1>

                <div className="bg-secondary-dark/65 backdrop-blur-sm border border-primary-accent/15 rounded-2xl p-6 md:p-8 mb-8">
                    <p className="text-lg text-boulder leading-relaxed">
                        Acharya Professional Accountants offers structured accounting internship in Kerala and finance internship in Kerala programs designed to provide real-world professional exposure. Based in Kozhikode, our internship programs help students understand how accounting, finance, taxation, and compliance work in actual professional environments. Whether you are a degree student, post-graduate, or pursuing professional qualifications, our finance internship in Kozhikode focuses on practical learning, industry relevance, and career readiness.
                    </p>
                </div>
            </section>

            {/* =========================
          FYUGP Internship Stats
      ========================== */}
            <section
                className="relative z-10 py-16 bg-secondary-dark/30 backdrop-blur-sm border-y border-white/5 mb-16"
                data-aos="fade-up"
                data-aos-delay="50"
            >
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="bg-secondary-dark/65 backdrop-blur-sm border border-primary-accent/15 rounded-3xl p-8 md:p-10 text-center relative overflow-hidden shadow-2xl mb-12">
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_70%_20%,rgba(229,161,69,0.3),transparent_50%)]"></div>
                        <span className="text-primary-accent uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
                            Trusted by Students Across Kerala
                        </span>
                        <span className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent block leading-none">
                            1,800+ Students
                        </span>
                        <span className="text-white text-lg md:text-xl font-semibold mt-3 block">
                            Successfully Completed Their FYUGP Internship (2025–26)
                        </span>
                        <div className="w-16 h-[2px] bg-primary-accent my-4 mx-auto"></div>
                        <p className="text-boulder text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                            Acharya Professional Accountants is proud to have successfully guided and trained more than 1,800+ students through their FYUGP (Four-Year Undergraduate Programme) Internship during the academic year 2025–26.
                        </p>
                        <div className="mt-5">
                            <Link
                                to="/fyugp-internship"
                                className="inline-flex items-center gap-2 bg-primary-accent text-dark-bg font-bold px-6 py-2.5 rounded-full hover:bg-korma hover:text-white transition-all text-sm shadow-md"
                            >
                                <span>Explore Dedicated FYUGP Internship Details</span>
                                <DynamicFaIcon name="fa-arrow-right" className="text-xs" />
                            </Link>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h3 className="font-montserrat text-xl md:text-2xl font-bold text-white mb-6 text-center lg:text-left">
                            Through our structured internship programs, students gained practical exposure in:
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="bg-secondary-dark/65 backdrop-blur-sm border border-white/5 rounded-full px-6 py-3.5 flex items-center gap-3 text-white text-sm">
                                <span className="w-6 h-6 rounded-full bg-primary-accent/20 flex items-center justify-center text-primary-accent text-xs flex-shrink-0">✓</span>
                                <span>Accounting and Bookkeeping</span>
                            </div>
                            <div className="bg-secondary-dark/65 backdrop-blur-sm border border-white/5 rounded-full px-6 py-3.5 flex items-center gap-3 text-white text-sm">
                                <span className="w-6 h-6 rounded-full bg-primary-accent/20 flex items-center justify-center text-primary-accent text-xs flex-shrink-0">✓</span>
                                <span>GST and Taxation Basics</span>
                            </div>
                            <div className="bg-secondary-dark/65 backdrop-blur-sm border border-white/5 rounded-full px-6 py-3.5 flex items-center gap-3 text-white text-sm">
                                <span className="w-6 h-6 rounded-full bg-primary-accent/20 flex items-center justify-center text-primary-accent text-xs flex-shrink-0">✓</span>
                                <span>Finance and Business Operations</span>
                            </div>
                            <div className="bg-secondary-dark/65 backdrop-blur-sm border border-white/5 rounded-full px-6 py-3.5 flex items-center gap-3 text-white text-sm">
                                <span className="w-6 h-6 rounded-full bg-primary-accent/20 flex items-center justify-center text-primary-accent text-xs flex-shrink-0">✓</span>
                                <span>Audit Support Activities</span>
                            </div>
                            <div className="bg-secondary-dark/65 backdrop-blur-sm border border-white/5 rounded-full px-6 py-3.5 flex items-center gap-3 text-white text-sm">
                                <span className="w-6 h-6 rounded-full bg-primary-accent/20 flex items-center justify-center text-primary-accent text-xs flex-shrink-0">✓</span>
                                <span>Professional Documentation</span>
                            </div>
                            <div className="bg-secondary-dark/65 backdrop-blur-sm border border-white/5 rounded-full px-6 py-3.5 flex items-center gap-3 text-white text-sm">
                                <span className="w-6 h-6 rounded-full bg-primary-accent/20 flex items-center justify-center text-primary-accent text-xs flex-shrink-0">✓</span>
                                <span>Workplace Ethics and Compliance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================
          Internship Section (Degree/PG)
      ========================== */}
            <section
                className="container mx-auto px-4 md:px-20 mb-16 md:mb-20"
                data-aos="fade-up"
            >
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Content Side */}
                    <div className="lg:w-1/2">
                        <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">
                            Internship Program
                        </p>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-5 leading-tight">
                            Accounting & Finance Internship in Kerala for Degree & Post-Graduation Students
                        </h2>
                        <p className="text-lg text-boulder mb-6 leading-relaxed">
                            This accounting internship in Kerala is designed specifically for degree and post-graduation students who want to convert academic knowledge into practical accounting and finance skills. Conducted through structured training and guided exposure, the program reflects real accounting firm workflows.
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="bg-secondary-dark/65 backdrop-blur-sm border border-primary-accent/20 rounded-xl p-5">
                                <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                                    <DynamicFaIcon name="fa-briefcase" className="text-primary-accent" />
                                    Accounting Internship in Kozhikode with Practical Office Exposure
                                </h3>
                                <p className="text-boulder text-sm mb-4">
                                    Our accounting internship in Kozhikode introduces students to:
                                </p>
                                <div className="grid grid-cols-1 gap-y-2">
                                    {[
                                        'Practical accounting entries and bookkeeping',
                                        'Understanding real business transactions',
                                        'Basics of GST and compliance structure',
                                        'Introduction to income tax documentation',
                                        'Audit support and working paper preparation',
                                    ].map((item) => (
                                        <div key={item} className="flex items-start gap-2 text-boulder text-sm">
                                            <i className="fas fa-check text-primary-accent mt-1 text-xs"></i>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-boulder text-sm mt-4 italic">
                                    The program helps students gain confidence and clarity in accounting and finance functions followed in professional offices.
                                </p>
                            </div>

                            <div className="bg-secondary-dark/65 backdrop-blur-sm border border-primary-accent/20 rounded-xl p-5">
                                <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                                    <DynamicFaIcon name="fa-chart-line" className="text-primary-accent" />
                                    Finance Internship in Kozhikode for Early Career Learners
                                </h3>
                                <p className="text-boulder text-sm leading-relaxed">
                                    Through this finance internship in Kozhikode, students learn how finance concepts are applied in real business environments. The focus remains on building foundational finance knowledge along with professional discipline and accuracy. This makes it an ideal finance internship in Kerala for students preparing for entry-level accounting and finance roles.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 text-sm text-white">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                                        <DynamicFaIcon name="fa-calendar-alt" />
                                    </div>
                                    <div>
                                        <p className="text-primary-accent text-xs uppercase tracking-wider font-bold">Duration</p>
                                        <p>1 - 3 Months</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                                        <DynamicFaIcon name="fa-laptop-house" />
                                    </div>
                                    <div>
                                        <p className="text-primary-accent text-xs uppercase tracking-wider font-bold">Mode</p>
                                        <p>Onsite & Hybrid</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                                        <DynamicFaIcon name="fa-certificate" />
                                    </div>
                                    <div>
                                        <p className="text-primary-accent text-xs uppercase tracking-wider font-bold">Benefit</p>
                                        <p>Certificate & Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://wa.me/919446369434?text=Hi%20I%20am%20interested%20in%20the%20Accounting%20Internship"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex justify-center items-center bg-primary-accent text-dark-bg font-semibold px-8 py-3 rounded-full hover:bg-korma transition-all duration-300 shadow-lg shadow-primary-accent/25"
                            >
                                Apply for Internship
                            </a>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="lg:w-1/2 relative">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary-accent/20 to-transparent rounded-3xl blur-2xl opacity-50"></div>
                        <img
                            src="/images/internship_office.webp"
                            alt="Students working in a modern accounting office during internship"
                            className="relative rounded-3xl shadow-2xl border border-white/10 w-full object-cover aspect-[4/3]"
                        />
                        <div className="absolute bottom-6 left-6 right-6 bg-secondary-dark/90 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-lg">
                            <p className="text-white text-sm font-medium text-center">
                                "Gain real work experience on live business cases under professional guidance."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================
          Internship Section (CMA/ACCA)
      ========================== */}
            <section
                className="container mx-auto px-4 md:px-20 mb-16 md:mb-24"
                data-aos="fade-up"
                data-aos-delay="50"
            >
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                    {/* Content Side */}
                    <div className="lg:w-1/2">
                        <p className="text-primary-accent uppercase tracking-[0.2em] text-sm mb-3">
                            Specialized Internship
                        </p>
                        <h2 className="font-montserrat text-3xl md:text-3xl font-bold mb-5 leading-tight">
                            Finance Internship in Kerala for CMA US, CMA India & ACCA Students
                        </h2>
                        <p className="text-lg text-boulder mb-6 leading-relaxed">
                            This specialized finance internship in Kerala is designed for students pursuing professional qualifications such as CMA US, CMA India, and ACCA. The program aligns practical exposure with global and professional syllabus requirements.
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="bg-secondary-dark/65 backdrop-blur-sm border border-primary-accent/20 rounded-xl p-5">
                                <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                                    <DynamicFaIcon name="fa-user-graduate" className="text-primary-accent" />
                                    Accounting Internship in Kozhikode Aligned with Professional Courses
                                </h3>
                                <p className="text-boulder text-sm mb-4">
                                    Our accounting internship in Kozhikode for CMA and ACCA students focuses on:
                                </p>
                                <div className="grid grid-cols-1 gap-y-2">
                                    {[
                                        'Advanced accounting concepts and application',
                                        'Financial reporting and analysis basics',
                                        'Audit procedures and compliance understanding',
                                        'Exposure to taxation and regulatory frameworks',
                                        'Practical insights into corporate and professional accounting',
                                    ].map((item) => (
                                        <div key={item} className="flex items-start gap-2 text-boulder text-sm">
                                            <i className="fas fa-check text-primary-accent mt-1 text-xs"></i>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-boulder text-sm mt-4 italic">
                                    This structure supports students in connecting theoretical study with practical application.
                                </p>
                            </div>

                            <div className="bg-secondary-dark/65 backdrop-blur-sm border border-primary-accent/20 rounded-xl p-5">
                                <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                                    <DynamicFaIcon name="fa-file-invoice-dollar" className="text-primary-accent" />
                                    Finance Internship in Kozhikode with Professional Skill Development
                                </h3>
                                <p className="text-boulder text-sm mb-4">
                                    The finance internship in Kozhikode for CMA and ACCA students strengthens:
                                </p>
                                <div className="grid grid-cols-1 gap-y-2">
                                    {[
                                        'Analytical and reporting skills',
                                        'Understanding of financial controls and compliance',
                                        'Exposure to real-world finance workflows',
                                        'Professional documentation and accuracy standards',
                                    ].map((item) => (
                                        <div key={item} className="flex items-start gap-2 text-boulder text-sm">
                                            <i className="fas fa-check text-primary-accent mt-1 text-xs"></i>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-boulder text-sm mt-4 italic">
                                    This internship adds practical value to professional qualifications and improves employability.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 text-sm text-white">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                                        <DynamicFaIcon name="fa-clock" />
                                    </div>
                                    <div>
                                        <p className="text-primary-accent text-xs uppercase tracking-wider font-bold">Timing</p>
                                        <p>Flexible Schedule</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                                        <DynamicFaIcon name="fa-file-alt" />
                                    </div>
                                    <div>
                                        <p className="text-primary-accent text-xs uppercase tracking-wider font-bold">Proof</p>
                                        <p>Work Experience Letter</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://wa.me/919446369434?text=Hi%20I%20am%20a%20CMA/ACCA%20student%20interested%20in%20work%20experience"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex justify-center items-center bg-white text-dark-bg font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg"
                            >
                                Join for Work Experience
                            </a>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="lg:w-1/2 relative">
                        <div className="absolute -inset-4 bg-gradient-to-bl from-primary-accent/20 to-transparent rounded-3xl blur-2xl opacity-50"></div>
                        <img
                            src="/images/finance_internship_cma_acca.webp"
                            alt="Finance professionals and interns discussing financial reports"
                            className="relative rounded-3xl shadow-2xl border border-white/10 w-full object-cover aspect-[4/3]"
                        />
                        <div className="absolute top-6 right-6 bg-secondary-dark/90 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-lg max-w-xs">
                            <div className="flex items-center gap-3 mb-2">
                                <DynamicFaIcon name="fa-user-graduate" className="text-primary-accent text-xl" />
                                <p className="text-white text-sm font-bold">Career & Exam Friendly</p>
                            </div>
                            <p className="text-boulder text-xs">
                                "Work on real client files without disturbing your exam preparation."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================
          Structured Learning Approach
      ========================== */}
            <section
                className="relative z-10 bg-secondary-dark/65 backdrop-blur-sm py-16 mb-16"
                data-aos="fade-up"
            >
                <div className="container mx-auto px-4 md:px-20">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-4">
                            Structured Learning Approach for Accounting and Finance Internships in Kerala
                        </h2>
                        <p className="text-boulder text-lg leading-relaxed">
                            All accounting and finance internships in Kerala at Acharya Professional Accountants follow a structured and guided learning approach. Students are trained step by step, ensuring clarity, consistency, and confidence in execution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: "fa-chalkboard-teacher",
                                title: "Industry-oriented",
                                description: "Methodology focused on current market needs."
                            },
                            {
                                icon: "fa-user-tie",
                                title: "Practical Exposure",
                                description: "Guided by experienced professionals."
                            },
                            {
                                icon: "fa-check-double",
                                title: "Accuracy & Discipline",
                                description: "Focus on compliance and professional standards."
                            },
                            {
                                icon: "fa-rocket",
                                title: "Career-oriented",
                                description: "Training approach designed for job readiness."
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-dark-bg/60 backdrop-blur-sm p-6 rounded-xl border border-primary-accent/10 hover:border-primary-accent/30 transition-all duration-300">
                                <div className="w-12 h-12 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent mb-4 text-xl">
                                    <DynamicFaIcon name={item.icon} />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-boulder text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* =========================
          Career Benefits Section
      ========================== */}
            <section
                className="container mx-auto px-4 md:px-20 mb-16 md:mb-24"
                data-aos="fade-up"
            >
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6 leading-tight">
                            Career Benefits of Completing a Finance Internship in Kozhikode, Kerala
                        </h2>
                        <p className="text-lg text-boulder mb-6 leading-relaxed">
                            Completing a finance internship in Kozhikode or accounting internship in Kerala helps students:
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Build confidence for interviews',
                                'Understand professional accounting and finance workflows',
                                'Improve practical and analytical skills',
                                'Prepare for careers in accounting, audit, taxation, and finance',
                                'Strengthen profiles for CA, CMA, ACCA, and MBA pathways'
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-4 p-4 bg-secondary-dark/65 backdrop-blur-sm rounded-xl border border-white/5 hover:border-primary-accent/20 transition-all">
                                    <div className="mt-1 text-primary-accent">
                                        <DynamicFaIcon name="fa-check-circle" />
                                    </div>
                                    <span className="text-white text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:w-1/2">
                        {/* Placeholder for career benefits visual if needed, or keeping it text focused */}
                        <div className="bg-gradient-to-br from-secondary-dark/45 to-dark-bg/25 backdrop-blur-md p-8 rounded-3xl border border-primary-accent/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-32 bg-primary-accent/5 rounded-full blur-3xl"></div>
                            <div className="relative z-10 text-center">
                                <h3 className="text-2xl font-bold text-white mb-2">Be Job Ready</h3>
                                <p className="text-primary-accent font-medium mb-6">Invest in your future today</p>
                                <div className="inline-block p-4 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
                                    <DynamicFaIcon name="fa-briefcase" className="text-4xl text-primary-accent" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================
          Program Outcome Section
      ========================== */}
            <section
                className="relative z-10 bg-primary-accent/10 backdrop-blur-sm py-16"
                data-aos="fade-up"
            >
                <div className="container mx-auto px-4 md:px-20 text-center">
                    <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-6">
                        Accounting & Finance Internship in Kozhikode, Kerala – Program Outcome
                    </h2>
                    <p className="text-white/90 text-lg leading-relaxed max-w-4xl mx-auto">
                        Whether you are a degree student or a professional course aspirant, our accounting internship in Kozhikode, Kerala provides practical exposure, structured guidance, and career-focused learning. With real-world relevance and professional standards, these internships support long-term growth in accounting and finance careers.
                    </p>
                </div>
            </section>

        </main>
    );
};

export default InternshipPage;
