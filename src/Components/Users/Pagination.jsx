import React, { useState, useEffect } from "react";
import { Button} from "@material-ui/core";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import styles from "./Pagination.module.scss";

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
    <div className={styles.pagination}>
      {portionNumber > 1 ? (
        <Button
          className={styles.button}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          <DoubleArrowIcon sx={{transform: "rotate(180deg)"}}/>
        </Button>
      ) : (
        <Button
          className={styles.button}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
          disabled={true}
        >
          <DoubleArrowIcon sx={{transform: "rotate(180deg)"}}/>
        </Button>
      )}
      {pages
        .filter(
          (p) => p >= leftPageNumberPortion && p <= rightPageNumberPortion
        )
        .map((p) => {
          return (
            <Button
              className={p === currentPage ? [styles.button, styles.active].join(' ') : styles.button}
              onClick={(e) => onPageChange(p)}
              key={p}
            >
              {p}
            </Button>
          );
        })}
      {portionNumber < portionCount && (
        <Button
          className={styles.button}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          <DoubleArrowIcon />
        </Button>
      )}
    </div>
  );
};

export default Pagination;
