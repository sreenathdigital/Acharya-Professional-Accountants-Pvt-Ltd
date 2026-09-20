import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import siteConfig from '../../config/siteConfig';
import { locationGroups } from '../../data/locationData';
import {
  IconChevronRight,
  IconMapMarker,
  IconPhone,
  IconEnvelope,
  IconClock,
  IconHeart,
  IconLinkedIn,
  IconFacebook,
  IconInstagram
} from './Icons';

const Footer = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email.trim()) {
      setIsSubscribed(true);
      e.target.reset();
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  const getLinkHref = (item) => {
    const links = {
      home: '/',
      about: '/about',
      services: '/services',
      courses: '/courses',
      careers: '/careers',
      contact: '/contact',
      calculator: '/calculator',

      accounting: '/services/accounting',
      auditing: '/services/auditing',
      taxation: '/services/taxation',
      gst: '/services/gst',
      'business consulting': '/services/business-consulting',
      advisory: '/services/advisory',
      kozhikode: '/accounting-service-in-kozhikode',
    };

    return links[item] || '#';
  };


  return (
    <footer data-aos="fade-up" data-aos-delay="50" className="bg-graphite pt-20 border-t border-primary-accent/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%201000%20600%22%3E%3Crect%20fill%3D%22%231c1c1b%22%20width%3D%221000%22%20height%3D%22600%22/%3E%3Cg%20fill%3D%22%23e5a145%22%20opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%22100%22%20r%3D%2280%22/%3E%3Ccircle%20cx%3D%22800%22%20cy%3D%22500%22%20r%3D%22100%22/%3E%3Ccircle%20cx%3D%22500%22%20cy%3D%22300%22%20r%3D%22120%22/%3E%3C/g%3E%3C/svg%3E')] bg-cover z-0"></div>

      {/* Logo & social media icons */}
      <div className="container mx-auto px-5 md:px-20 relative z-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-6">
              <img
                src="/images/logo.webp"
                alt="Acharya Professional Accountants"
                className="h-32 w-auto mb-5"
                loading="lazy"
                width="128"
                height="128"
              />
              <p className="text-boulder">
                Providing expert accounting solutions that drive business growth and ensure compliance since {siteConfig.foundingYear}.
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-dark-bg rounded-full flex items-center justify-center text-primary-accent hover:bg-primary-accent hover:text-dark-bg hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <IconLinkedIn className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-dark-bg rounded-full flex items-center justify-center text-primary-accent hover:bg-primary-accent hover:text-dark-bg hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300"
                aria-label="Facebook"
              >
                <IconFacebook className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-dark-bg rounded-full flex items-center justify-center text-primary-accent hover:bg-primary-accent hover:text-dark-bg hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-accent/30 transition-all duration-300"
                aria-label="Instagram"
              >
                <IconInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary-accent relative pb-2">
              Services
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-primary-accent"></span>
            </h3>

            <ul className="space-y-3">
              {['accounting', 'taxation', 'auditing', 'gst', 'business consulting', 'advisory'].map((item, index) => (
                <li key={index}>
                  <Link
                    to={getLinkHref(item)}
                    className="text-boulder hover:text-primary-accent transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <IconChevronRight className="w-3 h-3 text-primary-accent group-hover:translate-x-1 transition-transform duration-300" />
                    {item === 'gst' ? 'GST' : item.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* quick links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary-accent relative pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-primary-accent"></span>
            </h3>

            <ul className="space-y-3">
              {['home', 'about', 'services', 'courses', 'careers', 'calculator', 'contact', 'kozhikode'].map((item, index) => (
                <li key={index}>
                  <Link
                    to={getLinkHref(item)}
                    className="text-boulder hover:text-primary-accent transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <IconChevronRight className="w-3 h-3 text-primary-accent group-hover:translate-x-1 transition-transform duration-300" />
                    {item === 'calculator' ? 'Tax Calculator' : item === 'kozhikode' ? 'CA in Kozhikode' : item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary-accent relative pb-2">
              Contact Info
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-primary-accent"></span>
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <IconMapMarker className="w-5 h-5 text-primary-accent mt-1 flex-shrink-0" />
                <span className="text-boulder">
                  {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.pincode}
                </span>
              </li>

              <li className="flex items-start gap-4">
                <IconPhone className="w-5 h-5 text-primary-accent mt-1 flex-shrink-0" />
                <span className="text-boulder">
                  {siteConfig.phones.map((phone, idx) => (
                    <React.Fragment key={idx}>
                      <a href={`tel:${phone.value}`} className="hover:text-primary-accent transition-colors duration-300">{phone.display}</a>
                      {idx < siteConfig.phones.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              </li>

              <li className="flex items-start gap-4">
                <IconEnvelope className="w-5 h-5 text-primary-accent mt-1 flex-shrink-0" />
                <span className="text-boulder">
                  {siteConfig.emails.map((email, idx) => (
                    <React.Fragment key={idx}>
                      <a href={`mailto:${email}`} className="hover:text-primary-accent transition-colors duration-300">{email}</a>
                      {idx < siteConfig.emails.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              </li>

              <li className="flex items-start gap-4">
                <IconClock className="w-5 h-5 text-primary-accent mt-1 flex-shrink-0" />
                <span className="text-boulder">
                  {siteConfig.businessHours}
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Service Available Cities Section */}
      <div className="container mx-auto px-5 md:px-20 relative z-10 pb-10 border-t border-primary-accent/10 pt-10">
        <h3 className="text-xl font-semibold mb-6 text-primary-accent text-center relative pb-2 inline-block left-1/2 transform -translate-x-1/2">
          Service Available Cities
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-accent"></span>
        </h3>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          {locationGroups.flatMap(group => group.cities).map((city, index) => {
            let slug = city.trim().toLowerCase().replace(/\s+/g, '-');
            if (slug === 'bengaluru') slug = 'bangalore';
            if (slug === 'mangalore') slug = 'mangaluru';
            return (
              <Link
                key={index}
                to={`/accounting-service-in-${slug}`}
                className="text-boulder text-xs hover:text-white hover:underline transition-colors duration-300"
              >
                {city}
              </Link>
            )
          })}
        </div>

      </div>

      {/* End section  */}
      <div className="py-6 border-t border-primary-accent/10 text-center relative z-10">
        <div className="container mx-auto px-5">
          <p className="text-boulder text-sm">
            &copy; {currentYear} {siteConfig.legalName}. All Rights Reserved. | Designed & Developed by <a href="https://www.sreenathdev.online/" target="_blank" rel="noopener noreferrer" className="text-primary-accent hover:underline flex items-center gap-1 inline-flex"><IconHeart className="w-3 h-3 text-primary-accent" /> Sreenath K K</a>
          </p>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
