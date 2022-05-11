import React from "react";
import "./ErrorPage.scss";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error">
      <div id="error">Error</div>
      <div className="error-num">
        <div className="error-num__clip">500</div>
      </div>
      <div>
        <p id="desc">Uh oh, there seems to be a problem.</p>
        <p>
          Let me help you find <NavLink to="/profile" className="error-link">a way out</NavLink>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
