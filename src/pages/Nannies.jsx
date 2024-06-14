import { Filter, LoadMoreButton, NanniesList } from "../components";
import nannies from "../assets/babysitters.json";

const Nannies = () => {
  return (
    <div className="bg-[#F3F3F3]">
      <div className="container bg-[#F3F3F3] pt-[64px] pb-[100px]">
        <Filter />

        <NanniesList nannies={nannies} />
        <div className="w-full text-center">
          <LoadMoreButton />
        </div>
      </div>
    </div>
  );
};

export default Nannies;
