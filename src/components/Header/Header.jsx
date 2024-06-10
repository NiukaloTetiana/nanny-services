import { useState } from "react";

import { AuthButton, BurgerMenu, Icon, NavBar } from "../../components";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container flex items-center bg-[#f03f3b]">
        <NavBar
          className="flex items-center justify-between text-center w-full"
          classLogo="flex items-center gap-[4px] font-medium text-[24px] leading-[1.2] tracking-[-0.02em] text-[#fbfbfb] py-[10px] inline-block lg:py-0"
          classList="hidden lg:flex gap-[40px] font-normal text-[16px] leading-[1.25] tracking-[-0.01em] text-[#fbfbfb] mr-[92px]"
          classItem="pt-[28px] pb-[40px] inline-block"
        />

        {isMenuOpen && <BurgerMenu toggleMenu={toggleMenu} />}
        <button
          type="button"
          onClick={() => {
            setIsMenuOpen(true);
          }}
          className="outline-none"
        >
          <Icon
            id="burger-menu"
            className="flex justify-between fill-[#fbfbfb] md:w-[46px] md:h-[46px] lg:hidden"
            size="32"
          />
        </button>

        <AuthButton
          className="hidden lg:flex gap-[8px] items-center"
          classLogIn="border border-[#fbfbfb66] bg-transparent rounded-[30px] px-[38px] py-[14px] w-[124px] font-medium text-[16px] text-[#fbfbfb] leading-[125%] tracking-[-0.01em] hover:text-[#504242] hover:border-[#504242] focus:text-[#504242] focus:border-[#504242] transition duration-300"
          classRegistration="border border-[#fbfbfb66] bg-[#f03f3b] rounded-[30px] px-[40px] py-[14px] w-[168px] font-medium text-[16px] leading-[125%] tracking-[-0.01em] text-[#fbfbfb] hover:text-[#f03f3b] hover:bg-[#fbfbfb] focus:text-[#f03f3b] focus:bg-[#fbfbfb] transition duration-300"
        />
      </div>
    </header>
  );
};
