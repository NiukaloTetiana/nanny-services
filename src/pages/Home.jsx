import { NavLink } from "react-router-dom";

import { Icon, MovingWrapper } from "../components";
import hero_mob1x from "../assets/images/hero_mob1x.jpg";
import hero_mob2x from "../assets/images/hero_mob2x.jpg";
import hero_tablet1x from "../assets/images/hero_tablet1x.jpg";
import hero_tablet2x from "../assets/images/hero_tablet2x.jpg";

const Home = () => {
  return (
    <div className="container pb-[32px] bg-accentColor lg:bg-transparent">
      <div className="home-wrapper py-[40px]">
        <h1 className="font-medium text-[40px] leading-[1] tracking-[-0.03em] text-lightColor mb-[28px] sm-max:text-[35px] lg:text-[70px] md:w-[380px] lg:w-[517px]">
          Make Life Easier for the Family:
        </h1>
        <p className="font-normal text-[20px] leading-[1.1] tracking-[-0.02em] text-lightColor mb-[28px] md:mb-[40px] lg:mb-[64px] sm-max:text-[18px] lg:text-[28px]">
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
            className="fill-current group-hover:rotate-[53deg] transition duration-500"
            size="20"
          />
        </NavLink>

        <MovingWrapper />
      </div>
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={`${hero_tablet1x} 1x, ${hero_tablet2x} 2x`}
          width="704"
          height="482"
          loading="lazy"
        />
        <img
          srcSet={`${hero_mob1x} 1x, ${hero_mob2x} 2x`}
          src={hero_mob1x}
          width="380"
          height="335"
          alt="Nanny and child reading a book"
          className="rounded-[30px] sm-max:h-[381px] sm-max:w-[280px] bg-accentColor lg:hidden"
          loading="lazy"
        />
      </picture>
    </div>
  );
};

export default Home;
