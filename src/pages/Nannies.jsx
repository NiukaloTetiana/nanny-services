import { useEffect, useState } from "react";

import { getNannies, getNanniesTotal } from "../services/api";
import { Filter, LoadMoreButton, Loader, NanniesList } from "../components";
import { toast } from "react-toastify";

const Nannies = () => {
  const [nannies, setNannies] = useState([]);
  const [page, setPage] = useState(1);
  const [lastIndex, setLastIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);

  useEffect(() => {
    const loadingNannies = async () => {
      try {
        setIsLoading(true);
        const total = await getNanniesTotal();
        const isMoreNannies = page * 3 < total;
        setIsLoadMore(isMoreNannies);

        if (!isMoreNannies) {
          toast.info("You have reached the end of the list of nannies.");
        }

        const nextNannies = await getNannies(lastIndex);

        if (nextNannies.length) {
          setNannies((prev) => [...prev, ...nextNannies]);
          setLastIndex(nextNannies[nextNannies.length - 1].id);
        }
      } catch (error) {
        toast.error(error.message);
      }
      setIsLoading(false);
    };
    loadingNannies();
  }, [page]);

  const onLoadMoreClick = () => {
    setPage((prev) => prev + 1);
  };

  if (isLoading && !nannies.length) return <Loader />;

  return (
    <div className="bg-bgLigtColor min-h-screen">
      <div className="container bg-bgLigtColor pt-[64px] pb-[100px]">
        <Filter />

        <NanniesList nannies={nannies} />

        {isLoadMore ? <LoadMoreButton onClick={onLoadMoreClick} /> : null}
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default Nannies;
