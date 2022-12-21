export const generateSitemap = async (pages) => {
  const fs = require("fs");
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  pages.map((page) => {
    const route = page.params.slug.join("/");
    const url = `${siteUrl}/${route}`;
    return `
        <url>
            <loc>${url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
        </url>`;
  });
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${routes.join("")}
        </urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
};
