import { useState } from "react";
import { modal, modalBackground } from "./modal.module.scss";

export const Modal = ({ setIsModalOpen, isModalOpen, children, isDark }) => {
  if (isModalOpen == true) {
    return (
      <>
        <div
          className={modalBackground}
          onClick={() => setIsModalOpen(false)}
        ></div>
        <section className={modal}>
          <button onClick={() => setIsModalOpen(false)}>Close</button>
          {children}
        </section>
      </>
    );
  } else return <></>;
};
