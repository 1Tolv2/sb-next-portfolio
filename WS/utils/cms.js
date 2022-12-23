import { getStoryblokApi } from "@storyblok/react";
import { generateSitemap } from "./sitemap";

class StoryblokUtils {
  static getDefaultSBParams() {
    return {
      version: process.env.NODE_ENV !== "development" ? "draft" : "published",
      resolve_relations: [
        "project-preview-list.projects",
        "article-preview-list.articles",
      ],
    };
  }
  static async getConfigData() {
    const storyblokApi = getStoryblokApi();
    const sbParams = this.getDefaultSBParams();
    return await storyblokApi.get(`cdn/stories`, {
      ...sbParams,
      starts_with: "config",
    });
  }

  static async getNestedContent(slug) {
    const storyblokApi = getStoryblokApi();
    const sbParams = this.getDefaultSBParams();
    const { data } = await storyblokApi.get(`cdn/stories`, {
      ...sbParams,
      starts_with: slug,
      is_startpage: 0,
    });
    return data;
  }

  static async injectNestedContent(slug, storyData, contentData) {
    const componentName = `${slug.substr(0, slug.length - 1)}-preview-list`;

    storyData.story.content.body
      .find((blok) => blok.component === "titled-grid")
      .body.find((item) => item.component === componentName)[slug] =
      contentData.stories;
    return storyData;
  }

  static async getStaticPaths() {
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

  static async getStaticProps(params) {
    let slug = params.slug ? params.slug.join("/") : "home";

    let sbParams = this.getDefaultSBParams();

    const storyblokApi = getStoryblokApi();
    let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

    const configData = await this.getConfigData();

    if (slug === "projects" || slug === "articles") {
      const contentData = await this.getNestedContent(slug);
      data = await this.injectNestedContent(slug, data, contentData);
    }
    return {
      props: {
        story: data ? data.story : false,
        configData: configData ? configData.data.stories[0] : false,
        key: data ? data.story.id : false,
      },
    };
  }
}

export { StoryblokUtils };
