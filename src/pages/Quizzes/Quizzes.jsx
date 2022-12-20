import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

// Imported Icons ==========>
import { BiBookAdd } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Pagination from "../../components/Pagination/Pagination";
import data from '../../data/data.json';
import Resultquiz from "../../components/Resultquiz/Resultquiz";

let PageSize = 10;

const Home = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className="quizzes">
      <div className="quizzesContent">
        <div className="quizzesBody">
          <div className="quizzesTop">
            <div className="title">
              <div className="icon">
                <AiOutlineThunderbolt />
              </div>
              <span className="titleText">Quizzes</span>
            </div>
            <div className="btnNew">
              <BiBookAdd />
              <button className="btn">Create new quiz</button>
            </div>
          </div>
          <hr />

          <div className="quizzesBottom">
            <div className="quizzesSearch">
              <div className="searchLeft">
                <span>Sort by:</span>
                <select className="dateselect" id="">
                  <option>Date</option>
                  Date
                </select>
                <select className="filterselect" id="">
                  <option>Filter</option>
                </select>
              </div>
              <div className="searchRight">
                <div className="search">
                  <input type="text" placeholder="Search ..." />
                  <BsSearch />
                </div>
              </div>
            </div>

            <div className="quizzesList">
              <div className="listItem">
                <div className="textSection">
                  <span className="textTitle">
                    Do you have what it takes to make your blog blast-off?
                  </span>
                  <div className="supText">
                    <div className="created">Created Mar 1, 2021</div>
                    <div className="createdby">By: Haythem Ferjaoui</div>
                    <div className="category">
                      <div className="span">Math</div>
                      <RxCross1 />
                    </div>
                  </div>
                </div>
                <div className="actionSection">
                  <button className="btn blue">Edit</button>
                  <button className="btn blue">Share</button>
                  <button className="btn yellow">Preview</button>
                </div>
                <div className="dropdown-container" tabIndex="-1">
                  <div className="three-dots"></div>
                  <div className="dropdown">
                    <Link href="#">
                      <div>click here for a scam</div>
                    </Link>
                    <Link href="#">
                      <div>even more scams</div>
                    </Link>
                  </div>
                </div>
              </div>

              {currentTableData.map(item => {
            return (
              <div className="listItem">
                <div className="textSection">
                  <span className="textTitle">
                    Do you have what it takes to make your blog blast-off?
                  </span>
                  <div className="supText">
                    <div className="created">Created Mar 1, 2021</div>
                    <div className="createdby">By: Haythem Ferjaoui</div>
                    <div className="category">
                      <div className="span">Math</div>
                      <RxCross1 />
                    </div>
                  </div>
                </div>
                <div className="actionSection">
                  <button className="btn blue">Edit</button>
                  <button className="btn blue">Share</button>
                  <button className="btn green">Preview</button>
                </div>
                <div className="dropdown-container" tabIndex="-1">
                  <div className="three-dots"></div>
                  <div className="dropdown">
                    <Link href="#">
                      <div>click here for a scam</div>
                    </Link>
                    <Link href="#">
                      <div>even more scams</div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}


            </div>
          </div>

          <nav className="quizzesPaginator">
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={data.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </nav>
        </div>
      </div>
      <div className="quizzesPreview">

          <Resultquiz/>
      </div>
    </div>
  );
};

export default Home;
