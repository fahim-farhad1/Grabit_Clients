import React from "react";

const CenterHeaderText = ({ firstWord, secundWord, content }) => {
  return (
    <div className="text-center space-y-2 w-[400px] flex flex-col items-center mx-auto mt-10">
      <p className="text-secondary font-semibold text-2xl">
        {firstWord} <span className="text-primary">{secundWord}</span>
      </p>
      <p>{content} </p>
    </div>
  );
};

export default CenterHeaderText;
