import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import SEO from '../common/SEO';

const FinanceCareerThudangamPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [modalForm, setModalForm] = useState({ name: '', phone: '', qual: '' });
  const [quickForm, setQuickForm] = useState({ name: '', phone: '' });

  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);

    // Auto popup registration modal 4 seconds after page load
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const openModal = () => {
    setIsClosing(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const openWhatsApp = (name, phone, qual = 'Inquiry') => {
    const text = `Hi Acharya! I am interested in the *4-Month Finance Career Thudangam* program.%0A%0A*Name:* ${encodeURIComponent(name || 'N/A')}%0A*Phone:* ${encodeURIComponent(phone || 'N/A')}%0A*Status:* ${encodeURIComponent(qual)}`;
    window.open(`https://wa.me/919562069434?text=${text}`, '_blank');
  };

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    openWhatsApp(quickForm.name, quickForm.phone, 'Quick Enroll');
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    openWhatsApp(modalForm.name, modalForm.phone, modalForm.qual);
    closeModal();
  };

  return (
    <main className="font-inter bg-[#040404] text-white min-h-screen relative overflow-hidden">
      <SEO
        title="4-Month Finance Career Thudangam | Acharya Professional Accountants"
        description="For freshers & career-gap students — practical training from professionals working inside a real Auditing & Taxation firm in Kozhikode."
        canonical="https://www.acharyaprofessionalaccountants.in/finance-career-thudangam"
      />

      {/* AMBIENT LIGHT BACKGROUND ANIMATION */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
        {/* Glow Orb 1 - Upper Left */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(229,161,69,0.22)_0%,rgba(229,161,69,0)_70%)] filter blur-[100px] animate-glow-1" />

        {/* Glow Orb 2 - Middle Right */}
        <div className="absolute top-[35%] -right-36 w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,rgba(142,64,14,0.28)_0%,rgba(142,64,14,0)_70%)] filter blur-[110px] animate-glow-2" />

        {/* Glow Orb 3 - Lower Left */}
        <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(229,161,69,0.18)_0%,rgba(229,161,69,0)_70%)] filter blur-[105px] animate-glow-3" />

        {/* Light Ray Motion Overlay */}
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(125deg,transparent_35%,rgba(229,161,69,0.05)_50%,transparent_65%)] bg-[length:250%_250%] animate-pulse-slow" />
      </div>

      {/* STANDALONE PAGE NAVBAR (Matches Website Theme) */}
      <nav className="bg-[#1c1c1b] border-b-2 border-[#e5a145] sticky top-0 z-50 shadow-lg">
        <div className="max-w-[1160px] mx-auto px-6 h-[74px] flex items-center justify-between">
          <a href="/" className="font-montserrat font-bold text-lg text-white flex items-center gap-3">
            <img src="/images/logo_dark.webp" alt="Acharya Logo" className="h-10 w-auto" />
            <span>ACHARYA <span className="text-[#e5a145]">PROFESSIONAL ACCOUNTANTS</span></span>
          </a>

          <div className="hidden md:flex gap-7 font-montserrat text-sm text-gray-200 font-medium">
            <a href="#modules" className="hover:text-[#e5a145] transition-colors">Curriculum</a>
            <a href="#why" className="hover:text-[#e5a145] transition-colors">Why This Program</a>
            <a href="#contact" className="hover:text-[#e5a145] transition-colors">Contact</a>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#e5a145] hover:bg-[#ffdca8] text-[#040404] font-montserrat font-bold text-sm px-5 py-2.5 rounded-full transition-all shadow-md"
          >
            Enroll Now
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[#040404] via-[#0b0b0b] to-[#1c1c1b] text-white py-16 relative z-10">
        <div className="max-w-[1160px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7">
            <span className="inline-block bg-[rgba(229,161,69,0.12)] border border-[rgba(229,161,69,0.4)] text-[#ffdca8] font-montserrat text-xs tracking-[1.5px] font-bold px-4 py-1.5 rounded-full mb-5 uppercase">
              AN OPPORTUNITY TO TRAIN INSIDE AN AUDITING FIRM
            </span>

            <h1 className="font-montserrat text-3xl sm:text-5xl font-extrabold leading-tight mb-4 text-white">
              4 Months of Training  <span className="text-[#e5a145]">into a Finance Career</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-xl mb-7 leading-relaxed">
              For freshers &amp; career-gap students — practical training from professionals working inside a real Auditing &amp; Taxation firm in Kozhikode.
            </p>

            <div className="flex flex-wrap gap-3.5 mb-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-[#e5a145] to-[#8e400e] hover:from-[#ffdca8] hover:to-[#e5a145] text-white font-montserrat font-bold text-base px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/20 hover:-translate-y-0.5"
              >
                Enroll Now — Limited Seats
              </button>
              <a
                href="#modules"
                className="border border-[#e5a145]/35 text-white hover:border-[#e5a145] hover:text-[#e5a145] font-montserrat font-semibold text-base px-6 py-3.5 rounded-xl transition-all"
              >
                See the Curriculum
              </a>
            </div>

            <div className="flex flex-wrap gap-7 text-xs text-[#7c7c7b]">
              <div>
                <b className="block text-[#e5a145] font-montserrat text-base font-bold mb-0.5">4 Months</b>
                Practical Training
              </div>
              <div>
                <b className="block text-[#e5a145] font-montserrat text-base font-bold mb-0.5">8 Modules</b>
                Job-Ready Skills
              </div>
              <div>
                <b className="block text-[#e5a145] font-montserrat text-base font-bold mb-0.5">Kozhikode</b>
                Palace Road, Mankave
              </div>
            </div>
          </div>

          {/* Hero Right Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#1c1c1b]/90 backdrop-blur-md border border-[rgba(229,161,69,0.25)] rounded-2xl p-7 shadow-2xl space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#040404] border border-[#e5a145]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 19V9M11 19V4M18 19v-7" stroke="#e5a145" strokeWidth="2.2" strokeLinecap="round" /></svg>
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-white text-sm sm:text-base">Live, hands-on training</h4>
                  <p className="text-xs sm:text-sm text-[#7c7c7b]">Not a classroom lecture — real workflows from day one.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#040404] border border-[#e5a145]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="#e5a145" strokeWidth="1.8" /><path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" stroke="#e5a145" strokeWidth="1.8" /></svg>
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-white text-sm sm:text-base">Trained by working professionals</h4>
                  <p className="text-xs sm:text-sm text-[#7c7c7b]">Learn directly from Acharya's audit &amp; taxation team.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#040404] border border-[#e5a145]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" stroke="#e5a145" strokeWidth="1.8" /><path d="M9 12l2 2 4-4" stroke="#e5a145" strokeWidth="1.8" /></svg>
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-white text-sm sm:text-base">Built for freshers &amp; career-gap students</h4>
                  <p className="text-xs sm:text-sm text-[#7c7c7b]">No prior experience assumed — just commitment.</p>
                </div>
              </div>

              {/* Quick Form Box */}
              <div className="pt-2">
                <form onSubmit={handleQuickSubmit} className="space-y-3 bg-[#040404]/80 border border-[#e5a145]/30 p-4 rounded-xl">
                  <p className="font-montserrat text-xs font-bold text-[#e5a145]">⚡ Fast Track Admission Call</p>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    value={quickForm.name}
                    onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                    className="w-full bg-[#1c1c1b] border border-[#e5a145]/25 rounded-lg px-3.5 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#e5a145]"
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp Number *"
                    required
                    value={quickForm.phone}
                    onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })}
                    className="w-full bg-[#1c1c1b] border border-[#e5a145]/25 rounded-lg px-3.5 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#e5a145]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#e5a145] to-[#8e400e] text-white font-montserrat font-bold text-xs py-2.5 rounded-lg transition-all"
                  >
                    Submit &amp; Get Counseling
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING STRIP */}
      <div className="bg-[#1c1c1b] border-y border-[#e5a145]/20 py-5 relative z-10">
        <div className="max-w-[1160px] mx-auto px-6">
          <h2 className="font-montserrat text-xl font-bold text-white">4-Month Practical Finance Career Program</h2>
          <p className="text-sm text-[#7c7c7b]">Training from professionals working in an <b className="text-[#e5a145]">Auditing &amp; Taxation Firm</b></p>
        </div>
      </div>

      {/* HIGHLIGHT BAND */}
      <div className="bg-gradient-to-r from-[#e5a145] to-[#ffdca8] py-3.5 text-center relative z-10">
        <div className="max-w-[1160px] mx-auto px-6 flex justify-center items-center gap-4 text-xs sm:text-sm font-montserrat font-bold text-[#040404] tracking-wider">
          <span>4 MONTHS</span>
          <span className="opacity-50">•</span>
          <span>PRACTICAL TRAINING</span>
          <span className="opacity-50">•</span>
          <span>JOB-READY SKILLS</span>
        </div>
      </div>

      {/* MODULES SECTION */}
      <section className="py-16 relative z-10" id="modules">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="font-montserrat text-xs font-bold text-[#e5a145] tracking-[3px] uppercase block mb-2">WHAT YOU'LL TRAIN ON</span>
            <h2 className="font-montserrat text-3xl font-extrabold text-white mb-2.5">8 Practical Training Modules</h2>
            <p className="text-[#7c7c7b] text-sm">Every module is built around real firm workflows, not textbook theory.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { num: '01', title: 'Accounting & Tally', desc: 'Practical Entries • Tally • GST Accounting • Bank Reconciliation', icon: '<rect x="3" y="4" width="18" height="16" rx="2" stroke="#e5a145" stroke-width="1.8"/><path d="M3 9h18M8 4v16" stroke="#e5a145" stroke-width="1.8"/>' },
              { num: '02', title: 'GST Practical Compliance', desc: 'GSTR-1 • GSTR-3B • ITC • GST Reconciliation', icon: '<path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" stroke="#e5a145" stroke-width="1.8"/><path d="M9 12l2 2 4-4" stroke="#e5a145" stroke-width="1.8"/>' },
              { num: '03', title: 'Income Tax', desc: 'TDS • Tax Computation • ITR • Practical Cases', icon: '<path d="M6 2h9l5 5v15H6z" stroke="#e5a145" stroke-width="1.8"/><path d="M15 2v5h5" stroke="#e5a145" stroke-width="1.8"/><path d="M9 13h6M9 17h6" stroke="#e5a145" stroke-width="1.8"/>' },
              { num: '04', title: 'Audit', desc: 'Vouching • Verification • Ledger Scrutiny • Working Papers', icon: '<circle cx="11" cy="11" r="7" stroke="#e5a145" stroke-width="1.8"/><path d="M20 20l-4.5-4.5" stroke="#e5a145" stroke-width="1.8" stroke-linecap="round"/>' },
              { num: '05', title: 'Financial Reporting', desc: 'P&L • Balance Sheet • Cash Flow • Ratio Analysis', icon: '<path d="M4 19V9M11 19V4M18 19v-7" stroke="#e5a145" stroke-width="2.2" stroke-linecap="round"/>' },
              { num: '06', title: 'Excel for Finance', desc: 'XLOOKUP/VLOOKUP • SUMIFS • IF • Reconciliation • Reporting', icon: '<rect x="3" y="4" width="18" height="16" rx="2" stroke="#e5a145" stroke-width="1.8"/><path d="M3 10h18M9 10v10" stroke="#e5a145" stroke-width="1.8"/>' },
              { num: '07', title: 'Finance Data Analysis', desc: 'Data Cleaning • Revenue & Cost Analysis • Variance • Insights', icon: '<path d="M3 17l6-6 4 4 8-8" stroke="#e5a145" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 7h6v6" stroke="#e5a145" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>' },
              { num: '08', title: 'Interview & Career Prep', desc: 'Interview Questions • CV Prep • Mock Interview • Communication', icon: '<circle cx="12" cy="8" r="4" stroke="#e5a145" stroke-width="1.8"/><path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" stroke="#e5a145" stroke-width="1.8"/>' },
            ].map((m) => (
              <div key={m.num} className="bg-[#1c1c1b]/90 backdrop-blur-md border border-[#e5a145]/20 border-l-4 border-l-[#e5a145] rounded-xl p-5 shadow-lg hover:border-[#e5a145] transition-all">
                <div className="font-montserrat text-[#e5a145] font-extrabold text-xs mb-2">{m.num}</div>
                <div className="w-10 h-10 rounded-lg bg-[#040404] border border-[#e5a145]/25 flex items-center justify-center mb-3.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" dangerouslySetInnerHTML={{ __html: m.icon }} />
                </div>
                <h3 className="font-montserrat font-bold text-base text-white mb-1.5">{m.title}</h3>
                <p className="text-xs text-[#7c7c7b] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE BAND */}
      <div className="bg-[#1c1c1b] border-y border-[#e5a145]/20 text-white py-10 text-center relative z-10">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="font-montserrat font-bold tracking-[1.5px] text-[#ffdca8] text-sm mb-3">
            FRESHERS <span className="text-[#7c7c7b] mx-2">|</span> CAREER GAP STUDENTS <span className="text-[#7c7c7b] mx-2">|</span> COMMERCE GRADUATES <span className="text-[#7c7c7b] mx-2">|</span> JOB SEEKERS
          </div>
          <div className="text-[#7c7c7b] text-base">
            <b className="text-white">Learn from Professionals</b> • <b className="text-white">Practical Exposure</b> • <b className="text-white">Real-World Learning</b> • <b className="text-white">Job-Ready Skills</b>
          </div>
        </div>
      </div>

      {/* WHY SECTION */}
      <section className="py-16 relative z-10" id="why">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="font-montserrat text-xs font-bold text-[#e5a145] tracking-[3px] uppercase block mb-2">WHY THIS PROGRAM</span>
            <h2 className="font-montserrat text-3xl font-extrabold text-white mb-2.5">Training Inside a Working Audit &amp; Taxation Firm</h2>
            <p className="text-[#7c7c7b] text-sm">You're not learning from a coaching centre — you're training alongside professionals handling live client work.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#1c1c1b]/90 backdrop-blur-md border border-[#e5a145]/20 rounded-xl p-6 text-center shadow-lg">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#e5a145] to-[#8e400e] text-white font-montserrat font-extrabold text-lg flex items-center justify-center mx-auto mb-3.5 shadow-md">1</div>
              <h3 className="font-montserrat font-bold text-base text-white mb-2">Real Firm Environment</h3>
              <p className="text-xs text-[#7c7c7b] leading-relaxed">Sessions run inside Acharya's own audit &amp; taxation office, not a generic classroom.</p>
            </div>

            <div className="bg-[#1c1c1b]/90 backdrop-blur-md border border-[#e5a145]/20 rounded-xl p-6 text-center shadow-lg">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#e5a145] to-[#8e400e] text-white font-montserrat font-extrabold text-lg flex items-center justify-center mx-auto mb-3.5 shadow-md">2</div>
              <h3 className="font-montserrat font-bold text-base text-white mb-2">Practical, Not Theoretical</h3>
              <p className="text-xs text-[#7c7c7b] leading-relaxed">Every module is built around tasks accountants actually do — entries, filings, reconciliations, working papers.</p>
            </div>

            <div className="bg-[#1c1c1b]/90 backdrop-blur-md border border-[#e5a145]/20 rounded-xl p-6 text-center shadow-lg">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#e5a145] to-[#8e400e] text-white font-montserrat font-extrabold text-lg flex items-center justify-center mx-auto mb-3.5 shadow-md">3</div>
              <h3 className="font-montserrat font-bold text-base text-white mb-2">Career-Ready Finish</h3>
              <p className="text-xs text-[#7c7c7b] leading-relaxed">The program closes with interview prep, CV building, and mock interviews so you're ready to apply immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="max-w-[1160px] mx-auto px-6 relative z-10">
        <section className="bg-gradient-to-r from-[#1c1c1b] to-[#0b0b0b] border border-[#e5a145]/30 rounded-2xl text-white py-14 text-center">
          <div className="max-w-[1160px] mx-auto px-6">
            <h2 className="font-montserrat text-3xl font-extrabold mb-2.5">Seats Are Limited — Reserve Yours</h2>
            <p className="text-[#7c7c7b] text-base mb-6">4 months of practical, job-ready finance training from Acharya Professional Accountants, Kozhikode.</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-[#e5a145] to-[#8e400e] text-white font-montserrat font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20 hover:scale-105"
            >
              Enroll Now on WhatsApp
            </button>
            <div className="mt-3.5 font-montserrat text-xs text-[#ffdca8] font-bold tracking-wider">LIMITED SEATS — ENROLL NOW</div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#040404] border-t border-[#e5a145]/15 text-[#7c7c7b] py-11 text-sm mt-16 relative z-10" id="contact">
        <div className="max-w-[1160px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 mb-7">
          <div className="md:col-span-5">
            <div className="font-montserrat font-bold text-base text-white mb-2.5">
              ACHARYA <span className="text-[#e5a145]">PROFESSIONAL ACCOUNTANTS</span>
            </div>
            <p className="text-xs text-[#7c7c7b] leading-relaxed">
              Providing expert accounting solutions that drive business growth and ensure compliance since 2015.
            </p>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-montserrat text-white text-sm font-bold mb-3">Contact</h4>
            <p className="text-xs text-[#7c7c7b]">1st Floor, Palace Arcade, Palace Road,<br />Mankave, Kozhikode, Kerala 673007</p>
            <p className="text-xs text-[#e5a145] mt-2 font-semibold">
              <a href="tel:+919562069434">+91 95620 69434</a><br />
              <a href="tel:+917025546914">+91 70255 46914</a>
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-montserrat text-white text-sm font-bold mb-3">Quick Links</h4>
            <div className="space-y-2 text-xs">
              <a href="/" className="block hover:text-[#e5a145]">Home</a>
              <a href="/courses" className="block hover:text-[#e5a145]">Courses</a>
              <a href="/about" className="block hover:text-[#e5a145]">About</a>
              <a href="/contact" className="block hover:text-[#e5a145]">Contact</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-4 text-center text-xs text-[#555555]">
          © 2026 Acharya Professional Accountants Pvt Ltd. All Rights Reserved.
        </div>
      </footer>

      {/* POPUP REGISTRATION MODAL WITH ANIMATED OPEN & CLOSE */}
      {isModalOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
          className={`fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 ${isClosing ? 'animate-modal-backdrop-out' : 'animate-modal-backdrop-in'
            }`}
        >
          <div
            className={`bg-[#1c1c1b] border border-[#e5a145] rounded-2xl max-w-md w-full p-6 text-white relative shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(229,161,69,0.25)] ${isClosing ? 'animate-modal-card-out' : 'animate-modal-card-in'
              }`}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-2xl text-[#7c7c7b] hover:text-white transition-transform hover:scale-110"
            >
              &times;
            </button>

            <h3 className="font-montserrat text-xl font-bold text-[#e5a145] text-center mb-1">Enroll in 4-Month Program</h3>
            <p className="text-xs text-[#7c7c7b] text-center mb-5">Acharya Professional Accountants, Kozhikode</p>

            <form onSubmit={handleModalSubmit} className="space-y-3.5">
              <div>
                <label className="block font-montserrat text-xs font-semibold text-[#ffdca8] mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={modalForm.name}
                  onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })}
                  className="w-full bg-[#040404] border border-[#e5a145]/30 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#e5a145]"
                />
              </div>

              <div>
                <label className="block font-montserrat text-xs font-semibold text-[#ffdca8] mb-1">WhatsApp / Mobile Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="Your WhatsApp / Mobile Number"
                  value={modalForm.phone}
                  onChange={(e) => setModalForm({ ...modalForm, phone: e.target.value })}
                  className="w-full bg-[#040404] border border-[#e5a145]/30 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#e5a145]"
                />
              </div>

              <div>
                <label className="block font-montserrat text-xs font-semibold text-[#ffdca8] mb-1">Qualification / Status *</label>
                <select
                  required
                  value={modalForm.qual}
                  onChange={(e) => setModalForm({ ...modalForm, qual: e.target.value })}
                  className="w-full bg-[#040404] border border-[#e5a145]/30 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#e5a145]"
                >
                  <option value="" disabled>Select status...</option>
                  <option value="Commerce Graduate (B.Com/M.Com)">Commerce Graduate (B.Com / M.Com)</option>
                  <option value="Non-Commerce Graduate">Non-Commerce Graduate</option>
                  <option value="Career Gap Student">Career Gap Student</option>
                  <option value="Job Seeker">Job Seeker</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#e5a145] to-[#8e400e] text-white font-montserrat font-bold text-base py-3 rounded-lg transition-all hover:opacity-95 mt-2"
              >
                Confirm &amp; Chat on WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default FinanceCareerThudangamPage;
