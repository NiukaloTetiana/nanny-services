import { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";

import { Filter, LoadMoreButton, Loader, NanniesList } from "../components";
import { useNanniesFilter } from "../hooks";
import { getNannies, getNanniesTotal } from "../services";

const Nannies = () => {
  const [nannies, setNannies] = useState([]);
  const [page, setPage] = useState(1);
  const [lastIndex, setLastIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("Show all");

  const { filteredNannies, filterNannies } = useNanniesFilter(nannies);

  const loadNannies = useCallback(async () => {
    try {
      setIsLoading(true);
      const total = await getNanniesTotal();
      setIsLoadMore(page * 3 < total);

      if (page * 3 >= total) {
        toast.info("You have reached the end of the list of nannies.");
      }

      const newNannies = await getNannies(lastIndex);

      if (newNannies.length) {
        setNannies((prev) => [...prev, ...newNannies]);
        setLastIndex(newNannies[newNannies.length - 1].id);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [page, lastIndex]);

  useEffect(() => {
    loadNannies();
  }, [page]);

  useEffect(() => {
    filterNannies(currentFilter);
  }, [currentFilter, filterNannies, nannies]);

  const onLoadMoreClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  if (isLoading && !nannies.length) {
    return <Loader />;
  }

  return (
    <div className="bg-bgLightColor min-h-screen">
      <div className="container bg-bgLightColor pt-[64px] pb-[100px]">
        <Filter filterFunction={handleFilterChange} />
        {filteredNannies.length ? (
          <NanniesList nannies={filteredNannies} />
        ) : (
          <div className="relative w-full h-[480px] sm-max:h-[400px] md:min-h-screen bg-bgLigtColor bg-[url('https://interhit.ru/wp-content/uploads/2020/06/114621_or.jpg')] bg-cover bg-center bg-no-repeat rounded-[30px] z-[0]">
            <div className="absolute inset-0 bg-[#121417] opacity-60 rounded-[30px] z-[1]"></div>
            <h3 className="absolute bottom-[20%] md:bottom-[30%] left-[50%] translate-x-[-50%] font-normal text-center sm-max:text-[28px] text-[32px] md:text-[40px] leading-[1.1] tracking-[-0.02em] text-lightColor z-[2] w-full">
              Sorry...No nannies found.
            </h3>
          </div>
        )}
        {isLoadMore && filteredNannies.length > 0 && (
          <LoadMoreButton onClick={onLoadMoreClick} />
        )}
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default Nannies;
