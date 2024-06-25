import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Filter, LoadMoreButton, Loader, NanniesList } from "../components";

import { getFavoritesNannies } from "../services";
import { useLocalStorage } from "../hooks";

const Favorites = () => {
  const [nannies, setNannies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoadMore, setisLoadMore] = useState(false);
  const { favoritesList } = useLocalStorage();

  useEffect(() => {
    setIsLoading(true);
    if (favoritesList.length) {
      const total = favoritesList.length;
      const isMoreNannies = page * 3 < total;

      setisLoadMore(isMoreNannies);

      if (!isMoreNannies) {
        toast.info("You have reached the end of the list of nannies.");
      }
      getFavoritesNannies(favoritesList, page)
        .then((data) => {
          setNannies((prev) => [...prev, ...data]);
        })
        .catch((error) => toast.error(error.message))
        .finally(() => {
          setIsLoading(false);
        });
    }
    setIsLoading(false);
  }, [favoritesList, page]);

  const handleClickLike = (id) => {
    const filteredNannies = nannies.filter((nanny) => nanny.id !== id);
    setNannies(filteredNannies);
  };

  const onLoadMoreClick = () => {
    setPage((prev) => prev + 1);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="bg-bgLigtColor min-h-screen">
      <div className="container pt-[45px] pb-[40px] md:pt-[64px] md:pb-[100px]">
        {favoritesList.length || nannies.length ? (
          <>
            <Filter />
            <NanniesList nannies={nannies} handleClickLike={handleClickLike} />
            {isLoadMore ? <LoadMoreButton onClick={onLoadMoreClick} /> : null}
          </>
        ) : (
          <div className="relative w-full h-[480px] sm-max:h-[400px] md:min-h-screen bg-bgLigtColor bg-[url('https://interhit.ru/wp-content/uploads/2020/06/114621_or.jpg')] bg-cover bg-center bg-no-repeat rounded-[30px] z-[0]">
            <div className="absolute inset-0 bg-[#121417] opacity-60 rounded-[30px] z-[1]"></div>
            <h3 className="absolute bottom-[20%] md:bottom-[30%] left-[50%] translate-x-[-50%] font-normal text-center sm-max:text-[28px] text-[32px] md:text-[40px] leading-[1.1] tracking-[-0.02em] text-lightColor z-[2] w-full">
              You haven`t added any nannies here yet.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
