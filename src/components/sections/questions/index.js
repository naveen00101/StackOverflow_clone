import React, { Component } from "react";
import Loader, { Bars, Rings, RotatingLines } from "react-loader-spinner";
import QuestionItem from "./questionItem";
import stackFooterImg from "../../../images/stackoverflow-footer-image.jpg";
import "./index.css";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

export default class QuestionsSection extends Component {
  state = {
    qType: "activity",
    featuredCount: 453,
    apiState: apiStatusConstants.initial,
    q: [],
    e: {},
  };

  changeQType = (v) => {
    this.setState({ qType: v });
  };

  getQuestions = async () => {
    this.setState({ apiState: apiStatusConstants.inProgress });
    const { qType } = this.state;
    const options = {
      method: "GET",
    };
    const url = `https://api.stackexchange.com/2.3/questions?page=1&pagesize=7&order=desc&sort=${qType}&site=stackoverflow`;
    console.log(url);
    const response = await fetch(url, options);
    // console.log(response.json());
    if (response.ok === true) {
      const data = await response.json();
      console.log(data);
      this.setState({ q: data.items });
      this.setState({ apiState: apiStatusConstants.success });
    } else {
      console.log("failed");
      const eData = await response.json();
      this.setState({
        apiState: apiStatusConstants.failure,
        e: {
          errorId: eData.error_id,
          errorMsg: eData.error_message,
          errorName: eData.error_name,
        },
      });
    }
  };

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Rings type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  );

  componentDidMount() {
    this.getQuestions();
  }

  renderViaAPIState = () => {
    const { apiState } = this.state;

    switch (apiState) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView();

      case apiStatusConstants.success:
        return this.renderQuestions();

      case apiStatusConstants.failure:
        return this.renderFailureView();

      default:
        return null;
    }
  };

  retry = () => {
    this.getQuestions();
  };

  renderFailureView = () => {
    const { e } = this.state;

    return (
      <div className="failure-con">
        <h1 className="error-heading">Oops! Something went Wrong</h1>
        <h2 className="error-id">{e.errorId}</h2>
        <h3 className="error-name">{e.errorName}</h3>
        <p className="error-msg">{e.errorMsg}</p>
        <button type="button" className="retry-btn" onClick={this.retry}>
          Retry
        </button>
      </div>
    );
  };

  renderQuestions = () => {
    const { q } = this.state;

    return (
      <div className="question-container">
        <ul className="q-list">
          {q.map((each) => (
            <li key={each.question_id}>
              <QuestionItem question={each} />
            </li>
          ))}
        </ul>

        <div className="q-bottom-sec">
          <img
            className="footer-image"
            src={stackFooterImg}
            alt="stackOverflow"
          />
          <h4 className="footer-heading">Looking for more?</h4>
          <p>
            Browse the{" "}
            <span className="highlight-text">complete list of questions</span>,
            or <span className="highlight-text">popular tags.</span>. Help us
            answer unanswered questions.
          </p>
        </div>
      </div>
    );
  };

  render() {
    const { qType, featuredCount } = this.state;
    return (
      <div className="q-main-container">
        <div className="heading-sec">
          <p className="overlay">Questions</p>
          <h2 className="background-text">top</h2>
        </div>

        <div className="qType-sec">
          <button
            className={`${qType === "activity" ? "selected-q" : "q"}`}
            onClick={() => {
              this.changeQType("activity");
            }}
          >
            interesting
          </button>

          <button
            className={`${qType === "votes" ? "selected-q" : "q"}`}
            onClick={() => {
              this.changeQType("votes");
            }}
          >
            featured
            {featuredCount !== 0 && (
              <span
                className={`${
                  qType === "votes" ? "selected-f-count" : "f-count"
                }`}
              >
                {featuredCount}
              </span>
            )}
          </button>

          <button
            className={`${qType === "hot" ? "selected-q" : "q"}`}
            onClick={() => {
              this.changeQType("hot");
            }}
          >
            hot
          </button>

          <button
            className={`${qType === "week" ? "selected-q" : "q"}`}
            onClick={() => {
              this.changeQType("week");
            }}
          >
            week
          </button>

          <button
            className={`${qType === "month" ? "selected-q" : "q"}`}
            onClick={() => {
              this.changeQType("month");
            }}
          >
            month
          </button>
        </div>
        <hr className="h-line" />

        {this.renderViaAPIState()}
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    // Check if the qType state has changed
    if (this.state.qType !== prevState.qType) {
      this.getQuestions();
    }
  }
}
