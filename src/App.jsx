import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router';
import React, { Suspense } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import LoadingSpinner from './components/common/LoadingSpinner';
import AnalyticsTracker from './components/common/AnalyticsTracker';

import Home from './components/pages/Home';
import AboutPage from './components/pages/AboutPage';
import ServicesPage from './components/pages/ServicesPage';
import ServiceAccountingPage from './components/pages/ServiceAccountingPage';
import ServiceBookkeepingPage from './components/pages/ServiceBookkeepingPage';
import ServiceFinancialStatementsPage from './components/pages/ServiceFinancialStatementsPage';
import ServiceCashFlowPage from './components/pages/ServiceCashFlowPage';
import ServiceManagementReportsPage from './components/pages/ServiceManagementReportsPage';
import ServiceReconciliationsPage from './components/pages/ServiceReconciliationsPage';
import ServiceTaxationPage from './components/pages/ServiceTaxationPage';
import ServiceTdsTcsPage from './components/pages/ServiceTdsTcsPage';
import ServiceTaxPlanningPage from './components/pages/ServiceTaxPlanningPage';
import ServiceNoticeResponsesPage from './components/pages/ServiceNoticeResponsesPage';
import ServiceTaxAuditPage from './components/pages/ServiceTaxAuditPage';
import ServiceAuditingPage from './components/pages/ServiceAuditingPage';
import AuditingServiceDetailPage from './components/pages/AuditingServiceDetailPage';
import ServiceInternalAuditPage from './components/pages/ServiceInternalAuditPage';
import ServiceGstPage from './components/pages/ServiceGstPage';
import GSTServiceDetailPage from './components/pages/GSTServiceDetailPage';
import ServiceBusinessConsultingPage from './components/pages/ServiceBusinessConsultingPage';
import ServiceAdvisoryPage from './components/pages/ServiceAdvisoryPage';
import MCAServiceDetailPage from './components/pages/MCAServiceDetailPage';
import LoanSupportPage from './components/pages/LoanSupportPage';
import LoanDetailPage from './components/pages/LoanDetailPage';
import CoursesPage from './components/pages/CoursesPage';

import CareersPage from './components/pages/CareersPage';
import InternshipPage from './components/pages/InternshipPage';
import ContactPage from './components/pages/ContactPage';
import TaxCalculatorPage from './components/pages/TaxCalculatorPage';
import FinanceCareerThudangamPage from './components/pages/FinanceCareerThudangamPage';
import DynamicPageHandler from './components/pages/DynamicPageHandler';

// Subservice pages
import WorkingCapitalPage from './components/pages/subservices/WorkingCapitalPage';
import FinancialFeasibilityPage from './components/pages/subservices/FinancialFeasibilityPage';
import ProfitabilityAnalysisPage from './components/pages/subservices/ProfitabilityAnalysisPage';

// Resource and cluster pages
import NriTaxHubPage from './components/pages/resources/NriTaxHubPage';
import NriRentalIncomePage from './components/pages/resources/NriRentalIncomePage';
import NriTdsPage from './components/pages/resources/NriTdsPage';
import NriCapitalGainsPage from './components/pages/resources/NriCapitalGainsPage';
import TaxNotice143_1Page from './components/pages/resources/TaxNotice143_1Page';
import TaxNotice148Page from './components/pages/resources/TaxNotice148Page';
import GstItcMismatchPage from './components/pages/resources/GstItcMismatchPage';
import HandloomGstKannurPage from './components/pages/resources/HandloomGstKannurPage';
import CmaDataPage from './components/pages/resources/CmaDataPage';
import ProjectReportPage from './components/pages/resources/ProjectReportPage';
import DscrGuidePage from './components/pages/resources/DscrGuidePage';
import CgtmseLoanPage from './components/pages/resources/CgtmseLoanPage';
import MudraLoanPage from './components/pages/resources/MudraLoanPage';

