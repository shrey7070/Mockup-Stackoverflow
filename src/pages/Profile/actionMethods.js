// fetching user Data from userId

import { API } from "../../helper/constant";

export const getUserData = (userId) => {
  return fetch(
    `${API}/2.3/users/${userId}?order=desc&sort=reputation&site=stackoverflow`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  )
    .then((resp) => {
      return resp.json();
    })
    .catch((err) => console.log(err));
};

// fetching user Tags from userId
export const getUserTagsData = (userId) => {
  return fetch(
    `${API}/2.3/users/${userId}/tags?order=desc&sort=popular&site=stackoverflow`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  )
    .then((resp) => {
      return resp.json();
    })
    .catch((err) => console.log(err));
};

// fetching user  Questions from userId
