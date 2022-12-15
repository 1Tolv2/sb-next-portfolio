import { storyblokInit, apiPlugin } from "@storyblok/react";
import "../styles/globals.css";
import ArticlePreviewList from "../WS/block-components/ArticlePreviewList";
import Hero from "../WS/blocks/Hero";
import ImageTextSideBySide from "../WS/blocks/ImageTextSideBySide";
import ProjectPreviewList from "../WS/block-components/ProjectPreviewList";
import TitledGrid from "../WS/blocks/TitledGrid";
import Page from "../WS/blocks/Page";

const components = {
  "article-preview-list": ArticlePreviewList,
  hero: Hero,
  "image-text-side-by-side": ImageTextSideBySide,
  page: Page,
  "project-preview-list": ProjectPreviewList,
  "titled-grid": TitledGrid,
  "sub-page": Page,
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
