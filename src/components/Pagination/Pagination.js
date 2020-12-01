import React from "react";
import "./Pagination.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ handleNext, handlePrev, nextUrl, prevUrl }) => {
  return (
    <div className="Pagination">
      {prevUrl && (
        <Button
          variant="secondary"
          size="sm"
          className="left-arrow"
          onClick={handlePrev}
        >
          <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
        </Button>
      )}
      {nextUrl && (
        <Button
          variant="secondary"
          size="sm"
          className="right-arrow"
          onClick={handleNext}
        >
          <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        </Button>
      )}
    </div>
  );
};

export default Pagination;
