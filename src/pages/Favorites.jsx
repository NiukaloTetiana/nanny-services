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
  const [isLoadMore, setIsLoadMore] = useState(false);
  const { favoritesList, toggleLike } = useLocalStorage();
  const [currentFilter, setCurrentFilter] = useState("Show all");

  useEffect(() => {
    setIsLoading(true);
    if (favoritesList.length > 0) {
      const total = favoritesList.length;
      const isMoreNannies = page * 3 < total;

      setIsLoadMore(isMoreNannies);

      // if (!isMoreNannies && page > 1 && nannies.length > 3) {
      //   toast.info("You have reached the end of the list of nannies.");
      // }

      getFavoritesNannies(favoritesList, page)
        .then((data) => {
          if (page === 1) {
            setNannies(data);
          } else {
            setNannies((prev) => [...prev, ...data]);
          }
        })
        .catch((error) => toast.error(error.message))
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [favoritesList, page]);

  const handleClickLike = (id) => {
    setNannies((prevNannies) => prevNannies.filter((nanny) => nanny.id !== id));
    toggleLike(id);
  };

  const onLoadMoreClick = () => {
    setPage((prev) => prev + 1);
  };

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  const filteredNannies = getNanniesFilter(nannies, currentFilter);

  if (isLoading) {
    return <Loader />;
  }

  console.log(favoritesList.length, "LOOOOOO");

  return (
    <div className="bg-bgLigtColor min-h-screen">
      <div className="container pt-[45px] pb-[40px] md:pt-[64px] md:pb-[100px]">
        {favoritesList.length > 1 && (
          <Filter filterFunction={handleFilterChange} />
        )}
        {favoritesList.length > 0 || filteredNannies.length > 0 ? (
          <>
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
