import React from "react";

const LeftSideHeader = ({ headline1, headline2, subtitle }) => {
  return (
    <div>
      <h1 className="text-2xl text-secondary font-semibold">
        {headline1} <span className="text-primary">{headline2}</span>
      </h1>
      <p className="text-sm">{subtitle}</p>
    </div>
  );
};

export default LeftSideHeader;
