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
import { getNanniesFilter } from "../helpers";
import { useLocalStorage } from "../hooks";

const Favorites = () => {
  const [nannies, setNannies] = useState([]);
  const [filteredNannies, setFilteredNannies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const { favoritesList } = useLocalStorage();
  const [currentFilter, setCurrentFilter] = useState("Show all");

  useEffect(() => {
    const fetchFavorites = async () => {
      setIsLoading(true);

      if (favoritesList.length === 0) {
        setIsLoading(false);
        return;
      }

      const total = favoritesList.length;
      const isMoreNannies = page * 3 < total;
      setIsLoadMore(isMoreNannies);

      if (!isMoreNannies) {
        toast.info("You have reached the end of the list of nannies.");
      }

      try {
        const data = await getFavoritesNannies(favoritesList, page);
        const updatedNannies = [...nannies, ...data];
        setNannies(updatedNannies);

        const filtered = getNanniesFilter(updatedNannies, currentFilter);
        setFilteredNannies(filtered);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFavorites();
  }, [favoritesList, page]);

  useEffect(() => {
    const filtered = getNanniesFilter(nannies, currentFilter);
    setFilteredNannies(filtered);
  }, [currentFilter, nannies]);

  const handleClickLike = (id) => {
    const filteredNannies = nannies.filter((nanny) => nanny.id !== id);
    setNannies(filteredNannies);
    const filtered = getNanniesFilter(filteredNannies, currentFilter);
    setFilteredNannies(filtered);
  };

  const onLoadMoreClick = () => {
    setPage((prev) => prev + 1);
  };

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  if (isLoading && !nannies.length) {
    return <Loader />;
  }

  return (
    <div className="bg-bgLigtColor min-h-screen">
      <div className="container pt-[45px] pb-[40px] md:pt-[64px] md:pb-[100px]">
        {favoritesList.length > 0 ? (
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
          <TitleWrapper title="You haven't added any nannies here yet." />
        )}
      </div>
      {/* {isLoading && <Loader />} */}
    </div>
  );
};

export default Favorites;
