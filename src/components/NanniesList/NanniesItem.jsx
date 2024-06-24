import { useState } from "react";

import { Icon, NanniesReviews } from "../../components";

import { calculateAge } from "../../helpers";
import { useCurrentUser } from "../../hooks";

export const NanniesItem = ({
  id,
  index,
  favoritesList,
  toggleLike,
  handleClickLike,
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
  const { user } = useCurrentUser();
  const [isShowReviews, setIsShowReviews] = useState(false);
  const age = calculateAge(birthday);

  const capitalize = (word) => {
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };

  const capitalizedCharacters = characters.map(capitalize).join(", ");

  return (
    <li className="relative flex flex-col justify-center items-center md:items-start md:flex-row gap-[50px] md:gap-[24px] w-full bg-lightColor rounded-[24px] p-[24px] height-[318px] shadow-md transition-transform transform hover:scale-105 focus:scale-105">
      <div className="relative flex shrink-0 h-[96px] w-[96px] md:h-[120px] md:w-[120px] p-[12px] border-2 border-secondBorderColor rounded-[30px]">
        <img
          src={avatar_url}
          alt={name}
          className="rounded-[15px] md:w-[96px] md:h-[96px]"
          width="72"
          height="72"
        />

        <div className="absolute top-[9px] right-[14px] w-[12px] h-[12px] md:w-[14px] md:h-[14px] rounded-[50%] bg-lightColor before:content-[''] before:block before:absolute before:top-[50%] before:left-[50%] before:w-[8px] before:h-[8px] md:before:w-[10px] md:before:h-[10px] before:rounded-[50%] before:bg-[#38cd3e] before:transform before:-translate-x-1/2 before:-translate-y-1/2"></div>
      </div>

      <div>
        <div className="flex justify-end md:justify-between md:mb-[12px] lg:mb-[8px] md:mr-[45px] lg:mr-[98px]">
          <p className="absolute top-[110px] left-[24px] md:static font-medium leading-[1.5] text-secondTextColor text-[14px] md:text-[14px] lg:text-[16px]">
            Nanny
          </p>
          <ul className="flex flex-col md:flex-row md:items-center gap-[2px] md:gap-[15px] lg:gap-[32px] mb-[15px] md:mb-0 font-medium text-[14px] md:text-[14px] lg:text-[16px] leading-[1.5] text-darkColor">
            <li className="flex items-center gap-[5px]">
              <Icon
                id="location"
                size="14"
                className="stroke-darkColor fill-none lg:size-[16px]"
              />
              {location}
            </li>
            <li className="flex items-center gap-[5px]">
              <Icon
                id="star"
                size="14"
                className="fill-[#FFC531] lg:size-[16px]"
              />
              Rating: {rating}
            </li>
            <li>
              Price / hour:
              <span className="text-[#38CD3E]"> {price_per_hour}$</span>
            </li>
          </ul>
        </div>

        <h3 className="absolute top-[135px] left-[24px] md:static font-medium text-[18px] md:text-[20px] lg:text-[24px] leading-[1] text-darkColor md:mb-[24px]">
          {name}
        </h3>

        <ul className="flex flex-col md:flex-row md:flex-wrap gap-[8px] font-medium text-[14px] md:text-[16px] leading-[1.5] text-secondTextColor mb-[24px]">
          {[
            { title: "Age:", value: age },
            { title: "Experience:", value: experience },
            { title: "Kids Age:", value: kids_age },
            { title: "Characters:", value: capitalizedCharacters },
            { title: "Education:", value: education },
          ].map(({ title, value }, index) => (
            <li
              key={index}
              className="inline-block bg-bgLigtColor rounded-[20px] md:rounded-[24px] px-[16px] py-[8px] md:px-[10px] md:py-[5px] lg:px-[16px] lg:py-[8px] shadow-md"
            >
              <p>
                {title}{" "}
                <span
                  className={`text-darkColor ${
                    title === "Age:" ? "underline" : ""
                  }`}
                >
                  {value}
                </span>
              </p>
            </li>
          ))}
        </ul>

        <p
          className={`font-normal text-[16px] leading-[1.25] text-textColor ${
            !isShowReviews ? "mb-[14px]" : "mb-[30px] lg:mb-[48px]"
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

        {isShowReviews && (
          <NanniesReviews
            reviews={reviews}
            avatar_url={avatar_url}
            name={name}
          />
        )}
      </div>
      <button
        className="absolute top-[24px] right-[24px]"
        onClick={() => {
          toggleLike(id || index);
          handleClickLike && handleClickLike(id);
        }}
      >
        <Icon
          id="like"
          size="26"
          className={` lg:hover:stroke-accentColor focus:stroke-accentColor active:stroke-accentColor transition duration-500 ${
            favoritesList.includes(id || index) && user
              ? "fill-accentColor stroke-accentColor"
              : "fill-none stroke-darkColor"
          }`}
        />
      </button>
    </li>
  );
};
