export const captureLead = async (leadData) => {
  const scriptUrl =
    leadData?.scriptUrl ||
    import.meta.env.VITE_FINANCE_CAREER_SHEET_URL?.trim() ||
    import.meta.env.VITE_GOOGLE_SCRIPT_URL?.trim();

  if (!scriptUrl) {
    console.warn("Google Script URL is not configured in environment variables.");
    return {
      success: false,
      message: "Google Script URL not configured",
    };
  }

  try {
    const payload = {
      name: leadData.name || "",
      mobile: leadData.mobile || leadData.phone || "",
      phone: leadData.phone || leadData.mobile || "",
      email: leadData.email || "",
      location: leadData.location || "",
      qualification: leadData.qualification || leadData.qual || "",
      qual: leadData.qual || leadData.qualification || "",
      source: leadData.source || (leadData.location ? "Website - Syllabus Download" : "Website Lead"),
      pageUrl: leadData.pageUrl || (typeof window !== "undefined" ? window.location.href : ""),
      timestamp: new Date().toISOString(),
    };

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
      keepalive: true,
    });

    if (!response.ok) {
      // In case of non-200 or opaque redirects from Google Scripts
      return {
        success: true,
        message: "Lead processed",
      };
    }

    let result = { success: true };
    try {
      result = await response.json();
    } catch {
      // Non-JSON response from Google Apps Script endpoint
      result = { success: true };
    }

    return {
      success: result.success !== false,
      message: result.message || "Lead captured successfully",
    };
  } catch (error) {
    console.error("Lead Capture Error:", error);
    return {
      success: false,
      message: "Unable to submit form. Please try again.",
    };
  }
};

