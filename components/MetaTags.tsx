import React from 'react';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({
  title = "Homiee | Elevated Living",
  description = "Discover exceptional furniture and decor for the modern sanctuary. We believe in furniture that tells a story and decor that calms the soul.",
  keywords = "home decor, furniture, interior design, modern furniture, home accessories",
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
  ogUrl,
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,
}) => {
  const fullTitle = title.includes("Homiee") ? title : `${title} | Homiee`;

  return (
    <>
      <title>{fullTitle}</title>
      
      {/* Essential Meta Tags */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Studio Homiee" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl || canonicalUrl || window.location.href} />
      <meta property="og:site_name" content="Homiee" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle || fullTitle} />
      <meta name="twitter:description" content={twitterDescription || description} />
      <meta name="twitter:image" content={twitterImage || ogImage} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Schema.org for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Homiee",
          "description": "Exceptional furniture and decor for the modern sanctuary",
          "url": "https://www.homiee.studio",
          "logo": "https://www.homiee.studio/logo.png",
          "sameAs": [
            "https://www.instagram.com/homiee.studio",
            "https://www.facebook.com/homiee.studio",
            "https://www.twitter.com/homiee.studio"
          ]
        })}
      </script>
    </>
  );
};

export default MetaTags;