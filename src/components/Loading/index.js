import React from "react";
import "./style.scss";
const Loading = () => {
  return (
    <div className="Loading">
      {/* loading animation from Loading.io */}
      <div className="Loading__lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
