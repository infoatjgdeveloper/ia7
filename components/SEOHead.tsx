import React from 'react';
import { Helmet } from 'react-helmet-async';
const SEOHead: React.FC = () => {
  const title = 'IA7 Global Tech | AI Solutions & Custom Software for Europe';
  const desc  = 'IA7 Global Tech builds custom AI chatbots, web applications, and software for businesses in Germany and Europe. Berlin-registered. Deployed in 48h. Powered by JGAI R&D.';
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content="AI chatbot Germany, custom software Europe, AI solutions Berlin, web development Germany, IA7 Global Tech, JGAI" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ia7globaltech.eu" />
      <meta name="geo.region" content="DE-BE" />
      <meta name="geo.placename" content="Berlin" />
      <link rel="canonical" href="https://www.ia7globaltech.eu" />
    </Helmet>
  );
};
export default SEOHead;
