import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  noIndex?: boolean;
  ogImage?: string;
  ogType?: string;
}

const SITE_NAME = "Moh's Automation";
const BASE_URL = "https://mohsautomation.lovable.app";
const DEFAULT_OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/LsEZh5Hen4XeGq2gPSJLc26vv5I3/social-images/social-1776310434084-Screenshot_2026-04-16_043152.webp";

const SEOHead = ({
  title,
  description,
  canonicalPath = "/",
  noIndex = false,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
}: SEOHeadProps) => {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — AI Automation Agency in Abuja | Chatbots, Websites & Workflow Automation`;
  const fullUrl = `${BASE_URL}${canonicalPath}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={fullUrl} />

      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_NG" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEOHead;
