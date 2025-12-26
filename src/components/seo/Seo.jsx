import React from "react";
import { Helmet } from "react-helmet-async";

const SeoHelmet = ({ title, description, keywords = [], href }) => {
  const keywordsString = Array.isArray(keywords) ? keywords.join(", ") : "";

  return (
    <Helmet>
      {/* ✅ Always use charSet (not charset) */}
      <meta charSet="UTF-8" />

      {/* ✅ Title */}
      <title>{title}</title>

      {/* ✅ Viewport and SEO basics */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <meta name="author" content="Slotrap Team" />

      {/* ✅ Open Graph (for social sharing) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={href} />
      <meta
        property="og:image"
        content="https://slotrap.com/images/preview.jpg"
      />

      {/* ✅ Canonical & favicon */}
      <link rel="canonical" href={href} />
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
};

export default SeoHelmet;