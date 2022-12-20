import React from "react";
import RichTextRenderer from "../components/RichTextRenderer";
import Heading from "../components/Typography/Heading";
import Text from "../components/Typography/Text";

const formatDate = (date) => {
  date = new Date(date);
  const month = date.getMonth() + 1;
  const formattedMonth = month < 10 ? "0" + month : month;
  const year = date.getFullYear();
  return `${formattedMonth}/${year}`;
};

const CvItem = ({ blok }) => {
  const renderDate = (startDate, endDate) => {
    return (
      <Text
        type="emphasize"
        align={blok?.only_show_start_year ? "right" : "left"}
      >{`${
        blok?.only_show_start_year
          ? new Date(startDate).getFullYear()
          : formatDate(startDate)
      }${
        blok?.is_current_occupation
          ? " - Current"
          : blok?.only_show_start_year
          ? ""
          : " - " + formatDate(endDate)
      }`}</Text>
    );
  };
  return (
    <>
      <div className="flex flex-cols justify-between items-center w-full mb-4 print:mb-0">
        <div className="w-auto md:w-3/4">
          <Heading type="h4">{`${blok?.title}, ${blok?.company}`}</Heading>
          <div className="pl-4 sm:pl-14">
            <RichTextRenderer content={blok?.description} />
            {blok?.tools?.length > 0 && (
              <Text>
                <span className="font-bold">{"Tools:  "}</span>
                {blok?.tools?.map(
                  (tool, index) =>
                    tool + (index === blok.tools.length - 1 ? "" : ", ")
                )}
              </Text>
            )}
          </div>
        </div>
        <span className="self-start mt-2 min-w-[65px] max-w-[70px] md:max-w-none md:min-w-none">
          {renderDate(blok?.start_date, blok?.end_date)}
        </span>
      </div>
    </>
  );
};

export default CvItem;
