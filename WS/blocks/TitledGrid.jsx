import React from "react";
import Heading from "../block-components/Typography/Heading";
import Preamble from "../block-components/Typography/Preamble";
import Text from "../block-components/Typography/Text";
import { StoryblokComponent } from "@storyblok/react";
import Link from "next/link";

const TitledGrid = ({ blok }) => {
  const bgColor = blok?.body?.find(
    (item) => item.component === "section-config"
  )?.background_color;
  const isBgColorDark =
    bgColor !== "neutral" &&
    bgColor !== "white" &&
    typeof bgColor !== "undefined";
  return (
    <div className="w-full flex flex-col lg:justify-between">
      <div className="relative mx-auto h-fit w-3/4 lg:w-full">
        <Preamble isBackgroundDark={isBgColorDark}>{blok?.preamble}</Preamble>
        <div className="-mt-3">
          <Heading type="h2" isBackgroundDark={isBgColorDark}>
            {blok?.title}
          </Heading>
        </div>
        <Text isBackgroundDark={isBgColorDark}>{blok?.text}</Text>
      </div>
      <div className="flex grow justify-center flex-col ">
        {blok?.body?.map((nestedBlok) => {
          return (
            nestedBlok.component !== "section-config" && (
              <StoryblokComponent blok={nestedBlok} />
            )
          );
        })}
      </div>
      {blok?.link_text && (
        <div className="self-end mt-10 mr-14">
          <Link href={blok?.page_link?.cached_url || "/"}>
            <Text type="emphasizeBig" isBackgroundDark={isBgColorDark}>
              {blok?.link_text}
            </Text>
          </Link>
          <span
            className={`h-2 w-12 ml-24
           text-${isBgColorDark ? "neutral" : "primary-light"}`}
          >
            {"-------------------------------------------------->"}
          </span>
        </div>
      )}
    </div>
  );
};

export default TitledGrid;
