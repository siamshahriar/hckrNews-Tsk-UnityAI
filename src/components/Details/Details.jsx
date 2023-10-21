import React from "react";
import { Link } from "react-router-dom";

const Details = ({ each }) => {
  const { title, created_at, num_comments, objectID, url } = each;
  return (
    <div className="card w-full h-full bg-base-300 shadow-xl">
      <div className="card-body flex flex-col justify-between">
        <h2 className="card-title">{title ? title : "Title not found"}</h2>
        <div className="card-actions justify-between mt-3">
          <div className="badge badge-outline">Comments {num_comments}</div>
          <div className="badge badge-outline">
            {created_at.substring(0, 10)}
          </div>
        </div>
        <div className="card-actions justify-center mt-3">
          <Link to={`/details/${objectID}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
