import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOHeadProps {
  titleKey?: string;
  descriptionKey?: string;
  defaultTitle?: string;
  defaultDescription?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  titleKey, 
  descriptionKey, 
  defaultTitle = "IA7 Global Tech | Elite IT Systems",
  defaultDescription = "We architect resilient, high-performance custom software solutions and secure cloud infrastructure for global leaders."
}) => {
  const { t } = useTranslation();

  const title = titleKey ? t(titleKey) : defaultTitle;
  const description = descriptionKey ? t(descriptionKey) : defaultDescription;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEOHead;
