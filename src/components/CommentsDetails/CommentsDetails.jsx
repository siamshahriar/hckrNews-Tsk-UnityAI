import React from "react";
import { useLoaderData } from "react-router-dom";
import EachComment from "./EachComment";

const CommentsDetails = () => {
  const data = useLoaderData();
  const { title, points, children } = data;
  console.log(children);
  return (
    <div>
      <div className="card w-[600px] mx-auto bg-base-300 shadow-xl my-8">
        <div className="card-body">
          <h2 className="text-center text-2xl font-semibold">{title}</h2>
          <p className="text-center ">Points: {points}</p>
          <div className=" mx-auto max-w-full">
            <h3 className="mb-4 text-lg font-semibold t">Comments</h3>
            <div className="space-y-4">
              {children?.map((each, index) => (
                <EachComment key={index} each={each}></EachComment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsDetails;
