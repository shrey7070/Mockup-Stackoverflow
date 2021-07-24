import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import QuestionList from "../../components/QuestionList/QuestionList";

import { getQuestions } from "./actionMethod";

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoader(true);
        const response = await getQuestions();
        setQuestions(response.items);
      } catch (err) {
        console.log(err);
      }
      setLoader(false);
    }
    fetchData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="w-100 m-auto my-3">
        <h1 className="text-center">Top Questions [Featured]</h1>
      </div>
      <div className="container mb-5">
        <div className="questionMainDiv">
          <ul className="list-group">
            {loader ? (
              <Loader />
            ) : (
              questions.map((que, i) => {
                return <QuestionList key={i} {...que} />;
              })
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Questions;
