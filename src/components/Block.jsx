import React from "react";
import { BigBlock } from "./BigBlock";
import { SmallBlock } from "./SmallBlock";
import "../styles/Block.css";

export const Block = (props) => {
  if (props.size == "small")
    return <SmallBlock title={props.title} image={props.image}></SmallBlock>;
  else if (props.size == "big")
    return <BigBlock title={props.title} image={props.image}></BigBlock>;
};
