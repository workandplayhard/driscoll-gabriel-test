import { UserData } from "../../types/types";
import { userActions } from "../actionTypes";

export const createUser = (payload: UserData) => {
  return async (dispatch: any) => {
    return dispatch({
      type: userActions.CREATE_USER,
      payload: payload,
      status: 200,
      success: true,
    });
  };
};

export const editUser = (payload: UserData) => {
  return async (dispatch: any) => {
    return dispatch({
      type: userActions.EDIT_USER,
      payload: payload,
      status: 200,
      success: true,
    });
  };
};

export const deleteUser = (userDetails: UserData) => {
  return async (dispatch: any) => {
    return dispatch({
      type: userActions.DELETE_USER,
      payload: userDetails,
      status: 200,
      success: true,
    });
  };
};

export const setSelectedUser = (userDetails: UserData) => {
  return async (dispatch: any) => {
    return dispatch({
      type: userActions.SELECTED_USER,
      payload: userDetails,
      status: 200,
      success: true,
    });
  };
};
