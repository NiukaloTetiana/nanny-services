import { useState } from "react";
import { useLocation } from "react-router-dom";

import {
  AuthButton,
  BurgerMenu,
  Icon,
  NavBar,
  UserBar,
} from "../../components";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${isHomePage ? "pt-[32px]" : ""}`}>
      <div
        className={`container flex items-center ${
          isHomePage ? "bg-transparent home-line" : "bg-accentColor"
        }`}
      >
        <NavBar
          className="flex items-center justify-between text-center w-full"
          classLogo="flex items-center gap-[4px] font-medium text-[20px] md:text-[24px] leading-[1.2] tracking-[-0.02em] text-lightColor py-[10px] inline-block lg:py-0"
          classList="hidden lg:flex gap-[40px] font-normal text-[16px] leading-[1.25] tracking-[-0.01em] text-lightColor mr-[92px]"
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
            className=" fill-lightColor md:w-[46px] md:h-[46px]"
            size="32"
          />
        </button>
        <AuthButton
          className="hidden lg:flex gap-[8px] items-center"
          classLogIn="border border-[#fbfbfb66] bg-transparent rounded-[30px] px-[38px] py-[14px] w-[124px] font-medium text-[16px] text-lightColor leading-[125%] tracking-[-0.01em] primary-btn-hover"
          classRegistration={`bg-accentColor rounded-[30px] px-[40px] py-[14px] w-[168px] font-medium text-[16px] leading-[125%] tracking-[-0.01em] text-lightColor hover:text-accentColor hover:bg-lightColor focus:text-accentColor focus:bg-lightColor transition duration-500 
          ${!isHomePage ? "border border-[#fbfbfb66]" : "border-none"}`}
        />

        {/* <UserBar /> */}
      </div>
    </header>
  );
};
