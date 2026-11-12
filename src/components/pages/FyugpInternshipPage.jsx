import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import SEO from '../common/SEO';
import DynamicFaIcon from '../common/FontAwesomeRegistry';
import { captureLead } from '../../services/leadService';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const FyugpInternshipPage = () => {
  const [openFaq, setOpenFaq] = useState(0); // first question open by default
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    university: '',
    degree: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  const universities = [
    'Calicut University',
    'Kannur University',
    'Mangalore University',
    'Panjab University',
    'Kerala University',
    'Delhi University (DU)',
    'Central Universities'
  ];

  const locationsServed = [
    'Kozhikode (Mankave HQ)',
    'Malappuram',
    'Kannur',
    'Kasaragod',
    'Wayanad',
    'Palakkad',
    'Thrissur',
    'Across Kerala'
  ];

  const workPillars = [
    {
      num: '1',
      title: 'Audit Work',
      desc: "Vouching, verifying books of accounts, checking bank and ledger balances and preparing audit working papers under the team's guidance.",
      icon: 'fa-clipboard-check'
    },
    {
      num: '2',
      title: 'Taxation Work',
      desc: 'Preparing and filing GST returns and income tax returns, and working on TDS, with the team reviewing your work.',
      icon: 'fa-file-invoice-dollar'
    },
    {
      num: '3',
      title: 'Accounting & Reconciliation',
      desc: 'Entering and checking accounting data, matching GST data with books, and preparing the schedules that feed into audits and returns.',
      icon: 'fa-book'
    },
    {
      num: '4',
      title: 'Documentation',
      desc: 'Collecting, organising and filing client documents the way a professional firm does it.',
      icon: 'fa-folder-open'
    },
    {
      num: '5',
      title: 'Working with the Team',
      desc: 'Sit with our staff, see how queries are handled and how deadlines are managed, and learn how an auditing and taxation office actually runs day to day.',
      icon: 'fa-users'
    },
    {
      num: '6',
      title: 'Tools Used in Practice',
      desc: 'Work on the accounting and tax software and Excel sheets our team uses on live assignments.',
      icon: 'fa-file-excel'
    }
  ];

  const certificates = [
    {
      title: 'Internship Completion Certificate',
      desc: 'Issued by Acharya Professional Accountants on successful completion of your FYUGP internship in auditing and taxation.',
      icon: 'fa-certificate',
      highlight: 'University Approved'
    },
    {
      title: 'Experience Certificate from an Auditing Firm',
      desc: 'An experience certificate from Acharya, an auditing and taxation firm, showing you worked on real audit and tax assignments. It counts when you apply for jobs or further studies.',
      icon: 'fa-award',
      highlight: 'Real Work Proof'
    },
    {
      title: 'Real Work, Real Exposure',
      desc: 'Hands-on audit and tax work under our team, in a full-time office setting, which is what employers look for.',
      icon: 'fa-briefcase',
      highlight: 'Job Ready'
    }
  ];

  const galleryItems = [
    {
      title: 'FYUGP Interns at Work',
      desc: 'Live client accounting, audit verification and working papers',
      img: '/images/fyugp/fyugp-interns-at-work.webp'
    },
    {
      title: 'Audit Team Session',
      desc: 'Interactive review sessions and practical training on audit workflows',
      img: '/images/fyugp/fyugp-audit-training-session.webp'
    },
    {
      title: 'Taxation Training',
      desc: 'Hands-on preparation of GST returns, Income Tax and TDS filings',
      img: '/images/fyugp/fyugp-live-tax-portal-work.webp'
    },
    {
      title: 'Batch Group Photo',
      desc: 'FYUGP interns receiving completion certificates at Acharya reception',
      img: '/images/fyugp/fyugp-certificate-presentation.webp'
    },
    {
      title: 'Intern with Mentor',
      desc: 'Guided supervision by practicing professionals and query clearance',
      img: '/images/fyugp/fyugp-intern-with-mentor.webp'
    },
    {
      title: 'Office Day',
      desc: 'Full-day 9:30 AM to 5:30 PM working environment in Kozhikode',
      img: '/images/fyugp/fyugp-mankave-office-day.webp'
    }
  ];

  const faqs = [
    {
      q: 'Where is the FYUGP internship held?',
      a: 'At our office in Mankave, Kozhikode, Kerala. Interns work from the office, not remotely.'
    },
    {
      q: 'What are the internship timings?',
      a: '9:30 AM to 5:30 PM. Every intern must be in the office for the full day.'
    },
    {
      q: 'Will I work on real client work?',
      a: 'Yes. Interns work on real auditing and taxation work under our team.'
    },
    {
      q: 'Which universities have FYUGP interns at Acharya come from?',
      a: 'The 1800+ students who completed their FYUGP internship with us came from Calicut University, Kannur University, Mangalore University, Panjab University, Kerala University, Delhi University (DU) and Central Universities.'
    },
    {
      q: 'Can students from Malappuram, Kannur and Kasaragod do the FYUGP internship in Kozhikode?',
      a: 'Yes. Our FYUGP internship in Kozhikode is open to students from Kozhikode, Malappuram, Kannur, Kasaragod and other parts of Kerala. The internship is in-office, 9:30 AM to 5:30 PM.'
    },
    {
      q: 'Which certificates do I get after the FYUGP internship?',
      a: 'Every intern receives an internship completion certificate and an experience certificate from Acharya Professional Accountants, an auditing and taxation firm.'
    },
    {
      q: 'How many students have done their FYUGP internship at Acharya?',
      a: 'More than 1800 students have completed their FYUGP internship with us in auditing and taxation.'
    }
  ];

  const structuredSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'FYUGP Internship in Auditing and Taxation',
      description:
        'Hands-on FYUGP internship in auditing and taxation at an auditing and taxation firm in Kozhikode. Over 1800 students from Calicut, Kannur, Mangalore, Panjab, Kerala, Delhi and Central Universities have completed it.',
      areaServed: ['Kozhikode', 'Malappuram', 'Kannur', 'Kasaragod', 'Kerala'],
      provider: {
        '@type': 'Organization',
        name: 'Acharya Professional Accountants Pvt. Ltd.',
        sameAs: 'https://acharyaprofessionalaccountants.in'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a
        }
      }))
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const university = formData.university.trim();
    const degree = formData.degree.trim();

    try {
      await Promise.race([
        captureLead({
          name,
          phone,
          qualification: `${degree} - ${university}`,
          source: 'FYUGP Internship Page Lead',
          location: 'Kozhikode'
        }),
        new Promise((resolve) => setTimeout(resolve, 2000))
      ]);
    } catch (err) {
      console.error('Lead error:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      const text = `Hi Acharya! I would like to apply for the *FYUGP Internship in Auditing and Taxation*.%0A%0A*Name:* ${encodeURIComponent(
        name || 'N/A'
      )}%0A*Phone:* ${encodeURIComponent(
        phone || 'N/A'
      )}%0A*University:* ${encodeURIComponent(
        university || 'N/A'
      )}%0A*Degree/Course:* ${encodeURIComponent(degree || 'N/A')}`;
      const url = `https://wa.me/919446369434?text=${text}`;
      window.open(url, '_blank');
      setFormData({ name: '', phone: '', university: '', degree: '' });
    }
  };

  return (
    <main className="relative z-10 font-inter text-white bg-transparent pt-24 md:pt-28 pb-16">
      <SEO
        title="FYUGP Internship in Kozhikode – Auditing & Taxation | Acharya Professional Accountants"
        description="FYUGP internship in auditing and taxation at Acharya Professional Accountants, Kozhikode. 1800+ students from Calicut, Kannur, Mangalore, Panjab, Kerala, Delhi and Central Universities have completed their FYUGP internship with us. Real audit and tax work, 9:30 AM to 5:30 PM. Get an internship completion certificate and an experience certificate."
        keywords="FYUGP internship, FYUGP internship in Kozhikode, FYUGP internship in Kerala, FYUGP internship in Malappuram, FYUGP internship in Malapuram, FYUGP internship in Kannur, FYUGP internship in Kasaragod, FYUGP internship in Karsarkode, FYUGP internship Kozhikode, FYUGP internship Kerala, FYUGP internship auditing, FYUGP internship taxation, FYUGP internship for commerce students, FYUGP internship Calicut University, FYUGP internship Kannur University, FYUGP internship Mangalore University, FYUGP internship certificate, FYUGP internship completion certificate"
        canonical="https://www.acharyaprofessionalaccountants.in/fyugp-internship"
        schema={structuredSchema}
      />

      {/* =========================================
          HERO SECTION
      ========================================== */}
      <section className="container mx-auto px-4 md:px-12 lg:px-20 mb-12 md:mb-16" data-aos="fade-up">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          <div className="lg:w-7/12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary-accent/10 border border-primary-accent/30 text-primary-accent mb-4">
              <DynamicFaIcon name="fa-graduation-cap" className="text-primary-accent text-sm" />
              <span>Acharya Professional Accountants · Kozhikode</span>
            </div>

            <h1 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-5">
              FYUGP Internship in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent via-[#ffd479] to-primary-accent">
                Auditing &amp; Taxation
              </span>
            </h1>

            <p className="text-lg md:text-xl text-boulder leading-relaxed mb-8 max-w-2xl">
              Spend your FYUGP internship inside a working auditing and taxation firm. You will do real audit and tax work
              with our team, not classroom exercises.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#apply"
                className="inline-flex items-center justify-center gap-2 bg-primary-accent text-dark-bg font-bold px-7 py-3.5 rounded-full hover:bg-korma hover:text-white transition-all duration-300 shadow-lg shadow-primary-accent/25 hover:-translate-y-0.5"
              >
                <span>Apply for the Internship</span>
                <DynamicFaIcon name="fa-arrow-right" className="text-sm" />
              </a>

              <a
                href="https://wa.me/919446369434?text=Hi%20Acharya!%20I%20am%20interested%20in%20applying%20for%20the%20FYUGP%20Internship%20in%20Auditing%20and%20Taxation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-secondary-dark border border-primary-accent/30 text-white font-medium px-6 py-3.5 rounded-full hover:bg-primary-accent/15 hover:border-primary-accent transition-all duration-300"
              >
                <DynamicFaIcon name="fa-whatsapp" className="text-green-400 text-lg" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-boulder border-t border-white/10 pt-5">
              <div className="flex items-center gap-2">
                <DynamicFaIcon name="fa-map-marker-alt" className="text-primary-accent" />
                <span>Mankave, Kozhikode</span>
              </div>
              <div className="flex items-center gap-2">
                <DynamicFaIcon name="fa-clock" className="text-primary-accent" />
                <span>9:30 AM – 5:30 PM (In-Office)</span>
              </div>
              <div className="flex items-center gap-2">
                <DynamicFaIcon name="fa-certificate" className="text-primary-accent" />
                <span>Dual Certificates</span>
              </div>
            </div>
          </div>

          <div className="lg:w-5/12 w-full">
            <div className="relative rounded-3xl overflow-hidden border border-primary-accent/30 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent z-10 opacity-70"></div>
              <img
                src="/images/internship_office.webp"
                alt="FYUGP interns at Acharya Professional Accountants, Kozhikode"
                className="w-full h-80 lg:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 z-20 bg-secondary-dark/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-primary-accent/30 text-xs font-semibold text-primary-accent">
                FYUGP 2025–26 Batch
              </div>
              <div className="absolute bottom-5 left-5 right-5 z-20 bg-secondary-dark/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-accent/20 flex items-center justify-center text-primary-accent flex-shrink-0">
                    <DynamicFaIcon name="fa-user-graduate" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">1800+ Students Completed</p>
                    <p className="text-boulder text-xs">Calicut, Kannur, Mangalore &amp; Central Universities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          KEY STATS SECTION
      ========================================== */}
      <section className="container mx-auto px-4 md:px-12 lg:px-20 mb-14" data-aos="fade-up" data-aos-delay="50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-secondary-dark/70 backdrop-blur-sm border border-primary-accent/20 rounded-2xl p-6 text-center hover:border-primary-accent/50 transition-all shadow-xl">
            <span className="font-montserrat text-4xl lg:text-5xl font-extrabold text-primary-accent block leading-none mb-2">
              1800+
            </span>
            <span className="text-white text-base font-semibold block mb-1">Students Completed</span>
            <span className="text-boulder text-sm">their FYUGP internship in auditing and taxation with us</span>
          </div>

          <div className="bg-secondary-dark/70 backdrop-blur-sm border border-primary-accent/20 rounded-2xl p-6 text-center hover:border-primary-accent/50 transition-all shadow-xl">
            <span className="font-montserrat text-4xl lg:text-5xl font-extrabold text-primary-accent block leading-none mb-2">
              2 Areas
            </span>
            <span className="text-white text-base font-semibold block mb-1">Auditing and Taxation</span>
            <span className="text-boulder text-sm">Real client files, live GST &amp; Income Tax, vouching &amp; ledgers</span>
          </div>

          <div className="bg-secondary-dark/70 backdrop-blur-sm border border-primary-accent/20 rounded-2xl p-6 text-center hover:border-primary-accent/50 transition-all shadow-xl">
            <span className="font-montserrat text-4xl lg:text-5xl font-extrabold text-primary-accent block leading-none mb-2">
              9:30 – 5:30
            </span>
            <span className="text-white text-base font-semibold block mb-1">Full-Day Office Hours</span>
            <span className="text-boulder text-sm">Rigorous, full-day, in-office internship setting</span>
          </div>
        </div>
      </section>

      {/* =========================================
          UNIVERSITIES SECTION
      ========================================== */}
      <section className="container mx-auto px-4 md:px-12 lg:px-20 mb-16" data-aos="fade-up">
        <div className="bg-secondary-dark/50 backdrop-blur-md border border-primary-accent/20 rounded-3xl p-8 md:p-10">
          <div className="max-w-3xl mb-8">
            <p className="text-primary-accent uppercase tracking-[0.2em] text-xs font-semibold mb-2">
              Pan-India Academic Trust
            </p>
            <h2 className="font-montserrat text-2xl md:text-4xl font-bold text-white mb-4">
              1800+ Students From Universities Across India
            </h2>
            <p className="text-boulder text-base md:text-lg leading-relaxed">
              The 1800+ students who completed their FYUGP internship with us came from Calicut University, Kannur
              University, Mangalore University, Panjab University, Kerala University, Delhi University (DU) and Central
              Universities.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {universities.map((uni, idx) => (
              <div
                key={idx}
                className="bg-dark-bg/80 border border-primary-accent/25 hover:border-primary-accent text-white px-5 py-3 rounded-xl flex items-center gap-3 text-sm md:text-base font-medium transition-all hover:bg-primary-accent/10 hover:-translate-y-0.5"
              >
                <span className="w-8 h-8 rounded-full bg-primary-accent/20 flex items-center justify-center text-primary-accent flex-shrink-0 text-xs">
                  <DynamicFaIcon name="fa-graduation-cap" />
                </span>
                <span>{uni}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          GEOGRAPHIC REACH SECTION
      ========================================== */}
      <section className="container mx-auto px-4 md:px-12 lg:px-20 mb-16" data-aos="fade-up">
        <div className="bg-gradient-to-br from-secondary-dark/80 via-secondary-dark/60 to-dark-bg/80 border border-white/10 rounded-3xl p-8 md:p-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-8/12">
              <span className="text-primary-accent uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
                Open to All Districts
              </span>
              <h2 className="font-montserrat text-2xl md:text-4xl font-bold text-white mb-4">
                FYUGP Internship in Kozhikode and Across Kerala
              </h2>
              <p className="text-boulder text-base md:text-lg leading-relaxed mb-6">
                Our FYUGP internship is held at our office in Kozhikode and is open to students from Kozhikode,
                Malappuram, Kannur, Kasaragod and other parts of Kerala. If you are looking for an FYUGP internship in
                Kozhikode, Kerala, in auditing and taxation, Acharya is where over 1800 students have already done theirs.
              </p>

              <div className="flex flex-wrap gap-2">
                {locationsServed.map((loc, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-boulder hover:text-white hover:border-primary-accent/40 transition-colors"
                  >
                    <DynamicFaIcon name="fa-map-marker-alt" className="text-primary-accent text-[10px]" />
                    {loc}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:w-4/12 text-center lg:text-right w-full">
              <div className="inline-block bg-primary-accent/10 border border-primary-accent/30 rounded-2xl p-6 text-center max-w-xs w-full">
                <DynamicFaIcon name="fa-building" className="text-3xl text-primary-accent mb-2 mx-auto" />
                <h3 className="text-white font-bold text-lg mb-1">Mankave Office HQ</h3>
                <p className="text-boulder text-xs leading-relaxed mb-4">
                  Near Calicut City Center, easily accessible by bus and train for Malappuram, Kannur &amp; Wayanad students.
                </p>
                <a
                  href="#apply"
                  className="inline-block text-xs uppercase tracking-wider font-bold text-primary-accent hover:underline"
                >
                  Reserve Your Seat &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          WHAT YOU WILL DO (6 PILLARS)
      ========================================== */}
      <section className="container mx-auto px-4 md:px-12 lg:px-20 mb-16" data-aos="fade-up">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary-accent uppercase tracking-[0.2em] text-xs font-semibold mb-2">
            Curriculum &amp; Hands-On Practice
          </p>
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-white mb-4">
            What You Will Do in the Internship
          </h2>
          <p className="text-boulder text-lg leading-relaxed">
            You will be placed under our audit and tax team and given actual work from our clients. Here is what that
            looks like.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workPillars.map((pillar) => (
            <div
              key={pillar.num}
              className="bg-secondary-dark/65 backdrop-blur-sm border border-primary-accent/20 hover:border-primary-accent/60 rounded-2xl p-6 md:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-full bg-primary-accent text-dark-bg font-extrabold flex items-center justify-center text-sm shadow-md">
                    {pillar.num}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent group-hover:bg-primary-accent group-hover:text-dark-bg transition-colors">
                    <DynamicFaIcon name={pillar.icon} />
                  </div>
                </div>

                <h3 className="font-montserrat text-xl font-bold text-white mb-3 group-hover:text-primary-accent transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-boulder text-sm leading-relaxed">{pillar.desc}</p>
              </div>

              <div className="w-full h-1 bg-gradient-to-r from-primary-accent/40 via-primary-accent/10 to-transparent rounded mt-6"></div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
          INTERNSHIP TIMING HIGHLIGHT BOX
      ========================================== */}
      <section className="container mx-auto px-4 md:px-12 lg:px-20 mb-16" data-aos="fade-up">
        <div className="relative overflow-hidden bg-gradient-to-r from-secondary-dark via-[#1a1c29] to-secondary-dark border-l-4 border-l-primary-accent border-y border-r border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary-accent/20 flex items-center justify-center text-primary-accent text-2xl flex-shrink-0">
                <DynamicFaIcon name="fa-clock" />
              </div>
              <div>
                <span className="text-primary-accent text-xs font-bold uppercase tracking-widest block mb-1">
                  Mandatory In-Office Schedule
                </span>
                <h3 className="font-montserrat text-2xl md:text-3xl font-extrabold text-white mb-2">
                  Internship Timing: 9:30 AM to 5:30 PM
                </h3>
                <p className="text-[#dfe6fa] text-base leading-relaxed max-w-2xl">
                  This is a real office internship. Every intern must be present at our Mankave, Kozhikode office from
                  9:30 AM to 5:30 PM, the same hours as our team.
                </p>
              </div>
            </div>

            <div className="flex-shrink-0">
              <a
                href="#apply"
                className="inline-block bg-primary-accent text-dark-bg font-bold px-6 py-3 rounded-full hover:bg-korma hover:text-white transition-all text-sm shadow-md"
              >
                Apply for Next Batch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          WHAT WE OFFER TO STUDENTS (CERTIFICATES)
      ========================================== */}
      <section className="container mx-auto px-4 md:px-12 lg:px-20 mb-16" data-aos="fade-up">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary-accent uppercase tracking-[0.2em] text-xs font-semibold mb-2">
            Dual Certification &amp; Career Growth
          </p>
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-white mb-4">
            What We Offer to Students
          </h2>
          <p className="text-boulder text-lg leading-relaxed">
            When you finish your FYUGP internship at Acharya, you leave with two certificates and real work experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-secondary-dark/65 backdrop-blur-sm border-t-4 border-t-primary-accent border-x border-b border-primary-accent/20 rounded-2xl p-7 flex flex-col justify-between hover:border-primary-accent/60 transition-all duration-300 hover:-translate-y-1 shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary-accent/15 flex items-center justify-center text-primary-accent text-xl group-hover:scale-110 transition-transform">
                    <DynamicFaIcon name={cert.icon} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 border border-primary-accent/30 text-primary-accent">
                    {cert.highlight}
                  </span>
                </div>

                <h3 className="font-montserrat text-xl font-bold text-white mb-3 group-hover:text-primary-accent transition-colors">
                  {cert.title}
                </h3>

                <p className="text-boulder text-sm leading-relaxed">{cert.desc}</p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-primary-accent mt-6 pt-4 border-t border-white/5">
                <DynamicFaIcon name="fa-check-circle" />
                <span>Officially recognized credentials</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
          GALLERY SECTION (AUTO SLIDER)
      ========================================== */}
      <section className="container mx-auto px-4 md:px-12 lg:px-20 mb-16" data-aos="fade-up">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-primary-accent uppercase tracking-[0.2em] text-xs font-semibold mb-2">
            Life At Acharya
          </p>
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-white mb-3">
            Gallery
          </h2>
          <p className="text-boulder text-lg">Interns from previous FYUGP batches at our office.</p>
        </div>

        <div className="relative fyugp-gallery-slider px-2">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            speed={800}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="pb-14"
          >
            {galleryItems.map((item, i) => (
              <SwiperSlide key={i} className="h-auto">
                <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-primary-accent/60 transition-all duration-300 aspect-[4/3] bg-secondary-dark shadow-xl flex flex-col justify-end">
                  <img
                    src={item.img}
                    alt={`Photo: ${item.title} - FYUGP interns at Acharya Professional Accountants, Kozhikode`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/95 via-dark-bg/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity"></div>
                  <div className="relative z-10 p-5">
                    <p className="text-[11px] text-primary-accent font-semibold uppercase tracking-wider mb-1">
                      Photo {i + 1}
                    </p>
                    <h4 className="text-white font-montserrat font-bold text-base md:text-lg leading-tight mb-1">
                      {item.title}
                    </h4>
                    <p className="text-boulder text-xs line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* =========================================
          QUESTIONS STUDENTS ASK (FAQ ACCORDION)
      ========================================== */}
      <section className="container mx-auto px-4 md:px-12 lg:px-20 mb-16" data-aos="fade-up">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary-accent uppercase tracking-[0.2em] text-xs font-semibold mb-2">
            Clear Answers
          </p>
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-white mb-4">
            Questions Students Ask
          </h2>
          <p className="text-boulder text-lg">
            Everything you need to know about joining our FYUGP internship in auditing and taxation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${isOpen
                  ? 'bg-secondary-dark/80 border-primary-accent/40 shadow-lg'
                  : 'bg-secondary-dark/40 border-white/5 hover:border-primary-accent/20'
                  }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-montserrat font-semibold text-white text-base md:text-lg focus:outline-none"
                >
                  <span className="pr-4">{faq.q}</span>
                  <DynamicFaIcon
                    name={isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}
                    className={`text-sm transition-transform duration-200 flex-shrink-0 ${isOpen ? 'text-primary-accent' : 'text-boulder'
                      }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-boulder text-sm md:text-base leading-relaxed border-t border-white/5 animate-fadeInUp">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================
          APPLICATION & CTA SECTION (#apply)
      ========================================== */}
      <section id="apply" className="container mx-auto px-4 md:px-12 lg:px-20 mb-16" data-aos="fade-up">
        <div className="bg-gradient-to-br from-secondary-dark via-[#1a1c29] to-secondary-dark border border-primary-accent/30 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary-accent/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content Column */}
            <div className="lg:col-span-6">
              <span className="text-primary-accent uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
                Join Acharya's Next Batch
              </span>
              <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                Do Your FYUGP Internship at Acharya
              </h2>
              <p className="text-boulder text-base md:text-lg leading-relaxed mb-6">
                Join the 1800+ students who learned auditing and taxation by doing it. Work on live assignments alongside
                practicing professionals.
              </p>

              <div className="space-y-3 mb-8 text-sm">
                <div className="flex items-center gap-3 text-white">
                  <DynamicFaIcon name="fa-check-circle" className="text-primary-accent" />
                  <span>Full-Day 9:30 AM to 5:30 PM In-Office Practice</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <DynamicFaIcon name="fa-check-circle" className="text-primary-accent" />
                  <span>Internship Completion &amp; Experience Certificate</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <DynamicFaIcon name="fa-check-circle" className="text-primary-accent" />
                  <span>Real Audit &amp; Tax Work under Senior Professionals</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-transparent border border-white/20 hover:border-primary-accent text-white px-6 py-3 rounded-full font-semibold transition-all hover:bg-white/5 text-sm"
                >
                  <DynamicFaIcon name="fa-envelope" className="text-primary-accent" />
                  <span>Contact Page</span>
                </Link>

                <a
                  href="tel:+919446369434"
                  className="inline-flex items-center gap-2 text-boulder hover:text-white transition-colors text-sm font-medium"
                >
                  <DynamicFaIcon name="fa-phone-alt" className="text-primary-accent" />
                  <span>+91 94463 69434</span>
                </a>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-6">
              <div className="bg-dark-bg/90 border border-primary-accent/30 rounded-2xl p-6 md:p-8 shadow-2xl">
                <h3 className="font-montserrat text-xl font-bold text-white mb-2">
                  Fast-Track Internship Application
                </h3>
                <p className="text-boulder text-xs mb-5">
                  Fill in your details below. We will review your application and contact you immediately.
                </p>

                {submitSuccess ? (
                  <div className="bg-primary-accent/15 border border-primary-accent/40 rounded-xl p-6 text-center">
                    <DynamicFaIcon name="fa-check-circle" className="text-primary-accent text-4xl mx-auto mb-3" />
                    <h4 className="text-white font-bold text-lg mb-1">Application Submitted!</h4>
                    <p className="text-boulder text-xs mb-4">
                      Thank you for applying. A representative has received your request. WhatsApp chat is opening with your
                      details.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitSuccess(false)}
                      className="text-xs text-primary-accent hover:underline font-semibold"
                    >
                      Submit another application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-boulder mb-1.5 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-secondary-dark border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary-accent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-boulder mb-1.5 uppercase tracking-wider">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full bg-secondary-dark border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary-accent transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-boulder mb-1.5 uppercase tracking-wider">
                          University / College *
                        </label>
                        <input
                          type="text"
                          name="university"
                          required
                          value={formData.university}
                          onChange={handleInputChange}
                          placeholder="e.g. Calicut University"
                          className="w-full bg-secondary-dark border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary-accent transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-boulder mb-1.5 uppercase tracking-wider">
                          Degree / Course *
                        </label>
                        <input
                          type="text"
                          name="degree"
                          required
                          value={formData.degree}
                          onChange={handleInputChange}
                          placeholder="e.g. B.Com / BBA"
                          className="w-full bg-secondary-dark border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary-accent transition-colors"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary-accent text-dark-bg font-bold py-3.5 px-6 rounded-xl hover:bg-korma hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary-accent/25 text-sm uppercase tracking-wider mt-2"
                    >
                      {isSubmitting ? (
                        <span>Submitting Application...</span>
                      ) : (
                        <>
                          <span>Submit &amp; Open WhatsApp Chat</span>
                          <DynamicFaIcon name="fa-paper-plane" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          CROSS LINK BANNER TO GENERAL INTERNSHIP
      ========================================== */}
      <section className="container mx-auto px-4 md:px-12 lg:px-20 text-center">
        <div className="p-6 rounded-2xl bg-secondary-dark/40 border border-white/5 inline-flex flex-col sm:flex-row items-center gap-3">
          <span className="text-boulder text-sm">
            Looking for general Accounting &amp; Finance Internship for Degree, PG, CMA or ACCA learners?
          </span>
          <Link
            to="/Internship"
            className="text-primary-accent font-semibold hover:underline text-sm inline-flex items-center gap-1"
          >
            <span>View All Internship Programs</span>
            <DynamicFaIcon name="fa-arrow-right" className="text-xs" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default FyugpInternshipPage;

