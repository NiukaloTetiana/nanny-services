import { useLocalStorage } from "../../hooks";
import { calculateAge } from "../../helpers";

import { Icon, NanniesReviews } from "../../components";
import { useState } from "react";

export const NanniesItem = ({
  reviews,
  avatar_url,
  name,
  about,
  kids_age,
  price_per_hour,
  location,
  rating,
  education,
  experience,
  birthday,
  characters,
}) => {
  const [isLike, setIsLike] = useLocalStorage(`like-${name}`, false);
  const [isShowReviews, setIsShowReviews] = useState(false);
  const age = calculateAge(birthday);

  const toggleLike = () => {
    setIsLike(!isLike);
  };

  return (
    <li className="relative flex gap-[24px] w-full bg-lightColor rounded-[24px] p-[24px] height-[318px] shadow-md">
      <div className="relative flex shrink-0 h-[120px] p-[12px] border-2 border-[#f03f3b33] rounded-[30px]">
        <img
          src={avatar_url}
          alt={name}
          className="rounded-[15px]"
          width="96"
          height="96"
        />

        <div className="absolute top-[9px] right-[14px] w-[14px] h-[14px] rounded-[50%] bg-lightColor before:content-[''] before:block before:absolute before:top-[50%] before:left-[50%] before:w-[10px] before:h-[10px] before:rounded-[50%] before:bg-[#38cd3e] before:transform before:-translate-x-1/2 before:-translate-y-1/2"></div>
      </div>

      <div>
        <div className="flex justify-between mb-[8px] mr-[98px]">
          <p className="font-medium text-[16px] leading-[1.5] text-[#8a8a89]">
            Nanny
          </p>
          <ul className="flex items-center gap-[32px] font-medium text-[16px] leading-[1.5] text-darkColor">
            <li className="flex items-center gap-[5px]">
              <Icon
                id="location"
                size="16"
                className="stroke-darkColor fill-none"
              />
              {location}
            </li>
            <li className="flex items-center gap-[5px]">
              <Icon id="star" size="16" className="fill-[#FFC531]" />
              Rating: {rating}
            </li>
            <li>
              Price / hour:
              <span className="text-[#38CD3E]"> {price_per_hour}$</span>
            </li>
          </ul>
        </div>

        <h3 className="font-medium text-[24px] leading-[1] text-darkColor mb-[24px]">
          {name}
        </h3>

        <ul className="flex flex-wrap gap-[8px] font-medium text-[16px] leading-[1.5] text-[#8a8a89] mb-[24px]">
          <li className="bg-[#f3f3f3] rounded-[24px] px-[16px] py-[8px] height-[40px] shadow-md">
            <p>
              Age: <span className="text-[#11101c] underline">{age}</span>
            </p>
          </li>
          <li className="bg-[#f3f3f3] rounded-[24px] px-[16px] py-[8px] height-[40px] shadow-md">
            <p>
              Experience: <span className="text-[#11101c]">{experience}</span>
            </p>
          </li>
          <li className="bg-[#f3f3f3] rounded-[24px] px-[16px] py-[8px] height-[40px] shadow-md">
            <p>
              Kids Age: <span className="text-[#11101c]">{kids_age}</span>
            </p>
          </li>
          <li className="bg-[#f3f3f3] rounded-[24px] px-[16px] py-[8px] height-[40px] shadow-md">
            <p>
              Characters: <span className="text-[#11101c]">{characters}</span>
            </p>
          </li>
          <li className="bg-[#f3f3f3] rounded-[24px] px-[16px] py-[8px] height-[40px] shadow-md">
            <p>
              Education: <span className="text-[#11101c]">{education}</span>
            </p>
          </li>
        </ul>

        <p
          className={`font-normal text-[16px] leading-[1.25] text-[#11101c7f] ${
            !isShowReviews ? "mb-[14px]" : "mb-[48px]"
          }`}
        >
          {about}
        </p>
        {!isShowReviews && (
          <button
            type="button"
            onClick={setIsShowReviews}
            className="font-medium text-[16px] text-darkColor leading-[1.5] underline lg:hover:text-accentColor focus:text-accentColor active:text-accentColor transition duration-500"
          >
            Read more
          </button>
        )}

        {isShowReviews && <NanniesReviews reviews={reviews} />}
      </div>
      <button className="absolute top-[24px] right-[24px]" onClick={toggleLike}>
        <Icon
          id="like"
          size="26"
          className={` lg:hover:stroke-accentColor focus:stroke-accentColor active:stroke-accentColor transition duration-500 ${
            isLike
              ? "fill-accentColor stroke-accentColor"
              : "fill-none stroke-darkColor"
          }`}
        />
      </button>
    </li>
  );
};
