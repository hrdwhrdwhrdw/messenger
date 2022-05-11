import React from "react";
import "./Preloader.scss";

export default function Preloader() {
  return (
    <div className="preloader">
      <div className="push-pop loader">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
