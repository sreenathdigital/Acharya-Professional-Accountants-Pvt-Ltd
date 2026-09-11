import React from "react";
import { useLeadCapture } from "../hooks/useLeadCapture";
import { FaTimes, FaCheckCircle, FaDownload, FaSpinner } from "react-icons/fa";

const SyllabusLeadForm = ({ isOpen, onClose }) => {
  const {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    alreadyDownloaded,
    apiError,
    handleChange,
    handleSubmit,
    handleDirectDownload,
  } = useLeadCapture();

  const [isClosing, setIsClosing] = React.useState(false);

  if (!isOpen) return null;

  const handleClose = () => {
    if (isSubmitting) return;
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 bg-black/80 z-[1000] flex items-center justify-center p-4 overflow-y-auto ${
        isClosing ? 'animate-modal-backdrop-out' : 'animate-modal-backdrop-in'
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className={`relative bg-secondary-dark border border-primary-accent/30 rounded-3xl max-w-md w-full overflow-hidden shadow-2xl p-6 md:p-8 ${
        isClosing ? 'animate-modal-card-out' : 'animate-modal-card-in'
      }`}>
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 disabled:opacity-50"
          onClick={handleClose}
          disabled={isSubmitting}
          aria-label="Close modal"
        >
          <FaTimes className="text-xl" />
        </button>

        {alreadyDownloaded ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-primary-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary-accent/20">
              <FaCheckCircle className="text-primary-accent text-3xl" />
            </div>
            <h3 className="font-montserrat text-2xl font-bold text-white mb-2">
              Syllabus Ready
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              You have already requested the syllabus. Click below to download it again.
            </p>
            <button
              onClick={handleDirectDownload}
              className="w-full inline-flex justify-center items-center gap-2 py-4 px-6 rounded-full bg-primary-accent text-dark-bg font-extrabold text-lg hover:bg-korma hover:text-white transition-all duration-300 shadow-lg shadow-primary-accent/20"
            >
              <FaDownload />
              <span>Download Syllabus</span>
            </button>
          </div>
        ) : isSuccess ? (
          <div className="text-center py-6 animate-fade-in">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/20">
              <FaCheckCircle className="text-green-500 text-3xl" />
            </div>
            <h3 className="font-montserrat text-2xl font-bold text-white mb-2">
              Submission Successful!
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Thank you! Your syllabus download has started. Please check your downloads folder.
            </p>
            <button
              onClick={handleClose}
              className="w-full py-4 px-6 rounded-full bg-primary-accent text-dark-bg font-extrabold text-lg hover:bg-korma hover:text-white transition-all duration-300 shadow-lg shadow-primary-accent/20"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <span className="text-primary-accent uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
              Acharya C-PAT Program
            </span>
            <h3 className="font-montserrat text-2xl font-bold text-white mb-2">
              Download Detailed Syllabus
            </h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Enter your details to receive the complete syllabus, fee structure, placement support, and career opportunities.
            </p>

            {apiError && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl p-3 mb-4">
                {apiError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-400 text-xs font-medium mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Rahul Acharya"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full bg-dark-bg border ${
                    errors.name ? "border-red-500" : "border-white/10"
                  } rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-accent transition-colors`}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs mt-1 block">
                    {errors.name}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-gray-400 text-xs font-medium mb-1">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-gray-500 font-semibold select-none border-r border-white/10 pr-3">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="10-digit mobile number"
                    value={formData.mobile}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full bg-dark-bg border ${
                      errors.mobile ? "border-red-500" : "border-white/10"
                    } rounded-xl pl-16 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-accent transition-colors`}
                  />
                </div>
                {errors.mobile && (
                  <span className="text-red-500 text-xs mt-1 block">
                    {errors.mobile}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-gray-400 text-xs font-medium mb-1">
                  Email Address <span className="text-gray-500">(Optional)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. rahul@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full bg-dark-bg border ${
                    errors.email ? "border-red-500" : "border-white/10"
                  } rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-accent transition-colors`}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1 block">
                    {errors.email}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-gray-400 text-xs font-medium mb-1">
                  Location / City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="e.g. Calicut"
                  value={formData.location}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full bg-dark-bg border ${
                    errors.location ? "border-red-500" : "border-white/10"
                  } rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-accent transition-colors`}
                />
                {errors.location && (
                  <span className="text-red-500 text-xs mt-1 block">
                    {errors.location}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex justify-center items-center gap-2 py-4 px-6 rounded-full bg-primary-accent text-dark-bg font-extrabold text-lg hover:bg-korma hover:text-white transition-all duration-300 shadow-lg shadow-primary-accent/20 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin text-xl" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <FaDownload />
                    <span>Get Free Syllabus PDF</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SyllabusLeadForm;
