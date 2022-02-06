import {createContext, useContext, useState} from "react";
import DbContext from "./db";

const HomeContext = createContext();

const HomeProvider = ({ children }) => {
  const { dbMyFavouriteList } = useContext(DbContext);
  const [myFavouriteList, setMyFavouriteList] = useState(dbMyFavouriteList);

  const value = {
    state: { myFavouriteList: myFavouriteList },
    actions: { setMyFavouriteList }
  }

  return (
    <HomeContext.Provider value={value}>{children}</HomeContext.Provider>
  )
}

const HomeConsumer = HomeContext.Consumer;

export { HomeProvider, HomeConsumer };

export default HomeContext;
