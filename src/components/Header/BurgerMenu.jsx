import { useEffect } from "react";

import { AuthButton, Icon, NavBar } from "../../components";

export const BurgerMenu = ({ toggleMenu }) => {
  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      toggleMenu();
    }
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.code === "Escape") {
        toggleMenu();
      }
    };
    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [toggleMenu]);

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed bg-black backdrop-blur-sm bg-opacity-40 w-full h-full left-0 top-0 z-50 lg:hidden"
    >
      <div className="relative flex flex-col justify-start items-center gap-[45px] bg-[#f03f3b] px-[24px] py-[50px] w-[390px] sm-max:w-[300px] md:w-[653px] ml-auto h-full">
        <button
          type="button"
          className="flex justify-center items-center absolute top-[24px] right-[24px] outline-none group"
          onClick={toggleMenu}
        >
          <Icon
            id="close"
            size="20"
            className="stroke-[#fbfbfb] group-focus:fill-[#2355cc] transition duration-300 md:size-[30px]"
          />
        </button>

        <NavBar
          classLogo="flex items-center gap-[5px] font-medium text-[24px] leading-[1.2] tracking-[-0.02em] text-[#fbfbfb] md:text-[28px] mb-[45px]"
          classList="flex flex-col gap-[30px] font-normal text-[18px] text-center leading-[1.25] tracking-[-0.01em] text-[#fbfbfb] md:text-[24px]"
        />

        <AuthButton
          className="flex flex-col justify-center items-center w-full gap-[10px] md:gap-[12px]"
          classLogIn="border border-[#fbfbfb66] bg-transparent rounded-[30px] px-[37px] py-[14px] w-[185px] md:w-[235px] h-[48px] md:h-[52px] font-medium text-[16px] md:text-[20px] text-[#fbfbfb] leading-[1.25] tracking-[-0.01em] hover:text-[#504242] hover:border-[#504242] focus:text-[#504242] focus:border-[#504242] transition duration-300"
          classRegistration="border border-[#fbfbfb66] bg-transparent rounded-[30px] px-[40px] py-[14px] w-[185px] md:w-[235px] h-[48px] md:h-[52px] font-medium text-[16px] md:text-[20px] leading-[1.25] tracking-[-0.01em] text-[#fbfbfb] hover:text-[#f03f3b] hover:bg-[#fbfbfb] focus:text-[#f03f3b] focus:bg-[#fbfbfb] transition duration-300"
        />
      </div>
    </div>
  );
};
