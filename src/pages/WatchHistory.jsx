import {
  faArrowLeft,
  faHouse,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function WatchHistory() {
  return (
    <>
      <div className="d-flex p-3 mt-5 w-100 mb-5">
        <h4 className="ms-md-5">Watch History</h4>
        <h5 className="ms-auto me-md-5">
          <Link to={"/home"} style={{ color: "white", textDecoration: "none" }}>
            <span id="hide">
              <FontAwesomeIcon icon={faArrowLeft} fade className="me-2" />
              Back to Home
            </span>{" "}
            <FontAwesomeIcon icon={faHouse} className="ms-2" />
          </Link>
        </h5>
      </div>

      <div className="row w-100 mt-5 ">
        <div className="col-md-2"></div>
        <div className="col-md-8" style={{overflowX:"auto"}}>
          <table className="table table-borderd table-light">
            <thead>
              <tr>
                <th>#</th>
                <th>Caption</th>
                <th>Url</th>
                <th>Time Stamp</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <td>dummy</td>
              <td>dummy</td>
              <td>dummy</td>
              <td>dummy</td>
              <td className="text-center">
                <button className="btn btn-danger">
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </td>
            </tbody>
          </table>
        </div>
        <div className="col-md-2"></div>
      </div>
    </>
  );
}

export default WatchHistory;