export function AppContent() {
  const location = useLocation();
  const isStandaloneLanding = location.pathname.includes('thudangam');

  return (
    <div className="font-inter text-white bg-dark-bg min-h-screen relative overflow-hidden">
      {/* Global Background Aura (Radial & Triangle Glow) Effect */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        {/* Dedicated Hero Section/Top Glows */}
        <div className="absolute top-[-5%] left-[5%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(circle,rgba(229,161,69,0.25)_0%,rgba(229,161,69,0)_70%)] filter blur-[100px] animate-glow-1" />
        <div className="absolute top-[-2%] right-[-10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-[radial-gradient(circle,rgba(142,64,14,0.26)_0%,rgba(142,64,14,0)_70%)] filter blur-[95px] animate-glow-2" />

        {/* Glow 1 - Upper Left */}
        <div className="absolute top-[10%] left-[-15%] w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-[radial-gradient(circle,rgba(229,161,69,0.23)_0%,rgba(229,161,69,0)_70%)] filter blur-[90px] animate-glow-1" />

        {/* Glow 2 - Upper Right */}
        <div className="absolute top-[25%] right-[-15%] w-[75vw] h-[75vw] max-w-[850px] max-h-[850px] rounded-full bg-[radial-gradient(circle,rgba(142,64,14,0.27)_0%,rgba(142,64,14,0)_70%)] filter blur-[110px] animate-glow-2" />

        {/* Triangle Glow 1 - Upper Middle Right */}
        <svg 
          className="absolute top-[20%] right-[-5%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] pointer-events-none select-none opacity-25 animate-glow-2" 
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient id="global-tri-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(229,161,69,0.35)" />
              <stop offset="100%" stopColor="rgba(142,64,14,0)" />
            </linearGradient>
            <filter id="global-triangle-blur-1" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>
          <polygon points="50,15 90,85 10,85" fill="url(#global-tri-grad-1)" filter="url(#global-triangle-blur-1)" />
        </svg>

        {/* Glow 3 - Middle Left */}
        <div className="absolute top-[45%] left-[-20%] w-[85vw] h-[85vw] max-w-[950px] max-h-[950px] rounded-full bg-[radial-gradient(circle,rgba(229,161,69,0.20)_0%,rgba(229,161,69,0)_70%)] filter blur-[100px] animate-glow-1" />

        {/* Triangle Glow 2 - Middle Left */}
        <svg 
          className="absolute top-[48%] left-[-8%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] pointer-events-none select-none opacity-20 animate-glow-1" 
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient id="global-tri-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(142,64,14,0.35)" />
              <stop offset="100%" stopColor="rgba(229,161,69,0)" />
            </linearGradient>
            <filter id="global-triangle-blur-2" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" />
            </filter>
          </defs>
          <polygon points="50,10 95,85 5,85" fill="url(#global-tri-grad-2)" filter="url(#global-triangle-blur-2)" />
        </svg>

        {/* Glow 4 - Middle Right */}
        <div className="absolute top-[65%] right-[-18%] w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-[radial-gradient(circle,rgba(229,161,69,0.22)_0%,rgba(229,161,69,0)_70%)] filter blur-[110px] animate-glow-2" />

        {/* Triangle Glow 3 - Lower Middle */}
        <svg 
          className="absolute top-[70%] left-[25%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] pointer-events-none select-none opacity-15 animate-glow-1" 
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient id="global-tri-grad-3" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(229,161,69,0.30)" />
              <stop offset="100%" stopColor="rgba(142,64,14,0)" />
            </linearGradient>
            <filter id="global-triangle-blur-3" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="7" />
            </filter>
          </defs>
          <polygon points="50,15 95,80 5,80" fill="url(#global-tri-grad-3)" filter="url(#global-triangle-blur-3)" />
        </svg>

        {/* Glow 5 - Lower Left */}
        <div className="absolute top-[85%] left-[-15%] w-[85vw] h-[85vw] max-w-[1000px] max-h-[1000px] rounded-full bg-[radial-gradient(circle,rgba(142,64,14,0.23)_0%,rgba(142,64,14,0)_70%)] filter blur-[120px] animate-glow-2" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <AnalyticsTracker />
        {!isStandaloneLanding && <Header />}
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/accounting" element={<ServiceAccountingPage />} />
            <Route path="/services/accounting/bookkeeping" element={<ServiceBookkeepingPage />} />
            <Route path="/services/accounting/financial-statements" element={<ServiceFinancialStatementsPage />} />
            <Route path="/services/accounting/cash-flow" element={<ServiceCashFlowPage />} />
            <Route path="/services/accounting/management-reports" element={<ServiceManagementReportsPage />} />
            <Route path="/services/accounting/reconciliations" element={<ServiceReconciliationsPage />} />
            <Route path="/services/taxation" element={<ServiceTaxationPage />} />
            <Route path="/services/taxation/tds-tcs" element={<ServiceTdsTcsPage />} />
            <Route path="/services/taxation/tax-planning" element={<ServiceTaxPlanningPage />} />
            <Route path="/services/taxation/notice-responses" element={<ServiceNoticeResponsesPage />} />
            <Route path="/services/taxation/tax-audit" element={<Navigate to="/services/auditing/tax-audit" replace />} />
            <Route path="/services/auditing" element={<ServiceAuditingPage />} />
            <Route path="/services/auditing/tax-audit" element={<ServiceTaxAuditPage />} />
            <Route path="/services/auditing/internal-audit" element={<ServiceInternalAuditPage />} />
            <Route path="/services/auditing/:serviceId" element={<AuditingServiceDetailPage />} />
            <Route path="/services/gst" element={<ServiceGstPage />} />
            <Route path="/services/gst/:serviceId" element={<GSTServiceDetailPage />} />
            <Route path="/services/business-consulting" element={<ServiceBusinessConsultingPage />} />
            {/* Business Consulting Subservices */}
            <Route path="/services/business-consulting/working-capital" element={<WorkingCapitalPage />} />
            <Route path="/services/business-consulting/financial-feasibility" element={<FinancialFeasibilityPage />} />
            <Route path="/services/business-consulting/profitability-analysis" element={<ProfitabilityAnalysisPage />} />

            <Route path="/services/advisory" element={<ServiceAdvisoryPage />} />
            <Route path="/services/advisory/:serviceId" element={<MCAServiceDetailPage />} />

            <Route path="/services/business-loans" element={<LoanSupportPage />} />
            <Route path="/services/business-loans/:loanSlug" element={<LoanDetailPage />} />

            {/* Bank Loan Cluster */}
            <Route path="/services/business-loans/cma-data" element={<CmaDataPage />} />
            <Route path="/services/business-loans/project-report" element={<ProjectReportPage />} />
            <Route path="/services/business-loans/dscr" element={<DscrGuidePage />} />
            <Route path="/services/business-loans/cgtmse" element={<CgtmseLoanPage />} />
            <Route path="/services/business-loans/mudra" element={<MudraLoanPage />} />

            {/* NRI Tax Hub & Guides */}
            <Route path="/resources/nri-tax-hub" element={<NriTaxHubPage />} />
            <Route path="/resources/nri-taxation/rental-income" element={<NriRentalIncomePage />} />
            <Route path="/resources/nri-taxation/tds-certificate" element={<NriTdsPage />} />
            <Route path="/resources/nri-taxation/capital-gains-property" element={<NriCapitalGainsPage />} />

            {/* Tax Notice Guides */}
            <Route path="/resources/tax-notices/notice-143-1" element={<TaxNotice143_1Page />} />
            <Route path="/resources/tax-notices/notice-148" element={<TaxNotice148Page />} />
            <Route path="/resources/tax-notices/gst-itc-mismatch" element={<GstItcMismatchPage />} />
            <Route path="/resources/tax-notices/handloom-gst-kannur" element={<HandloomGstKannurPage />} />

            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/globalpro" element={<Navigate to="/courses" replace />} />
            <Route path="/courses/c-pro" element={<Navigate to="/courses" replace />} />
            <Route path="/courses/c-pat" element={<Navigate to="/courses" replace />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/Internship" element={<InternshipPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/calculator" element={<TaxCalculatorPage />} />
            <Route path="/finance-career-thudangam" element={<FinanceCareerThudangamPage />} />
            <Route path="/thudangam" element={<FinanceCareerThudangamPage />} />

            {/* Location Based Pages - Dynamic Handler for partial matching */}
            <Route path="/:slug" element={<DynamicPageHandler />} />
          </Routes>
        </Suspense>
        {!isStandaloneLanding && <Footer />}
        {!isStandaloneLanding && <ScrollToTop />}
      </div>
    </div>
  );
}

function App({ isSsr = false }) {
  if (isSsr) {
    return <AppContent />;
  }
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
