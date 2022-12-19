import { storyblokInit, apiPlugin } from "@storyblok/react";
import "../styles/globals.css";
import Hero from "../WS/blocks/Hero";
import ImageTextSideBySide from "../WS/blocks/ImageTextSideBySide";
import TitledGrid from "../WS/blocks/TitledGrid";
import Page from "../WS/blocks/Page";

import ArticlePreviewList from "../WS/block-components/ArticlePreviewList";
import ProjectPreviewList from "../WS/block-components/ProjectPreviewList";
import Avatar from "../WS/block-components/Avatar";
import ImageWithBackground from "../WS/block-components/ImageWithBackground";
import PersonalLetter from "../WS/block-components/PersonalLetter";
import CvItem from "../WS/block-components/CvItem";
import CvTab from "../WS/block-components/CvTab";

const components = {
  "article-preview-list": ArticlePreviewList,
  hero: Hero,
  "image-text-side-by-side": ImageTextSideBySide,
  page: Page,
  "project-preview-list": ProjectPreviewList,
  "titled-grid": TitledGrid,
  "sub-page": Page,
  avatar: Avatar,
  "image-with-background": ImageWithBackground,
  cv: CvTab,
  "personal-letter": PersonalLetter,
  "cv-item": CvItem,
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
