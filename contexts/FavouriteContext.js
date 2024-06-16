import { useState } from "react";
import { useContext, createContext } from "react";

const FavouriteContext = createContext();

function FavouriteProvider({ children }) {
  const [favouriteIds, setFavouriteIds] = useState([]);

  function addFavourite(id) {
    setFavouriteIds((prev) => [...prev, id]);
  }

  function removeFavourite(id) {
    setFavouriteIds((prev) => prev.filter((placeId) => id !== placeId));
  }

  return <FavouriteContext.Provider value={{ addFavourite, removeFavourite, favouriteIds }}>{children}</FavouriteContext.Provider>;
}

function useFavourite() {
  const context = useContext(FavouriteContext);
  return context;
}

export { FavouriteProvider, FavouriteContext, useFavourite };
