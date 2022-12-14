import { storyblokInit, apiPlugin } from "@storyblok/react";
import "../styles/globals.css";
import ArticlePreviewList from "../WS/blocks/ArticlePreviewList";
import Hero from "../WS/blocks/Hero";
import ImageTextSideBySide from "../WS/blocks/ImageTextSideBySide";
import NavigationLink from "../WS/block-components/NavigationLink";
import ProjectPreviewList from "../WS/blocks/ProjectPreviewList";
import TitledGrid from "../WS/blocks/TitledGrid";
import Page from "../WS/blocks/Page";
import SingleContent from "../WS/blocks/SingleContent";

const components = {
  "article-preview-list": ArticlePreviewList,
  hero: Hero,
  "image-text-side-by-side": ImageTextSideBySide,
  "navigation-link": NavigationLink,
  page: Page,
  "project-preview-list": ProjectPreviewList,
  "titled-grid": TitledGrid,
  "single-content": SingleContent,
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
