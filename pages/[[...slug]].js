import { useState, createContext } from "react";
import Head from "next/head";
import { useStoryblokState, StoryblokComponent } from "@storyblok/react";
import Layout from "../WS/Layout";
import CoverModal from "../WS/components/CoverModal";
import { StoryblokUtils } from "../WS/utils/cms";

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
  const data = await StoryblokUtils.getStaticPaths();
  return data;
}

export async function getStaticProps({ params }) {
  if (!params) {
    params = {
      slug: ["home"],
    };
  }
  const data = await StoryblokUtils.getStaticProps(params);
  return data;
}
