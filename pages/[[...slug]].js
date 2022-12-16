import { useState, createContext } from "react";
import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent,
} from "@storyblok/react";
import Layout from "../WS/Layout";
import CoverModal from "../WS/components/CoverModal";

const ModalContext = createContext();

export default function Page({ story, configData }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  story = useStoryblokState(story);

  return (
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
    if (links[linkKey].is_folder || hiddenSlugs.includes(links[linkKey].slug)) {
      return;
    } else if (links[linkKey].slug === "home") {
      paths.push({ params: { slug: [""] } });
    } else {
      const slug = links[linkKey].slug;
      let splittedSlug = slug.split("/");
      paths.push({ params: { slug: splittedSlug } });
    }
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let slug = params.slug ? params.slug.join("/") : "home";
  let sbParams = {
    version: "draft",
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
