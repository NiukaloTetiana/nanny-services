import { NanniesItem } from "./NanniesItem";

import { useLocalStorage } from "../../hooks";

export const NanniesList = ({ nannies, handleClickLike }) => {
  const { favoritesList, toggleLike } = useLocalStorage();

  return (
    <ul className="flex flex-col gap-[32px] mb-[64px]">
      {nannies.map((item, index) => (
        <NanniesItem
          key={index}
          {...item}
          {...{ favoritesList, toggleLike, index, handleClickLike }}
        />
      ))}
    </ul>
  );
};
