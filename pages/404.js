import Heading from "../WS/components/Typography/Heading";
import Layout from "../WS/Layout";

function Page404({ story, configData }) {
  console.log("STORY", story, configData);
  return (
    <Layout story={story} configData={configData}>
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-neutral">
        <Heading type="h1">404</Heading>
        <Heading type="h2">Page not found</Heading>
      </div>
    </Layout>
  );
}

export default Page404;
