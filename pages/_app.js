import { storyblokInit, apiPlugin } from "@storyblok/react";
import "../styles/globals.css";
import ArticlePreview from "../WS/blocks/ArticlePreview";
import Hero from "../WS/blocks/Hero";
import ImageTextSideBySide from "../WS/blocks/ImageTextSideBySide";
import NavigationLink from "../WS/block-components/NavigationLink";
import ProjectPreview from "../WS/blocks/ProjectPreview";
import TitledGrid from "../WS/blocks/TitledGrid";
import Page from "../WS/blocks/Page";
import PreviewSection from "../WS/blocks/PreviewSection";

const components = {
  "article-preview": ArticlePreview,
  hero: Hero,
  "image-text-side-by-side": ImageTextSideBySide,
  "navigation-link": NavigationLink,
  page: Page,
  "project-preview": ProjectPreview,
  "titled-grid": TitledGrid,
  "preview-section": PreviewSection,
};

storyblokInit({
  accessToken: process.env.NEXT_APP_SB_TOKEN,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
