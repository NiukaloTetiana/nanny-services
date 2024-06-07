import { useState } from "react";
import { NavLink } from "react-router-dom";

import { Icon } from "../../components";
import { BurgerMenu } from "./BurgerMenu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container bg-[#f03f3b]">
      {isMenuOpen && <BurgerMenu toggleMenu={toggleMenu} />}
      <nav className="flex items-center justify-between text-center">
        <NavLink
          to="/"
          className="font-medium text-[24px] leading-[1.2] tracking-[-0.02em] text-[#fbfbfb]"
        >
          Nanny.Services
        </NavLink>
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

        <div className="hidden lg:flex items-center justify-between">
          <ul className="flex gap-[40px] font-normal text-[16px] leading-[1.25] tracking-[-0.01em] text-[#fbfbfb] mr-[92px]">
            <li className="">
              <NavLink to="/" className="pt-[28px] pb-[40px] inline-block">
                Home
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/nannies"
                className="pt-[28px] pb-[40px] inline-block"
              >
                Nannies
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/favorites"
                className="pt-[28px] pb-[40px] inline-block"
              >
                Favorites
              </NavLink>
            </li>
          </ul>

          <ul className="flex gap-[8px]">
            <li>
              <button
                type="button"
                // onClick={}
                className="border border-[#fbfbfb66] bg-transparent rounded-[30px] px-[37px] py-[14px] w-[124px] h-[48px] font-medium text-[16px] text-[#fbfbfb] leading-[1.25] tracking-[-0.01em] hover:text-[#504242] hover:border-[#504242] focus:text-[#504242] focus:border-[#504242] transition duration-300"
              >
                Log In
              </button>
            </li>
            <li>
              <button
                type="button"
                // onClick={}
                className="border border-none bg-[#f03f3b] rounded-[30px] px-[40px] py-[14px] w-[168px] h-[48px] font-medium text-[16px] leading-[1.25] tracking-[-0.01em] text-[#fbfbfb] hover:text-[#f03f3b] hover:bg-[#fbfbfb] focus:text-[#f03f3b] focus:bg-[#fbfbfb] transition duration-300"
              >
                Registration
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
