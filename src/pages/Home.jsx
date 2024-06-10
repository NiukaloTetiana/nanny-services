import { NavLink } from "react-router-dom";

import { BgImageWrapper, Icon } from "../components";

const Home = () => {
  return (
    <div className="bg-[#f03f3b] flex">
      <div className="py-[163px] pl-[96px] pr-[64px] w-1/2">
        <h1 className="font-medium text-[40px] leading-[1] tracking-[-0.03em] text-[#fbfbfb] mb-[28px] sm-max:text-[35px] lg:text-[70px] lg:w-[517px]">
          Make Life Easier for the Family:
        </h1>
        <p className="font-normal text-[20px] leading-[1.1] tracking-[-0.02em] text-[#fbfbfb] mb-[64px] sm-max:text-[18px] lg:text-[28px]">
          Find Babysitters Online for All Occasions
        </p>
        <NavLink
          to="/nannies"
          className="flex gap-[18px] justify-center items-center border border-[#fbfbfb66] bg-transparent rounded-[30px] py-[18px] w-[230px] font-medium text-[20px] text-[#fbfbfb]
      leading-[1.2] tracking-[-0.01em] hover:text-[#504242]
      hover:border-[#504242] focus:text-[#504242] focus:border-[#504242]
      transition duration-300 group"
        >
          Get started
          <Icon
            id="arrow-up"
            className="fill-current group-hover:rotate-[53deg]"
            size="20"
          />
        </NavLink>
      </div>

      <div className="w-1/2">
        <BgImageWrapper />
      </div>
    </div>
  );
};

export default Home;
