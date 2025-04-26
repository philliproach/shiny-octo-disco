const websiteContent = {
//GENERAL
    "company-name": "Company Name",
    "owner-name": "John Doe",
    "company-phone": "(123) 456-7890",
    "company-email": "example@example.com",
    "company-footer-about": "About the company / business for footer",
    "copyright-year": "2025",
    "copyright-company-name": "Company Name",
    "facebook-link": "https://facebook.com/acmecorp",
    "twitter-link": "https://twitter.com/acmecorp",
    "instagram-link": "https://instagram.com/acmecorp",

//INDEX
   "index-tagline": "INDEX PAGE",



};

document.addEventListener("DOMContentLoaded", function() {
    for (const id in websiteContent) {
        const element = document.getElementById(id);
        if (element) {
            if (id.endsWith("-link") && element.tagName === "A") {
                element.href = websiteContent[id];
            } else {
                element.textContent = websiteContent[id];
            }
        }
    }
});
