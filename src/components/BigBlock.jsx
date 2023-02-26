import React from "react";

export const BigBlock = ({ title, image }) => {
  return (
    <div className="Block BigBlock">
      <p className="BlockTitle">{title ? title : "BlockTitle"}</p>
      <img
        className="BlockImage BlockImageBig"
        alt="IMAGE/GIF"
        src={image}
      ></img>
    </div>
  );
};
