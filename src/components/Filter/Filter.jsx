import { useState } from "react";
import { Icon } from "../../components";

export const Filter = () => {
  const [isListVisible, setIsListVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("A to Z");

  const handleListClick = () => {
    setIsListVisible(!isListVisible);
  };

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    setIsListVisible(false);
  };

  return (
    <div>
      <p className="font-medium text-[14px] leading-[1.3] text-[#8a8a89] mb-[8px]">
        Filters
      </p>

      <div
        onClick={handleListClick}
        className="flex items-center justify-between bg-accentColor rounded-[14px] px-[18px] py-[16px] w-[226px] font-medium text-[18px] leading-[1.1] text-lightColor cursor-pointer hover:text-accentColor mb-[8px] hover:bg-lightColor focus:text-accentColor focus:bg-lightColor transition duration-300 group"
      >
        {selectedFilter}
        <Icon
          id="chevron-down"
          className={`stroke-lightColor fill-none group-hover:stroke-accentColor group-focus:stroke-accentColor group-transition group-duration-300 ${
            isListVisible
              ? "rotate-180 group-transition group-duration-300"
              : ""
          }`}
          size="20"
        />
      </div>

      {isListVisible && (
        <ul className="bg-[#fff] rounded-[14px] px-[18px] py-[16px] w-[226px] font-normal text-[18px] leading-[1.1] text-[#11101c4c] custom-list-spacing">
          {[
            "A to Z",
            "Z to A",
            "Less than 10$",
            "Greater than 10$",
            "Popular",
            "Not popular",
            "Show all",
          ].map((filter) => (
            <li
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`cursor-pointer hover:text-darkColor transition duration-300 ${
                filter === selectedFilter ? "text-darkColor" : ""
              }`}
            >
              {filter}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
