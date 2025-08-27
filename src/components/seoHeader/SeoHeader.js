import React from "react";
import { Helmet } from "react-helmet";
import {
  greeting,
  seo,
  socialMediaLinks,
  experience,
  contactPageData,
  certifications,
} from "../../portfolio.js";

function SeoHeader() {
  let sameAs = [];
  if (socialMediaLinks && Array.isArray(socialMediaLinks)) {
    socialMediaLinks
      .filter(
        (media) => media && media.link && 
        !(media.link.startsWith("tel") || media.link.startsWith("mailto"))
      )
      .forEach((media) => {
        sameAs.push(media.link);
      });
  }

  let mail = "";
  if (socialMediaLinks && Array.isArray(socialMediaLinks)) {
    const emailLink = socialMediaLinks.find(
      (media) => media && media.link && media.link.startsWith("mailto")
    );
    if (emailLink) {
      mail = emailLink.link.substring("mailto:".length);
    }
  }
  const workExperience = experience.sections
    ?.find((section) => section.title === "Work Experience")
    ?.experiences?.[0];
    
  let job = {
    title: workExperience?.role || "AI & ML Engineer",
    company: workExperience?.company || "Stag Innovations Pvt. Ltd.",
  };

  let credentials = [];
  certifications.certifications.forEach((certification) => {
    credentials.push({
      "@context": "https://schema.org",
      "@type": "EducationalOccupationalCredential",
      url: certification.certificate_link,
      name: certification.title,
      description: certification.subtitle,
    });
  });
  const data = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: greeting.title,
    url: seo?.og?.url,
    email: mail,
    telephone: contactPageData.phoneSection?.subtitle,
    sameAs: sameAs,
    jobTitle: job.title,
    worksFor: {
      "@type": "Organization",
      name: job.company,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: contactPageData.addressSection?.locality,
      addressRegion: contactPageData.addressSection?.region,
      addressCountry: contactPageData.addressSection?.country,
      postalCode: contactPageData.addressSection?.postalCode,
      streetAddress: contactPageData.addressSection?.streetAddress,
    },
    hasCredential: credentials,
  };
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo?.og?.title} />
      <meta property="og:type" content={seo?.og?.type} />
      <meta property="og:url" content={seo?.og?.url} />
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export default SeoHeader;
