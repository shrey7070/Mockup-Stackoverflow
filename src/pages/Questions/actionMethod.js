// Fetching featured questions from API
import { API } from "../../helper/constant";
export const getQuestions = () => {
  return fetch(
    `${API}/2.3/questions/featured?order=desc&sort=activity&site=stackoverflow`,
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
