import {createContext, useContext, useState} from "react";
import {ValueUtils} from "../common/utils/ValueUtils";
import DbContext from "./db";

const HomeContext = createContext();

const HomeProvider = ({ children }) => {
  const {dbMyFavouriteList} = useContext(DbContext);
  const [myFavouriteList, setMyFavouriteList] = useState(dbMyFavouriteList);

  const getNewMyFavouriteId = () => {
    const lastMyFavourite = myFavouriteList[myFavouriteList.length - 1]; // undefined || object
    if (ValueUtils.isEmpty(lastMyFavourite)) {
      return 0;
    }

    return lastMyFavourite.id + 1;
  }

  const value = {
    state: {
      myFavouriteList: myFavouriteList
    },
    actions: {setMyFavouriteList, getNewMyFavouriteId}
  }

  return (
    <HomeContext.Provider value={value}>{children}</HomeContext.Provider>
  )
}

const HomeConsumer = HomeContext.Consumer;

export { HomeProvider, HomeConsumer };

export default HomeContext;
