import { NavLink } from "react-router-dom";

import { BgImageWrapper, Icon } from "../components";

const Home = () => {
  return (
    <div className="container pb-[32px]">
      <div className="home-wrapper relative">
        <h1 className="font-medium text-[40px] leading-[1] tracking-[-0.03em] text-lightColor mb-[28px] sm-max:text-[35px] lg:text-[70px] lg:w-[517px]">
          Make Life Easier for the Family:
        </h1>
        <p className="font-normal text-[20px] leading-[1.1] tracking-[-0.02em] text-lightColor mb-[64px] sm-max:text-[18px] lg:text-[28px]">
          Find Babysitters Online for All Occasions
        </p>
        <NavLink
          to="/nannies"
          className="flex gap-[18px] justify-center items-center border border-[#fbfbfb66] bg-transparent rounded-[30px] py-[18px] w-[230px] font-medium text-[20px] text-lightColor
      leading-[1.2] tracking-[-0.01em] primary-btn-hover group"
        >
          Get started
          <Icon
            id="arrow-up"
            className="fill-current group-hover:rotate-[53deg] group-transition group-duration-300"
            size="20"
          />
        </NavLink>

        <div className="absolute bottom-[50px] right-[-50px]">
          <BgImageWrapper />
        </div>
      </div>
    </div>
  );
};

export default Home;
