import { useState, useEffect } from 'react';
import DynamicFaIcon from '../common/FontAwesomeRegistry';
import siteConfig from '../../config/siteConfig';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Add useEffect to handle the timeout for the success message
  useEffect(() => {
    let timer;
    if (submitSuccess) {
      timer = setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000); // 5 seconds timeout
    }
    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [submitSuccess]);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject';
    if (!formData.message.trim()) newErrors.message = 'Please enter your message';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setSubmitSuccess(false);

    // Send data to Formspree
    fetch('https://formspree.io/f/mldnvrkv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (response.ok) {
          setSubmitSuccess(true);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          setErrors({});
        } else {
          alert('Something went wrong. Please try again later.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error sending message. Please try again later.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="relative z-10 py-20 bg-transparent overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(44,14,9,0.05)] to-[rgba(4,4,4,0.7)] z-0"></div>

      <div className="container mx-auto px-5 md:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div data-aos="fade-right" data-aos-delay="50" className="bg-secondary-dark p-10 rounded-2xl border border-primary-accent/10 shadow-lg">
            <h2 className="font-montserrat text-3xl font-bold mb-8 text-primary-accent relative pb-4">
              Get In Touch
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-primary-accent"></span>
            </h2>
            <p className="text-boulder mb-8 leading-relaxed">
              Have questions or need professional accounting services? Reach out to our team for personalized assistance and expert guidance.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-5 hover:translate-x-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent text-xl">
                  <DynamicFaIcon name="fa-map-marker-alt" />
                </div>
                <div>
                  <h4 className="text-white text-lg mb-1">Our Office</h4>
                  <p className="text-boulder">
                    {siteConfig.address.street},<br />
                    {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.pincode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 hover:translate-x-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent text-xl">
                  <DynamicFaIcon name="fa-phone-alt" />
                </div>
                <div>
                  <h4 className="text-white text-lg mb-1">Phone</h4>
                  <p className="text-boulder">
                    {siteConfig.phones.map((phone, idx) => (
                      <span key={idx} className="block">
                        <a href={`tel:${phone.value}`} className="hover:text-primary-accent transition-colors duration-300">{phone.display}</a>
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 hover:translate-x-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent text-xl">
                  <DynamicFaIcon name="fa-envelope" />
                </div>
                <div>
                  <h4 className="text-white text-lg mb-1">Email</h4>
                  <p className="text-boulder">
                    {siteConfig.emails.map((email, idx) => (
                      <span key={idx} className="block">
                        <a href={`mailto:${email}`} className="hover:text-primary-accent transition-colors duration-300">{email}</a>
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 hover:translate-x-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent text-xl">
                  <DynamicFaIcon name="fa-clock" />
                </div>
                <div>
                  <h4 className="text-white text-lg mb-1">Working Hours</h4>
                  <p className="text-boulder">
                    {siteConfig.businessHours}
                  </p>
                </div>
              </div>
            </div>


            <div>
              <h3 className="text-white text-xl mb-5">Connect With Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: 'fa-linkedin-in', url: 'https://www.linkedin.com/company/acharyaprofessionalaccountants/posts/?feedView=all', label: 'LinkedIn' },
                  ///{ icon: 'twitter', url: '#', label: 'Twitter' },
                  { icon: 'fa-facebook-f', url: 'https://www.facebook.com/APAinCLT', label: 'Facebook' },
                  { icon: 'fa-instagram', url: 'https://www.instagram.com/acharya_professional_accounts?utm_source=ig_web_button_share_sheet&igsh=MTJhMXk5YzNxYnUxZQ==', label: 'Instagram' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 bg-dark-bg rounded-full flex items-center justify-center text-primary-accent text-lg hover:bg-primary-accent hover:text-dark-bg hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300"
                  >
                    <DynamicFaIcon name={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="50" className="bg-secondary-dark p-10 rounded-2xl border border-primary-accent/10 shadow-lg">
            <h2 className="font-montserrat text-3xl font-bold mb-8 text-primary-accent relative pb-4">
              Send a Message
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-primary-accent"></span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-boulder font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 rounded-lg bg-dark-bg border ${errors.name ? 'border-red-500' : 'border-friar-gray'} text-white focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-boulder font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 rounded-lg bg-dark-bg border ${errors.email ? 'border-red-500' : 'border-friar-gray'} text-white focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent`}
                  placeholder="Enter your email address"
                />
                {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-boulder font-medium mb-2">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 rounded-lg bg-dark-bg border ${errors.subject ? 'border-red-500' : 'border-friar-gray'} text-white focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent`}
                  placeholder="Enter message subject"
                />
                {errors.subject && <p className="text-red-500 text-sm mt-2">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-boulder font-medium mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className={`w-full px-5 py-3 rounded-lg bg-dark-bg border ${errors.message ? 'border-red-500' : 'border-friar-gray'} text-white focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent`}
                  placeholder="How can we help you?"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="bg-primary-accent text-dark-bg px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:bg-korma hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <DynamicFaIcon name="fa-paper-plane" />
                  </>
                )}
              </button>

              {submitSuccess && (
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-500 flex items-start gap-3 animate-fadeIn">
                  <i className="fas fa-check-circle mt-1"></i>
                  <div>
                    <p className="font-medium">Message Sent Successfully!</p>
                    <p className="text-sm mt-1">
                      Thank you for contacting us. We'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="50" className="h-96 rounded-2xl overflow-hidden shadow-lg border border-primary-accent/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3077.6841848514887!2d75.8030430737993!3d11.2358719889422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6596ca4d1cb11%3A0xa76f81f9ba68fee1!2sAcharya%20professional%20accountants%20pvt%20ltd!5e1!3m2!1sen!2sin!4v1750755342483!5m2!1sen!2sin"
            className="w-full h-full border-0 filter grayscale-30 contrast-110"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;