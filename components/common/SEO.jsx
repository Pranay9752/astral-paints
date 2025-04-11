import Head from "next/head";

export default function Seo({
  canonical,
  metaKeywords = "",
  metaDesc = "",
  title,
  opengraphType = "website",
  opengraphSiteName = "",
  opengraphTitle,
  opengraphDescription = "",
  opengraphUrl,
  opengraphImage,
  schema,
}) {
  return (
    <Head>
      {/* Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={metaDesc} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph Meta */}
      <meta property="og:type" content={opengraphType} />
      <meta property="og:site_name" content={opengraphSiteName} />
      <meta property="og:title" content={opengraphTitle || title} />
      <meta
        property="og:description"
        content={opengraphDescription || metaDesc}
      />
      <meta property="og:url" content={opengraphUrl || canonical} />
      {opengraphImage?.mediaItemUrl && (
        <meta property="og:image" content={opengraphImage.mediaItemUrl} />
      )}

      {/* Structured Data */}
      {schema?.raw && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema.raw }}
        />
      )}
    </Head>
  );
}
