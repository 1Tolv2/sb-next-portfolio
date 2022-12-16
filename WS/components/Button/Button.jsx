import React, { useContext } from "react";
import { ModalContext } from "../../../pages/[[...slug]]";

const Button = ({ type, children }) => {
  const { setIsModalVisible } = useContext(ModalContext);

  return type === "ghost" ? (
    <button className="" onClick={() => setIsModalVisible(true)}>
      {children}
    </button>
  ) : (
    <button
      className="flex justify-center items-center text-neutral bg-primary-main w-fit px-14 py-3 rounded"
      onClick={() => setIsModalVisible(true)}
    >
      {children}
    </button>
  );
};

export default Button;
