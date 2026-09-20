import { useEffect } from 'react';
import AOS from 'aos';
import SEO from '../common/SEO';

import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import TopCities from '../sections/TopCities';
import AreasWeServeSection from '../sections/AreasWeServeSection';
import TaxCalculatorTeaser from '../sections/TaxCalculatorTeaser';
import CoursesTeaser from '../sections/CoursesTeaser';
import CareersTeaser from '../sections/CareersTeaser';
import FAQ from '../sections/FAQ';
import PeopleCulture from '../sections/PeopleCulture';
// import JobOpenings from '../sections/JobOpenings';
import Contact from '../sections/Contact';

const Home = () => {
  // SEO handled by component


  useEffect(() => {
    AOS.refresh();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main>
      <SEO
        title="Acharya Accountants | CA, Tax, GST & Audit Services in Kerala"
        description="Acharya Professional Accountants offers expert CA services, tax planning, GST filing, statutory audits, and business advisory across Kozhikode, Kannur, Malappuram, Wayanad, Kasaragod & Bangalore."
        canonical="https://acharyaprofessionalaccountants.in/"
      />

      <Hero />
      <About />
      <Services />
      <TopCities />
      <AreasWeServeSection />
      <TaxCalculatorTeaser />
      <CoursesTeaser />
      <CareersTeaser />
      <FAQ />
      <PeopleCulture />
      {/* <JobOpenings /> */}
      <Contact />
    </main>
  );
};

export default Home;

