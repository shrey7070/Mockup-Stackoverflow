import "./TopTags.css";
const TopTags = (props) => {
  return (
    <div className="toptagsMainDiv col-md-6 col-sm-12">
      <div>
        <h3>Top tags({props.tags.length})</h3>
      </div>
      <ul>
        {props.tags.map((tag, i) => {
          return (
            <li
              key={i}
              className="cursor-pointer d-flex m-1  justify-content-between"
            >
              <div className="ToptagNameDiv p-2 border rounded text-center">
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
