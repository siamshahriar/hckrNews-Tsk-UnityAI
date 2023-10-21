import React from "react";

const EachComment = ({ each }) => {
  const { author, created_at, text } = each;

  const createMarkup = () => {
    return { __html: text };
  };

  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-3">
        <img
          className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
          src="https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png"
          alt=""
        />
      </div>
      <div className="flex-1 overflow-clip border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
        <strong>{author}</strong>{" "}
        <span className="text-xs text-gray-400">
          {created_at.substring(0, 10)}
        </span>
        <div className="text-sm" dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default EachComment;
