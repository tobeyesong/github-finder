/** @format */

import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer.js";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);
  //Get Search Results
  const searchUsers = async (values) => {
    setLoading();
    const params = new URLSearchParams({
      q: values,
    });
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: "Bearer" + `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await response.json();

    dispatch({ type: "GET_USERS", payload: items });
  };

  //Get single user
  const getUser = async (login) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: "Bearer" + `token ${GITHUB_TOKEN}`,
      },
    });

    if (response.status === 404) {
      window.location = "/*";
    } else {
      const data = await response.json();

      dispatch({ type: "GET_USER", payload: data });
    }
  };

  //Get user repos
  const getUserRepos = async (login) => {
    setLoading();

    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });

    const response = await fetch(
      `${GITHUB_URL}/users/${login}/repos?${params}`,
      {
        headers: {
          Authorization: "Bearer" + `token ${GITHUB_TOKEN}`,
        },
      }
    );

    const data = await response.json();

    dispatch({ type: "GET_REPOS", payload: data });
  };

  //Clear users from state
  const clearUsers = () =>
    dispatch({
      type: "CLEAR_USERS",
    });

  //Set loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
