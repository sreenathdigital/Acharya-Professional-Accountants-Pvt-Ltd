/**
 * Centralized Site & NAP (Name, Address, Phone) Configuration
 * Acharya Professional Accountants
 */

export const siteConfig = {
    siteName: "Acharya Professional Accountants",
    legalName: "Acharya Professional Accountants Pvt Ltd",
    siteUrl: "https://acharyaprofessionalaccountants.in",
    
    // Primary Contact Details (NAP)
    address: {
        street: "1st Floor, Palace Arcade, Palace Road, Mankavu",
        city: "Kozhikode",
        state: "Kerala",
        pincode: "673007", // Note: Also appears as 673002 in some legacy data (TODO_VERIFY)
        country: "India",
        countryCode: "IN",
        areaSpelling: "Mankavu" // Note: Also appears as Mankave (TODO_VERIFY)
    },
    
    // Verified Contact Numbers
    phones: [
        { display: "+91 9562 06 9434", value: "+919562069434" },
        { display: "+91 7025 54 6914", value: "+917025546914" },
        { display: "+91 9072 11 8877", value: "+919072118877" }
    ],
    
    whatsapp: {
        display: "+91 9446 36 9434",
        value: "+919446369434",
        link: "https://wa.me/919446369434"
    },
    
    emails: [
        "acharya.apa@gmail.com",
        "apa@acharya-professional-accountants.in"
    ],
    
    businessHours: "Monday - Saturday: 9:00 AM - 6:00 PM",
    foundingYear: "2015",
    
    socialLinks: {
        linkedin: "https://www.linkedin.com/company/acharyaprofessionalaccountants/posts/?feedView=all",
        facebook: "https://www.facebook.com/APAinCLT",
        instagram: "https://www.instagram.com/acharya_professional_accounts"
    },
    
    // YMYL / E-E-A-T CA Partner & Compliance Profile Placeholders (TODO_VERIFY with client)
    caPartnerProfile: {
        isVerified: false, // Set to true when verified details are provided
        name: "", // e.g. "CA [Name]"
        designation: "Chartered Accountant & Managing Partner",
        qualification: "FCA, B.Com",
        icaiMembershipNo: "", // TODO_VERIFY: ICAI Membership Number
        icaiFirmRegistrationNo: "", // TODO_VERIFY: ICAI FRN Number
        experienceYears: "10+",
        specialization: "Corporate Taxation, GST Audit, Startup Financial Advisory & NRI Tax Support",
        photoUrl: "/images/teams_images/ca_partner_placeholder.webp"
    }
};

export default siteConfig;
