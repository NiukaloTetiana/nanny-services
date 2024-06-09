import { useEffect } from "react";
import { Icon } from "../Icon/Icon";

export const Modal = ({ children, toggleModal }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.code === "Escape") {
        toggleModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [toggleModal]);

  const handleClickOnBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return (
    <div
      className="flex items-center justify-center fixed bg-[#0b0b0b99] backdrop-blur-sm w-full h-full left-0 top-0 z-50"
      onClick={handleClickOnBackdrop}
    >
      <div
        className={`relative bg-[#fbfbfb] p-[34px] lg:p-[64px] rounded-[30px] sm-max:max-w-[300px] max-w-[335px] md:max-w-[696px] lg:max-w-[1184px] max-h-[95%] overflow-hidden`}
      >
        <button
          type="button"
          onClick={toggleModal}
          className="absolute top-[28px] right-[28px] w-[20px] h-[20px]"
        >
          <Icon
            id="close"
            className="stroke-[#11101c] md:size-[18px] lg:size-[20px]"
            size="16"
          />
        </button>
        {children}
      </div>
    </div>
  );
};
