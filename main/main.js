const websiteContent = {
//GENERAL
    "company-name": "Company Name",
    "owner-name": "John Doe",
    "company-phone": "(123) 456-7890",
    "company-email": "example@example.com",
    "company-footer-about": "About the company / business for footer",
    "copyright-year": "2025",
    "copyright-company-name": "Company Name",

//INDEX
   "index-tagline": "INDEX PAGE",

//ABOUT
   "about-tagline": "ABOUT PAGE",

//CONTACT
   "contact-tagline": "CONTACT PAGE",

//PRIVACY-POLICY
   "privacy-policy-tagline": "PRIVACY POLICY PAGE",

//TERMS-OF-SERVICE
   "terms-of-service-tagline": "TERMS OF SERVICE PAGE",
    
//TEMPLATE
    "template-tagline": "TEMPLATE",
    "large-header": "Professional Sealcoating Services",
    "lage-subheader": "Protect your investment with premium asphalt maintenance solutions.",
    "bottom-large-header": "Ready to Protect Your Asphalt Investment?",
    "bottom-lage-subheader": "Contact us today for a free assessment and quote on your sealcoating project.",
    //---services---
    "service1": "Asphalt Sealcoating",
    "service1desc": "Protect your pavement from weather damage, UV rays, and chemicals with our premium coal tar or asphalt-based sealants.",
    "service2": "Crack Filling",
    "service2desc": "Prevent water penetration and further damage with our professional crack sealing and filling services.",
    "service3": "Line Striping",
    "service3desc": "Enhance safety and organization with fresh, bright parking lot striping and pavement markings.",
    //---why choose us---
    "wcu1": "Experience",
    "wcu1desc": "Over 15 years of industry experience with thousands of satisfied customers.",
    "wcu2": "Quality Materials",
    "wcu2desc": "We use only premium commercial-grade sealants and materials.",
    "wcu3": "Professional Team",
    "wcu3desc": "Trained, insured, and experienced technicians for every job.",
    "wcu4": "Timely Service",
    "wcu4desc": "On-time project completion with minimal disruption to your business.",

//SOCIAL
    "social-links": {
        "facebook-link": {
            url: "https://facebook.com/",
            icon: "bi bi-facebook"
        },
        "twitter-link": {
            url: "https://twitter.com/",
            icon: "bi bi-twitter-x"
        },
        "instagram-link": {
            url: "https://instagram.com/",
            icon: "bi bi-instagram"
        },
    },
    "ending": "ending"
};




document.addEventListener("DOMContentLoaded", function() {
    for (const id in websiteContent) {
        if (id === "social-links") continue;

        const element = document.getElementById(id);
        if (element) {
            element.textContent = websiteContent[id];
        }
    }

    const socialLinks = websiteContent["social-links"];
    for (const linkId in socialLinks) {
        const linkElement = document.getElementById(linkId);
        if (linkElement) {
            linkElement.href = socialLinks[linkId].url;

            const iconElement = linkElement.querySelector("i");
            if (iconElement) {
                iconElement.className = "";
                iconElement.className = socialLinks[linkId].icon;
            }
        }
    }
});
