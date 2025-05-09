const websiteContent = {
//GENERAL
        //CONTACT
    "owner-name": "John Doe",
    "company-phone": "(123) 456-7890",
    "company-email": "example@example.com",
        //COMPANY INFO
    "company-name": "TEMPLATE",
    "copyright-company-name": "Company Name",
    "company-footer-about": "About the company / business for footer",
    "copyright-year": "2025",
        //SOCIAL LINKS
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
        //INDEX AND ABOUT
   "bottom-large-header": "Hero Section Header",
   "bottom-large-subheader": "Hero Section Subheader",
  
//ABOUT
   "about-tagline": "ABOUT PAGE",
   "about-the-business": "Paragraph about the business goes here.",
   "about-top-header": "Professional website designer and builder.",
   "about-top-subheader": "We are dedicated to providing high-quality websites.",

//CONTACT
    "contact-tagline": "CONTACT PAGE",
    "contact-owner-name": "John Doe",
    "contact-company-phone": "(123) 456-7890",
    "contact-company-email": "example@example.com",
    
//INDEX
        //PAGE INFO
    "index-tagline": "INDEX PAGE",
    "large-header": "Professional Website Builders",
    "large-subheader": "Enhance your business with a sleek website design.",

        //---services---
    "service1": "Service 1",
    "service1desc": "About service 1,
    "service2": "Service 2",
    "service2desc": "About service 2",
    "service3": "Service 3",
    "service3desc": "About service 3",
        //---why choose us---
    "wcu1": "Experience",
    "wcu1desc": "Over 3 years of experience programming and designing websites.",
    "wcu2": "Quality Design",
    "wcu2desc": "Our websites offer sleek designs focusing on easy use and navigation.",
    "wcu3": "Custom Building",
    "wcu3desc": "We offer fully custom websites. ",
    "wcu4": "Timely Service",
    "wcu4desc": "On-time project completion.",




        
    "ending": "IGNORE THIS"
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
