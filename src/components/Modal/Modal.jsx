import { useRef } from "react";
import ReactDOM from "react-dom";

import { Icon } from "../../components";

import { useBackdropEffect } from "../../hooks";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ children, toggleModal, className, isOpen }) => {
  const backdropRef = useRef(null);

  useBackdropEffect(isOpen, toggleModal, backdropRef);

  return ReactDOM.createPortal(
    <div
      ref={backdropRef}
      className="flex items-center justify-center fixed bg-[#0b0b0b99] backdrop-blur-sm w-full h-full left-0 top-0 z-50"
    >
      <div
        className={`relative bg-lightColor rounded-[30px] sm-max:max-w-[300px] max-w-[335px] md:max-w-[696px] lg:max-w-[1184px] max-h-[95%] ${className}`}
      >
        <button
          type="button"
          onClick={toggleModal}
          className="absolute top-[28px] right-[28px] w-[20px] h-[20px]"
        >
          <Icon
            id="close"
            className="stroke-darkColor md:size-[18px] lg:size-[20px] hover:stroke-accentColor focus:stroke-accentColor active:stroke-accentColor transition duration-300"
            size="16"
          />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
