// User profile page

import { useEffect, useState } from "react";
import TopTags from "../../components/Profile/TopTags/TopTags";
import UserProfile from "../../components/Profile/UserProfile/UserProfile";
import QuestionList from "../../components/QuestionList/QuestionList";
import Loader from "../../components/Loader/Loader";

import { getUserData } from "./actionMethods";
const Profile = (props) => {
  const [loader, setLoader] = useState(false);

  const [userData, setUserData] = useState([]);
  const [topTags, setTopTags] = useState([]);
  const [questions, setQuestions] = useState([]);
  let userId;

  useEffect(() => {
    async function fetchData() {
      try {
        setLoader(true);
        const response = await getUserData(userId);
        setUserData(response.items);
      } catch (err) {
        console.log(err);
      }
      setLoader(false);
    }
    if (props.match.params.id) {
      userId = props.match.params.id;
    }
    fetchData();
  }, []);

  return (
    <div className="container profilemainDiv">
      <div className="w-100 m-auto my-3">
        <h1 className="text-left">User Profile</h1>
      </div>
      <div className="userProfileDiv">
        {loader && userData.length === 0 ? (
          <Loader />
        ) : (
          <UserProfile userData={userData} />
        )}
      </div>
      {/* <div className="topTagsDiv">
        <TopTags />
      </div> */}
      {/* <div className="questionsDiv"><QuestionList /></div> */}
    </div>
  );
};

export default Profile;
