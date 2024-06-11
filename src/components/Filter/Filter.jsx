import { useState, useEffect, useRef } from "react";
import { Icon } from "../../components";

export const Filter = () => {
  const [isListVisible, setIsListVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("A to Z");
  const filterRef = useRef(null);

  const handleListClick = () => {
    setIsListVisible(!isListVisible);
  };

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    setIsListVisible(false);
  };

  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setIsListVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mb-[32px] relative" ref={filterRef}>
      <p className="font-medium text-[14px] leading-[1.3] text-[#8a8a89] mb-[8px]">
        Filters
      </p>

      <div
        onClick={handleListClick}
        className="flex items-center justify-between bg-accentColor rounded-[14px] px-[18px] py-[16px] w-[180px] md:w-[226px] font-medium text-[16px] md:text-[18px] leading-[1.1] text-lightColor cursor-pointer hover:text-accentColor hover:bg-lightColor focus:text-accentColor focus:bg-lightColor transition duration-300 group"
      >
        {selectedFilter}
        <Icon
          id="chevron-down"
          className={`stroke-lightColor fill-none group-hover:stroke-accentColor group-focus:stroke-accentColor transition duration-300 ${
            isListVisible ? "rotate-180" : ""
          }`}
          size="20"
        />
      </div>

      {isListVisible && (
        <ul className="absolute top-[88px] left-0 bg-[#fff] rounded-[14px] px-[18px] py-[16px] w-[180px] md:w-[226px] font-normal text-[16px] md:text-[18px] leading-[1.1] text-[#11101c4c] custom-list-spacing z-[2] shadow-md">
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
