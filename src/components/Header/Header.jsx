import { useState } from "react";
import { useLocation } from "react-router-dom";

import {
  AuthButton,
  BurgerMenu,
  Icon,
  NavBar,
  UserBar,
} from "../../components";

import { useCurrentUser } from "../../hooks";

export const Header = () => {
  const { user } = useCurrentUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`${
        isHomePage
          ? "lg:pt-[32px] bg-accentColor lg:bg-transparent"
          : "bg-accentColor"
      }`}
    >
      <div
        className={`container flex justify-between items-center ${
          isHomePage ? "py-[15px] lg:py-0 home-line" : "py-[15px] lg:py-0"
        }`}
      >
        <NavBar
          className={`flex  ${
            !user ? "gap-[487px]" : "gap-[305px]"
          } items-center text-center`}
          classLogo="flex items-center gap-[4px] font-medium text-[20px] md:text-[24px] leading-[1.2] tracking-[-0.02em] text-lightColor inline-block lg:py-0"
          classList="hidden lg:flex gap-[40px] font-normal text-[16px] leading-[1.25] tracking-[-0.01em] text-lightColor"
          classItem="pt-[28px] pb-[40px] inline-block"
        />

        {isMenuOpen && <BurgerMenu toggleMenu={toggleMenu} />}
        <button
          type="button"
          onClick={() => {
            setIsMenuOpen(true);
          }}
          className="outline-none flex justify-between lg:hidden"
        >
          <Icon
            id="burger-menu"
            className=" stroke-lightColor md:w-[46px] md:h-[46px]"
            size="32"
          />
        </button>
        {!user ? (
          <AuthButton
            className="hidden lg:flex gap-[8px] items-center"
            classLogIn="border border-opacityDarkColor bg-transparent rounded-[30px] px-[38px] py-[14px] w-[124px] font-medium text-[16px] text-lightColor leading-[1.25] tracking-[-0.01em] primary-btn-hover"
            classRegistration={`bg-accentColor rounded-[30px] px-[40px] py-[14px] w-[168px] font-medium text-[16px] leading-[1.25] tracking-[-0.01em] text-lightColor hover:text-accentColor hover:bg-lightColor focus:text-accentColor focus:bg-lightColor transition duration-500 
          ${!isHomePage ? "border border-opacityDarkColor" : "border-none"}`}
          />
        ) : (
          <UserBar className="hidden lg:flex" />
        )}
      </div>
    </header>
  );
};
