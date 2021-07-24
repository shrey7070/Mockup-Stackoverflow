import "./TopTags.css";
const TopTags = (props) => {
  return (
    <div className="toptagsMainDiv">
      <div>
        <h3>Top tags({props.tags.length})</h3>
      </div>
      <ul>
        {props.tags.map((tag, i) => {
          return (
            <li
              key={i}
              className="cursor-pointer d-flex m-1 justify-content-around"
            >
              <div className="ToptagNameDiv border rounded w-25 text-center">
                {tag.name}
              </div>
              <div className="p-1">
                <span className="text-gray font-12">SCORE </span>
                <span className="text-gray font-16">{tag.count}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopTags;
