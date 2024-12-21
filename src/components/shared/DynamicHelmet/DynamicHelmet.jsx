import { Helmet } from "react-helmet-async";

export default function DynamicHelmet({ title, desc, url }) {
  return (
    <Helmet>
      <title>{title}</title>
      <link
        rel="canonical"
        href={url || "https://sollar-cellz-website.vercel.app/"}
      />
      <meta name="description" content={desc} />
    </Helmet>
  );
}
