import React from "react";

export const SmallBlock = ({ title, image }) => {
  return (
    <div className="Block SmallBlock">
      <p className="BlockTitle">{title ? title : "BlockTitle"}</p>
      <img
        className="BlockImage BlockImageSmall"
        alt="IMAGE/GIF"
        src={image}
      ></img>
    </div>
  );
};
