import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead: React.FC = () => {
  const title = "IA7 Global Tech | AI Solutions & Custom Software for Europe";
  const desc  = "IA7 Global Tech builds custom AI chatbots, web apps, and software for businesses in Germany and Europe. GDPR-ready. Berlin-registered. Powered by JGAI R&D. Deploy in 48h.";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content="AI chatbot Germany, custom software Europe, AI solutions Berlin, GDPR AI, web development Germany, AI startup Berlin, IA7 Global Tech, JGAI, chatbot deployment" />
      <meta name="author" content="IA7 Global Tech — IA7 Global Trading UG" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ia7globaltech.eu" />
      <meta property="og:locale" content="en_EU" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="geo.region" content="DE-BE" />
      <meta name="geo.placename" content="Berlin" />
      <link rel="canonical" href="https://www.ia7globaltech.eu" />
    </Helmet>
  );
};

export default SEOHead;
