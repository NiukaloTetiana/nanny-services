import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useCurrentUser } from "./useCurrentUser";

export const useLocalStorage = () => {
  const { user } = useCurrentUser();
  const [favoritesList, setFavoritesList] = useState([]);

  useEffect(() => {
    if (user?.email) {
      const storedFavorites = JSON.parse(
        localStorage.getItem(user.email) || "[]"
      );
      setFavoritesList(storedFavorites);
    }
  }, [user?.email]);

  const toggleLike = (id) => {
    if (user?.email) {
      setFavoritesList((prevFavorites) => {
        const updatedFavorites = prevFavorites.includes(id)
          ? prevFavorites.filter((favId) => favId !== id)
          : [...prevFavorites, id];

        localStorage.setItem(user.email, JSON.stringify(updatedFavorites));
        return updatedFavorites;
      });
    } else {
      toast.info(
        "No-no! You can`t add/remove a nanny to your favorites. Please sign in."
      );
    }
  };

  return { favoritesList, toggleLike };
};
