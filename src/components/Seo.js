// src/components/Seo.js
// React 19 hoists <title>, <meta>, and <link> rendered anywhere in the tree
// into <head> automatically, so this needs no portal and no extra dependency.

const SITE_URL = 'https://athulbaburaj.github.io';
const SITE_NAME = "Athul Baburaj's Portfolio";

// Placeholder — swap for a purpose-made 1200x630 Open Graph image when one exists.
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo512.png`;

const Seo = ({ title, description, path = '/' }) => {
  const fullTitle = `${title} | Athul Baburaj`;
  const url = `${SITE_URL}${path}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* "summary", not "summary_large_image": the fallback image is a 512x512
          square and a large-image card would letterbox or reject it. Switch to
          summary_large_image once a real 1200x630 OG image exists. */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
    </>
  );
};

export default Seo;
