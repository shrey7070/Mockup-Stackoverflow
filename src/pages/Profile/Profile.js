// User profile page

import { useEffect, useState } from "react";
import TopTags from "../../components/Profile/TopTags/TopTags";
import UserProfile from "../../components/Profile/UserProfile/UserProfile";
import QuestionList from "../../components/QuestionList/QuestionList";
import Loader from "../../components/Loader/Loader";

import {
  getUserData,
  getUserTagsData,
  getUserQuestionData,
} from "./actionMethods";
const Profile = (props) => {
  const [loader, setLoader] = useState(false);

  const [userData, setUserData] = useState([]);
  const [topTags, setTopTags] = useState([]);
  const [questions, setQuestions] = useState([]);
  let userId;
  if (props.match.params.id) {
    userId = props.match.params.id;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setLoader(true);
        const response = await getUserData(userId);
        setUserData(response.items);
      } catch (err) {
        console.log(err);
        setLoader(false);
      }
    }
    async function fetchTags() {
      try {
        setLoader(true);
        const response = await getUserTagsData(userId);
        setTopTags(response.items);
      } catch (err) {
        console.log(err);
      }
      setLoader(false);
    }
    async function fetchTopQuestions() {
      try {
        setLoader(true);
        const response = await getUserQuestionData(userId);
        setQuestions(response.items);
      } catch (err) {
        console.log(err);
      }
      setLoader(false);
    }

    // async API call functions
    fetchData();
    fetchTags();
    fetchTopQuestions();
  }, [userId]);

  return (
    <div className="container profilemainDiv">
      <div className="w-100 m-auto my-3">
        <h1 className="text-left">User Profile</h1>
      </div>

      {/* User Profile Data */}

      <div className="userProfileDiv">
        {loader && userData.length === 0 ? (
          <Loader />
        ) : (
          <UserProfile userData={userData} />
        )}
      </div>
      <hr />

      {/* User Top Tags */}

      <div className="topTagsDiv">
        {loader ? <Loader /> : <TopTags tags={topTags} />}
      </div>
      <hr />

      {/* User Top Questions */}

      <div className="questionMainDiv mb-5">
        <div>
          <h3>Top questions({questions.length})</h3>
        </div>
        <ul className="mt-3 list-group">
          {loader ? (
            <Loader />
          ) : (
            questions.map((que, i) => {
              que.owner = "";
              return <QuestionList key={i} {...que} />;
            })
          )}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
