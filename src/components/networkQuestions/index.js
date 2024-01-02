import "./index.css";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";

const NetworkQuestions = () => {
  return (
    <div className="network-bg-container">
      <div className="side-heading-sec">
        <p className="side-overlay">Network questions</p>
        <h2 className="side-background-text">hot</h2>
      </div>

      <div className="n-q-container">
        <div className="n-question">
          <img
            src="https://cdn.sstatic.net/Sites/history/img/apple-touch-icon.png"
            alt="H"
            className="q-logo"
          />
          <p className="n-question-text">
            Where there women who were against giving when the right to vote ?
          </p>
        </div>
        <hr className="line q-l" />

        <div className="n-question">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/1200px-Stack_Overflow_icon.svg.png"
            alt="H"
            className="q-logo"
          />
          <p className="n-question-text">
            Why does everybody typedef over standard C types?
          </p>
        </div>
        <hr className="line q-l" />

        <div className="n-question">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7042/7042516.png"
            alt="H"
            className="q-logo"
          />
          <p className="n-question-text">
            An English word describing a pseudo-job
          </p>
        </div>
        <hr className="line q-l" />

        <div className="n-question">
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTz2tgtP9ZkeJ3Oi8N9TtINvXSlX2cyjFuclTeBg-262ujs2JNH"
            alt="H"
            className="q-logo"
          />
          <p className="n-question-text">
            When flying on a very tight schedule, are you obligated to run to
            make it to the next gate on a connection?
          </p>
        </div>
        <hr className="line q-l" />

        <div className="n-question">
          <img
            src="https://seeklogo.com/images/S/superuser-logo-4AA207A4D4-seeklogo.com.png"
            alt="H"
            className="q-logo"
          />
          <p className="n-question-text">Does 1 pixel have a standard size?</p>
        </div>
        <hr className="line q-l" />
      </div>
      <div>
        <p
          style={{
            color: "#48a4e0",
            fontWeight: "500",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: "50px",
          }}
        >
          VIEW ALL QUESTIONS
          <span>
            <NavigateNextRoundedIcon />
          </span>
        </p>
      </div>
    </div>
  );
};

export default NetworkQuestions;
