import React, { useState } from "react";

export const SmallBlock = ({ title, image }) => {
  const [background, setBackground] = useState(false);

  function handleClick() {
    console.log("CLICKED", title);
    setBackground(!background);
  }

  return (
    <div className="Block SmallBlock" onClick={handleClick}>
      <p className="BlockTitle">{title ? title : "BlockTitle"}</p>
      <img
        className="BlockImage BlockImageSmall"
        alt="IMAGE/GIF"
        src={image}
      ></img>
      {/* {background ? <div className="BlockBackground"></div> : ""} */}
    </div>
  );
};
