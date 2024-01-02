import { Icon } from "@mui/material";

import "./index.css";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

const QuestionItem = (props) => {
  const { question } = props;

  const {
    answer_count,
    creation_date,
    is_answered,
    last_activity_date,

    owner,
    tags,
    title,
    view_count,
  } = question;

  const getLastActivityText = () => {
    const lastActivityTime = is_answered ? last_activity_date : creation_date;

    if (!lastActivityTime) {
      return ""; // No last activity time available
    }

    const now = Math.floor(Date.now() / 1000); // Current time in seconds
    const timeDifference = now - lastActivityTime; // Calculate time difference

    // Calculate time ago
    const seconds = Math.floor(timeDifference % 60);
    const minutes = Math.floor((timeDifference / 60) % 60);
    const hours = Math.floor((timeDifference / 3600) % 24);
    const days = Math.floor(timeDifference / 86400);

    if (days > 0) {
      return `${days} days ago`;
    } else if (hours > 0) {
      return `${hours} hours ago`;
    } else if (minutes > 0) {
      return `${minutes} minutes ago`;
    } else {
      return `${seconds} seconds ago`;
    }
  };

  const getIcon = () => {
    return is_answered ? (
      <div className="m-icon-con">
        <EditRoundedIcon style={{ fontSize: "12px" }} className="m-icon" />
      </div>
    ) : (
      <div className="m-icon-con">
        <ArticleRoundedIcon style={{ fontSize: "12px" }} className="m-icon" />
      </div>
    );
  };

  return (
    <>
      <div className="q-bg-container">
        <div className="q-sec-1">
          <h2 className="q-text">{title}</h2>
          <div className="tag-container">
            {tags.map((each) => (
              <p className="tags" key={each}>
                {each}
              </p>
            ))}
          </div>
          <div className="modified-time-container">
            {getIcon()}
            <p className="time-ago">
              {is_answered ? " answered" : " modified"} {getLastActivityText()}{" "}
              {",  "}
              <span style={{ color: "#000", fontWeight: "400" }}>
                {owner.display_name}
              </span>
            </p>
          </div>
        </div>

        <div className="val-container">
          <div className="v-count-container">
            <p className="value">{answer_count}</p>
            <p className="in">votes</p>
            <ThumbUpAltOutlinedIcon
              style={{ fontSize: "16px" }}
              className="ic"
            />
          </div>

          <div className="v-count-container">
            <p className="value">{answer_count}</p>
            <p className="in">Answers</p>
            <ModeCommentOutlinedIcon
              style={{ fontSize: "16px" }}
              className="ic"
            />
          </div>

          <div className="v-count-container">
            <p className="value">{view_count}</p>
            <p className="in">views</p>
            <Icon style={{ fontSize: "16px" }} className="ic">
              visibility
            </Icon>
          </div>
        </div>
      </div>
      <hr className="line" />
    </>
  );
};

export default QuestionItem;
