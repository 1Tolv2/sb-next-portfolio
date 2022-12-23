import { useState, createContext } from "react";
import Head from "next/head";
import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent,
} from "@storyblok/react";
import Layout from "../WS/Layout";
import CoverModal from "../WS/components/CoverModal";
import { generateSitemap } from "../WS/utils/sitemap";

const ModalContext = createContext();

export default function Page({ story, configData }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  story = useStoryblokState(story);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Full stack developer portfolio"
        ></meta>
        <title>Sofia Johnsson S.</title>
      </Head>
      <ModalContext.Provider value={{ isModalVisible, setIsModalVisible }}>
        <Layout story={story} configData={configData}>
          {isModalVisible && (
            <CoverModal
              closeModal={() => setIsModalVisible(false)}
              blok={configData?.content?.modal}
            />
          )}
          <StoryblokComponent blok={story.content} />
        </Layout>
      </ModalContext.Provider>
    </>
  );
}

export { ModalContext };

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();

  let { data } = await storyblokApi.get("cdn/links");
  const { links } = data;
  const hiddenSlugs = ["config"];

  let paths = [];
  Object.keys(links).forEach((linkKey) => {
    const slug = data.links[linkKey].slug;
    if (links[linkKey].is_folder || hiddenSlugs.includes(slug)) return;

    if (slug === "home") {
      paths.push({ params: { slug: [""] } });
    } else if (/^projects\/(.+)/.test(slug)) {
      return;
    } else {
      let splittedSlug = slug.split("/");
      paths.push({ params: { slug: splittedSlug } });
    }
  });

  generateSitemap(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let slug = params.slug ? params.slug.join("/") : "home";

  let sbParams = {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
    resolve_relations: [
      "project-preview-list.projects",
      "article-preview-list.articles",
    ],
  };

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  const configData = await storyblokApi.get(`cdn/stories`, {
    starts_with: "config",
  });

  async function getContentData(slug) {
    const { data } = await storyblokApi.get(`cdn/stories`, {
      ...sbParams,
      starts_with: slug,
      is_startpage: 0,
    });
    return data;
  }
  if (
    (slug === "projects" || slug === "articles") &&
    data?.story?.content?.body
      ?.find((item) => item?.component === "titled-grid")
      ?.body?.find(
        (item) =>
          item?.component === `${slug.substr(0, slug.length - 1)}-preview-list`
      )?.[slug]?.length === 0
  ) {
    const contentData = await getContentData(slug);
    data.story.content.body
      .find((item) => item.component === "titled-grid")
      .body.find(
        (item) =>
          item.component === `${slug.substr(0, slug.length - 1)}-preview-list`
      )[slug] = contentData ? contentData?.stories : [];
  }
  return {
    props: {
      story: data ? data.story : false,
      configData: configData ? configData.data.stories[0] : false,
      key: data ? data.story.id : false,
    },
  };
}
