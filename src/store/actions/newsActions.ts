import { newsActions } from "../actionTypes";
import newsListData from "../../newsMockData.json";

export const getNewsList = () => {
  return async (dispatch: any) => {
    dispatch({
      type: newsActions.GET_NEWS_LIST,
      payload: newsListData,
    });
  };
};
