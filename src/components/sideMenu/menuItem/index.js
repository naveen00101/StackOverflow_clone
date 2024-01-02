import { Icon } from "@mui/material";

import "./index.css";

const Option = (props) => {
  const { i, o, s, c } = props;

  const selectOpt = () => {
    c(o);
  };

  return (
    <div className="option">
      {s && <div className="selected-option-indicator"></div>}
      <button
        onClick={() => {
          selectOpt();
        }}
        className={`${s ? "select" : ""} option-container`}
      >
        <Icon className={`${s ? "select-i" : "i"}`}>{i}</Icon>
        <p className={`${s ? "select-t" : "t"}`}>{o}</p>
      </button>
    </div>
  );
};

export default Option;
