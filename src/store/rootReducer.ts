import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { newsReducer, userReducer } from "./reducers";

// redux store states configuration
const persistConfig = {
  key: "root",
  storage,
};

const userConfig = {
  key: "users",
  storage,
};

const newsConfig = {
  key: "news",
  storage,
};

const rootReducer = combineReducers({
  users: persistReducer(userConfig, userReducer),
  news: persistReducer(newsConfig, newsReducer),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
