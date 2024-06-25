import { useRef } from "react";

import { AuthButton, Icon, NavBar, UserBar } from "../../components";

import { useBackdropEffect, useCurrentUser } from "../../hooks";

export const BurgerMenu = ({ toggleMenu, classBackdrop, classMenu }) => {
  const backdropRef = useRef(null);
  const { user } = useCurrentUser();

  useBackdropEffect(toggleMenu, backdropRef);

  return (
    <div
      ref={backdropRef}
      className={`${classBackdrop} fixed bg-black backdrop-blur-sm bg-opacity-40 w-full h-full left-0 top-0 z-50 lg:hidden`}
    >
      <div
        className={`${classMenu} relative flex flex-col justify-start items-center gap-[45px] bg-accentColor px-[24px] py-[50px] w-[390px] sm-max:w-[300px] md:w-[653px] ml-auto h-full transition duration-500`}
      >
        <button
          type="button"
          className="flex justify-center items-center absolute top-[24px] right-[24px] outline-none group"
          onClick={toggleMenu}
        >
          <Icon
            id="close"
            size="20"
            className="stroke-lightColor group-focus:fill-opacityDarkColor transition duration-300 md:size-[30px]"
          />
        </button>

        <NavBar
          toggleMenu={toggleMenu}
          classLogo="flex items-center gap-[5px] font-medium text-[24px] leading-[1.2] tracking-[-0.02em] text-lightColor md:text-[28px] mb-[45px]"
          classList="flex flex-col gap-[30px] font-normal text-[18px] text-center leading-[1.25] tracking-[-0.01em] text-lightColor md:text-[24px]"
        />
        {!user ? (
          <AuthButton
            toggleMenu={toggleMenu}
            className="flex flex-col justify-center items-center w-full gap-[10px] md:gap-[12px]"
            classLogIn="border border-opacityDarkColor bg-transparent rounded-[30px] px-[38px] py-[14px] w-[185px] md:w-[235px] font-medium text-[16px] md:text-[20px] text-lightColor leading-[125%] tracking-[-0.01em] primary-btn-hover"
            classRegistration="border border-opacityDarkColor bg-transparent rounded-[30px] px-[38px] py-[14px] w-[185px] md:w-[235px] font-medium text-[16px] md:text-[20px] leading-[125%] tracking-[-0.01em] text-lightColor primary-btn-hover"
          />
        ) : (
          <UserBar className="flex" toggleMenu={toggleMenu} />
        )}
      </div>
    </div>
  );
};
