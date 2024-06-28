import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  Filter,
  LoadMoreButton,
  Loader,
  NanniesList,
  TitleWrapper,
} from "../components";

import { getFavoritesNannies } from "../services";
import { useLocalStorage } from "../hooks";
import { getNanniesFilter } from "../helpers";

const Favorites = () => {
  const [nannies, setNannies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoadMore, setisLoadMore] = useState(false);
  const { favoritesList } = useLocalStorage();
  const { filteredNannies, filterNannies } = getNanniesFilter(nannies);
  const [currentFilter, setCurrentFilter] = useState("Show all");

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
    } else {
      setIsLoading(false);
    }
  }, [favoritesList, page]);

  useEffect(() => {
    filterNannies(currentFilter);
  }, [currentFilter, filterNannies, nannies]);

  const handleClickLike = (id) => {
    const filteredNannies = nannies.filter((nanny) => nanny.id !== id);
    setNannies(filteredNannies);
  };

  const onLoadMoreClick = () => {
    setPage((prev) => prev + 1);
  };

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="bg-bgLigtColor min-h-screen">
      <div className="container pt-[45px] pb-[40px] md:pt-[64px] md:pb-[100px]">
        {favoritesList.length > 0 || filteredNannies.length > 0 ? (
          <>
            <Filter filterFunction={handleFilterChange} />
            {filteredNannies.length > 0 ? (
              <>
                <NanniesList
                  nannies={filteredNannies}
                  handleClickLike={handleClickLike}
                />
                {isLoadMore && <LoadMoreButton onClick={onLoadMoreClick} />}
              </>
            ) : (
              <TitleWrapper title="Sorry...No nannies found." />
            )}
          </>
        ) : (
          <TitleWrapper title="You haven`t added any nannies here yet." />
        )}
      </div>
    </div>
  );
};

export default Favorites;
