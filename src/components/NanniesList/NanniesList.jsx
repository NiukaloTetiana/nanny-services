import { NanniesItem } from "./NanniesItem";

export const NanniesList = ({ nannies }) => {
  return (
    <ul className="flex flex-col gap-[32px] mb-[64px]">
      {nannies.map((item, index) => (
        <NanniesItem key={index} {...item} />
      ))}
    </ul>
  );
};
