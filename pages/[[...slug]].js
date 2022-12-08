import { getStoryblokApi } from "@storyblok/react"

export default function Page() {
return <div>Hello World!</div>
}

export async function getStaticPaths() {
    const storyblokApi = getStoryblokApi();
    
  let {data}  = await storyblokApi.get("cdn/links/")
    console.log("DATA", data)
    return {
        paths: [{params: {slug: "home"}}],
        fallback: false
    }
}