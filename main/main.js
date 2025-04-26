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

//META
   "meta": {
       "og:title": "Company Name",
       "og:description": "Description of the company / business",
       "og:url": "https://yourwebsite.com/",
       "og:image": "../media/images/logo.png",
       "twitter:card": "summary_large_image"
  },
    
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
    "ending": "ignore this"
};
document.addEventListener("DOMContentLoaded", function () {
  for (const id in websiteContent) {
    if (id === "social-links" || id === "meta") continue;

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

  const metaTags = websiteContent.meta;
  for (const key in metaTags) {
    const isName = key.startsWith("twitter:");
    const selector = isName
      ? `meta[name="${key}"]`
      : `meta[property="${key}"]`;

    let meta = document.querySelector(selector);
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute(isName ? "name" : "property", key);
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", metaTags[key]);
  }
});
