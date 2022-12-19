import React from "react";
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
  console.log("DESCR", blok?.description);
  const renderDate = (startDate, endDate) => {
    return `${
      blok?.only_show_start_year
        ? new Date(startDate).getFullYear()
        : formatDate(startDate)
    } - ${blok?.is_current_occupation ? "Current" : formatDate(endDate)}`;
  };
  return (
    <>
      <div className="flex flex-cols justify-between items-center w-full">
        <Heading type="h4">{`${blok?.title}, ${blok?.company}`}</Heading>
        <span>{renderDate(blok?.start_date, blok?.end_date)}</span>
      </div>
      <Text>{""}</Text>
    </>
  );
};

export default CvItem;
