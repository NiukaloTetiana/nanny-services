import { useEffect, useState } from "react";

import { getNannies } from "../services/api";
import { Filter, LoadMoreButton, Loader, NanniesList } from "../components";
import { toast } from "react-toastify";

const Nannies = () => {
  const [nannies, setNannies] = useState([]);

  useEffect(() => {
    getNannies()
      .then((data) => {
        setNannies(data);
      })
      .catch((error) => toast.error(error.message));
  }, []);

  if (!nannies.length) return <Loader />;
  return (
    <div className="bg-bgLigtColor">
      <div className="container bg-bgLigtColor pt-[64px] pb-[100px]">
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
