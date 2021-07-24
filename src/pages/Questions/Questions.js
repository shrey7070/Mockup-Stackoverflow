import { useState, useEffect } from "react";
import QuestionList from "../../components/QuestionList/QuestionList";

import { getQuestions } from "./actionMethod";

const Questions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchData(req, res, next) {
      try {
        const response = await getQuestions();
        setQuestions(response.items);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="w-100 m-auto mb-5">
        <h1 className="text-center">Top Questions[Featured]</h1>
      </div>
      <div className="container">
        <QuestionList {...questions} />
      </div>
    </div>
  );
};

export default Questions;
