import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent,
} from "@storyblok/react";
import Layout from "../WS/Layout";

export default function Page({ story, configData }) {
  story = useStoryblokState(story);
  return (
    <Layout story={story} configData={configData}>
      <StoryblokComponent blok={story.content} />
    </Layout>
  );
}

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
  };

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  const configData = await storyblokApi.get(`cdn/stories`, {
    starts_with: "config",
  });
  return {
    props: {
      story: data ? data.story : false,
      configData: configData ? configData.data.stories[0] : false,
      key: data ? data.story.id : false,
    },
  };
}
