import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./constants";

export const getLogin = () => {
  console.log("called login");
  return {
    type: LOGIN_SUCCESS
  };
};

export const getLogout = () => {
  console.log("called logout");
  return {
    type: LOGOUT_SUCCESS
  };
};
