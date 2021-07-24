import "./QuestionList.css";
const QuestionList = (props) => {
  console.log(props);
  return (
    <div className="questionMainDiv">
      <ul className="list-group">
        <li className="list-group-item d-md-flex float-none border-bottom col-md-12 ">
          {/* votes part starts here */}
          <div className="col-sm-12 align-items-start d-flex col-md-3">
            <div className="votes d-md-block d-flex text-center left_boxesDiv">
              <div className="m-0">
                <span>1 </span>
              </div>
              <span className="font-12 position-relative top-1">vote</span>
            </div>

            {/* answer part starts here */}
            <div
              style={true ? { border: "1px solid green" } : {}}
              className="d-md-block answered d-flex text-center left_boxesDiv"
            >
              <div className="m-0">
                <span>1</span>
              </div>
              <span className="font-12 position-relative top-1">answer</span>
            </div>

            {/* views part starts here */}
            <div className="d-md-block d-flex views text-center left_boxesDiv">
              <div className="m-0">
                <span>1</span>
              </div>
              <span className="font-12 position-relative top-1">views</span>
            </div>
          </div>

          {/* votes / answer / views part ends here */}

          <div className="col-sm-12 mb-2 col-md-9">
            <div className="questionDiv mt-1">
              <span className="p-1 px-2 rounded bg-primary text-white">
                +50
              </span>
              <span className="mx-1 queText-color">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                quam hic nisi natus! Ullam, asperiores, rem aut odit consequatur
                voluptas doloribus non eum alias assumenda fugiat officia
                similique. Voluptas, aliquid ?
              </span>
            </div>
            <div className="font-12 mt-1 d-md-flex float-none">
              <div className="tagDiv">
                <span className="p-1 rounded m-1">android</span>
                <span className="p-1 rounded m-1">android</span>
                <span className="p-1 rounded m-1">react</span>
                <span className="p-1 rounded m-1">react</span>
                <span className="p-1 rounded m-1">react</span>
                <span className="p-1 rounded m-1">react</span>
                <span className="p-1 rounded m-1">react</span>
                <span className="p-1 rounded m-1">id</span>
                <span className="p-1 rounded m-1">android</span>
                <span className="p-1 rounded m-1">android</span>
                <span className="p-1 rounded m-1">android</span>
                <span className="p-1 rounded m-1">android</span>
              </div>
              <div className="time_ownerDiv mt-0">
                <span>answered 13 hours ago</span>
                <span className="cursor-pointer queText-color"> Shrey</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default QuestionList;
