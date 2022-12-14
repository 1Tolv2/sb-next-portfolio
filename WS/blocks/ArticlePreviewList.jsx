import React from "react";
import Heading from "../block-components/Typography/Heading";
import Text from "../block-components/Typography/Text";
import Link from "next/link";

const ArticlePreviewList = ({ blok }) => {
  const arrayOfThree = ["", "", ""];
  return (
    <div className="grid lg:grid-cols-3 lg:grid-rows-1 w-3/4 lg:w-auto mt-5 md:mt-0 mx-auto -mb-16 gap-x-5 xl:gap-x-24 items-end">
      {arrayOfThree.map((article) => {
        return (
          <div className="relative h-fit w-full lg:mt-20">
            <div>
              <img
                className="w-full"
                src="clement-helardot-95YRwf6CNw8-unsplash.jpg"
              />
            </div>
            <div className="relative bottom-20 w-11/12 mx-auto bg-neutral px-3 lg:px-5 pt-4 lg:pt-11 pb-3 lg:pb-7">
              <Heading type="h3">CSS hjälpmedel för nybörjare</Heading>
              <Text>
                Lorem ipsum dolor sit amet, ei postea iuvaret cum, dicam graecis
                eos no. Te per populo nonumes. Tollit voluptua eu duo, nec quas
                aliquando interpretaris eu.
              </Text>
              <div className="flex my-3 ">
                <Link className="flex items-center h-fit ml-1 mt-5" href="/">
                  <Text type="emphasize">Read article</Text>
                  <img
                    className="ml-2 h-4 lg:h-6"
                    src="/external_link_icon.svg"
                  />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ArticlePreviewList;
