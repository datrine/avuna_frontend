import React from "react";
import "./coursesContainer.css";
import ReactPaginate from "react-paginate";
import Layout from "../../HOC/layout/layout";
import SeeAll from "../../assets/see-all.svg";

const CoursesContainer = ({ children, title, pageCount, setPageNumber, action, type }) => {
  return (
    <div className="courses-container-cont">
      <Layout>
        <div className="courses-head-cont">
          <div className="courses-head-title">
            <h2>{title}</h2>
            {title === "InProgress" ? (
              <div>
                <p>6</p>
              </div>
            ) : null}
          </div>
          {type === "true" ? null : (
            <div className="courses-head-see" onClick={action}>
              <h2>See All</h2>
              <img src={SeeAll} alt="see-all" />
            </div>
          )}
        </div>
        <div className="courses-body-cont">{children}</div>
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageCount={pageCount}
          onPageChange={({ selected }) => {
            setPageNumber(selected);
          }}
          containerClassName="paginationBtns"
          previousLinkClassName="previousBtns"
          previousClassName="previous-cont"
          nextLinkClassName="nextBtns"
          nextClassName="next-cont"
          activeClassName="paginationActive"
        />
      </Layout>
    </div>
  );
};

export default CoursesContainer;
