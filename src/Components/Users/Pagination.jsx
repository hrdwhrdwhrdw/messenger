import React, { useState, useEffect } from "react";
import "./Users.scss";

const Pagination = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChange,
  portionSize,
}) => {
  useEffect(
    () => setPortionNumber(Math.ceil(currentPage / portionSize)),
    [currentPage, portionSize]
  );

  let pages = [];
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPageNumberPortion = (portionNumber - 1) * portionSize + 1;
  let rightPageNumberPortion = portionNumber * portionSize;

  return (
    <div className="pagination">
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          Prev
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPageNumberPortion && p <= rightPageNumberPortion
        )
        .map((p) => {
          return (
            <button
              className={p === currentPage ? "active" : ""}
              onClick={(e) => onPageChange(p)}
              key={p}
            >
              {p}
            </button>
          );
        })}
      {portionNumber < portionCount && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
