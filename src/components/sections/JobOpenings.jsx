import { useState, useRef, useEffect } from 'react';
import DynamicFaIcon from '../common/FontAwesomeRegistry';

const jobListings = [
  {
    title: 'Marketing Field Executive',
    location: 'Kozhikode',
    type: 'Full-time',
    experience: '0 - 2+',
    description: 'We are looking for a proactive and client-focused Marketing Field Executive to promote our accounting and financial services. This role is open to both freshers and experienced candidates who are passionate about marketing, business development, and building strong client relationships.',
    responsibilities: [
      'Reach out to potential clients through field visits, referrals, and networking activities',
      'Promote the firm\'s services including accounting, taxation, and consulting solutions',
      'Build and maintain long-term relationships with new and existing clients',
      'Support marketing campaigns and gather insights from field activities',
      'Conduct basic market research to identify business opportunities',
      'Participate in seminars, exhibitions, and client meetings to represent the firm',
      'Work toward lead generation and business development goals'
    ],
    requirements: [
      "Bachelor's degree in Marketing, Business Administration, or a related field",
      'Strong verbal and written communication skills',
      'Excellent interpersonal and relationship-building abilities',
      'Ability to work independently and meet targets',
      'Good presentation and persuasion skills',
      'Willingness to travel locally as needed'
    ]
  },
  {
    title: 'Audit Assistant',
    location: 'Kozhikode',
    type: 'Full-time',
    experience: '0 - 2+',
    description: 'We are seeking a detail-oriented Audit Assistant to support our audit team in conducting financial and compliance audits for various clients. This role offers hands-on experience in auditing procedures, financial analysis, and client interaction within a professional work environment.',
    responsibilities: [
      'Assist in conducting statutory, internal, and tax audits for clients',
      'Examine financial records, reports, and compliance documents',
      'Support the audit team in planning and executing audit assignments',
      'Prepare audit working papers and documentation',
      'Identify discrepancies and report audit findings to senior auditors',
      'Coordinate with clients to gather necessary audit information'
    ],
    requirements: [
      "Bachelor's degree in Commerce, Accounting, or related field",
      '0–2 years of experience in audit or accounting (freshers may apply)',
      'Basic knowledge of auditing standards and accounting principles',
      'Proficiency in MS Excel and accounting software (e.g., Tally)',
      'Strong attention to detail and analytical skills',
      'Good communication and time-management skills'
    ]
  },
  {
    title: 'Finance Intern',
    location: 'Kozhikode',
    type: 'career',
    experience: 'Fresher',
    description: 'We are offering a valuable career opportunity for students or recent graduates looking to build a career in finance and accounting. As a Finance Intern, you will gain hands-on experience in financial reporting, bookkeeping, and supporting client projects under the guidance of experienced professionals.',
    responsibilities: [
      'Assist in maintaining financial records and preparing basic reports',
      'Support day-to-day bookkeeping and accounting tasks',
      'Help with invoice processing, data entry, and reconciliations',
      'Conduct basic research and analysis on financial topics',
      'Assist the team with client documentation and audit preparations',
      'Participate in training sessions to learn financial tools and regulations'
    ],
    requirements: [
      "Pursuing or recently completed a Bachelor's degree in Commerce, Finance, or related field",
      'Basic understanding of accounting and finance principles',
      'Proficiency in MS Excel; familiarity with Tally or other software is a plus',
      'Eagerness to learn and take initiative',
      'Strong attention to detail and organization skills',
      'Good communication and teamwork abilities'
    ]
  }
];
const JobOpenings = () => {
  const [activeJob, setActiveJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  const modalRef = useRef(null);

  const toggleJob = (index) => {
    setActiveJob(activeJob === index ? null : index);
  };

  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setIsClosing(false);
    setShowModal(true);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <section id="job-openings" className="relative z-10 py-20 bg-graphite/40 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 md:px-20">
        <div data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-8 text-center text-primary-accent">Current Openings</h3>
        </div>

        {jobListings.map((job, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 50}
            className={`bg-secondary-dark/65 backdrop-blur-sm rounded-xl overflow-hidden mb-6 border border-primary-accent/10 hover:border-primary-accent transition-all duration-300 ${activeJob === index ? 'shadow-lg shadow-primary-accent/20' : ''
              }`}
            style={{
              // Fallback styles in case AOS doesn't work
              opacity: 1,
              transform: 'translateY(0)'
            }}
          >
            <div
              className="p-6 cursor-pointer flex justify-between items-center hover:bg-primary-accent/5 transition-colors duration-300"
              onClick={() => toggleJob(index)}
            >
              <div className="flex-1 min-w-0">
                <div className="text-xl font-semibold text-white mb-2 break-words">{job.title}</div>
                <div className="flex flex-wrap gap-3 sm:gap-5 text-boulder text-sm min-w-0 break-words">
                  <div className="flex items-center gap-2">
                    <DynamicFaIcon name="fa-map-marker-alt" /> {job.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <DynamicFaIcon name="fa-briefcase" /> {job.type}
                  </div>
                  <div className="flex items-center gap-2">
                    <DynamicFaIcon name="fa-layer-group" /> {job.experience}
                  </div>
                </div>
              </div>
              <div className="text-primary-accent text-xl transition-transform duration-300">
                <DynamicFaIcon name={`fa-chevron-${activeJob === index ? 'up' : 'down'}`} />
              </div>
            </div>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${activeJob === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <div className="px-6 pb-6">
                <div className="text-boulder mb-6 leading-relaxed">{job.description}</div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-primary-accent">Responsibilities</h4>
                  <ul className="text-boulder pl-6 space-y-2">
                    {job.responsibilities.map((item, i) => (
                      <li key={i} className="relative pl-5 before:content-['•'] before:text-primary-accent before:absolute before:left-0 before:text-xl">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-primary-accent">Requirements</h4>
                  <ul className="text-boulder pl-6 space-y-2">
                    {job.requirements.map((item, i) => (
                      <li key={i} className="relative pl-5 before:content-['•'] before:text-primary-accent before:absolute before:left-0 before:text-xl">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-primary-accent/10 flex justify-end">
                  <button
                    className="w-full sm:w-auto bg-primary-accent text-dark-bg px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-korma hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300"
                    onClick={() => handleApplyClick(job.title)}
                  >
                    <DynamicFaIcon name="fa-paper-plane" /> Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Application Modal */}
      {showModal && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
          className={`fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 ${
            isClosing ? 'animate-modal-backdrop-out' : 'animate-modal-backdrop-in'
          }`}
        >
          <div
            className={`bg-secondary-dark rounded-2xl p-6 max-w-md w-full border border-primary-accent/30 shadow-2xl relative ${
              isClosing ? 'animate-modal-card-out' : 'animate-modal-card-in'
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-primary-accent">Apply for {selectedJob}</h3>
              <button
                onClick={closeModal}
                className="text-boulder hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mb-6">
              <p className="text-boulder mb-4">
                To apply for this position, please email your CV and cover letter to:
              </p>
              <p className="text-primary-accent font-medium text-center text-lg mb-4">
                acharya.apa@gmail.com
              </p>
              <p className="text-boulder text-sm">
                Please include the job title <span className="font-semibold">"{selectedJob}"</span> in the subject line of your email.
              </p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="px-6 py-2 rounded-full bg-primary-accent text-dark-bg font-medium hover:bg-korma transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default JobOpenings;