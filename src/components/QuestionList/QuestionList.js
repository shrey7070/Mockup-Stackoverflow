import { Link } from "react-router-dom";
import { monthNames } from "../../helper/constant";
import "./QuestionList.css";

const QuestionList = (props) => {
  // formatHandler for views more than 999
  const kFormatHandler = (num) => {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  };

  const dateFormatter = (last_edit_date) => {
    var date = new Date(1000 * last_edit_date);
    return (
      monthNames[date.getMonth()] +
      " " +
      date.getDate() +
      " at " +
      date.getHours() +
      ":" +
      (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())
    );
  };

  return (
    <div className="questionMainDiv">
      <ul className="list-group">
        <li className="list-group-item d-md-flex float-none border-bottom col-md-12 ">
          {/* votes / answer / views part ends here */}

          <div className="col-sm-12 align-items-start d-flex col-md-3">
            {/* votes part starts here */}
            <div className="votes d-md-block d-flex text-center left_boxesDiv">
              <div className="mx-sm-1">
                <span className="font-16">{props.score}</span>
              </div>
              <span className="font-12 position-relative m-auto m2"> vote</span>
            </div>

            {/* answer part starts here */}
            <div
              style={
                props.answer_count > 0 ? { border: "1px solid #5eba7d" } : {}
              }
              className={`d-md-block px-sm-2 answered d-flex text-center left_boxesDiv ${
                props.is_answered ? "bg-green text-white" : ""
              }`}
            >
              <div className="mx-sm-1">
                <span className="font-16">{props.answer_count}</span>
              </div>
              <span className="font-12 position-relative m-auto m2">
                answer
              </span>
            </div>

            {/* views part starts here */}
            <div
              className={`d-md-block d-flex views text-center left_boxesDiv 
              ${props.view_count > 1000 ? "text-brown" : ""}`}
            >
              <div className="mx-sm-1">
                <span className="font-16">
                  {kFormatHandler(props.view_count)}
                </span>
              </div>
              <span className="font-12 position-relative  m-auto m2">
                views
              </span>
            </div>
          </div>

          {/* votes / answer / views part ends here */}

          <div className="col-sm-12 mb-2 col-md-9">
            <div className="questionDiv mt-1">
              <span className="p-1 px-2 rounded bg-primary text-white">
                +{props.bounty_amount}
              </span>
              <span className="mx-1 queText-color">{props.title}</span>
            </div>
            <div className="font-12 mt-1 d-md-flex float-none">
              <div className="tagDiv">
                {props.tags.map((tag, index) => {
                  return (
                    <span key={index} className="p-1 rounded m-1">
                      {tag}
                    </span>
                  );
                })}
              </div>
              <div className="time_ownerDiv mt-0">
                <span>
                  {(props.last_edit_date && "modified ") ||
                    (props.last_activity_date && "answered ")}
                  {dateFormatter(
                    props.last_edit_date || props.last_activity_date
                  )}
                </span>
                <span className="cursor-pointer  queText-color">
                  {/* link to render profile page of specific userId */}
                  <Link
                    className="text-decoration-none"
                    to={`/profile/${props.owner.user_id}`}
                  >
                    {" "}
                    {props.owner.display_name}
                  </Link>
                </span>
                <span className="owner_totalcounts">
                  {" "}
                  {kFormatHandler(props.owner.reputation) || ""}
                </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default QuestionList;
