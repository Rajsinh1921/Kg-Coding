import React, { useContext } from "react";
import Card from "./Card";
import { PostListContext } from "../ContextAPI/post-list-store";

function Postlists() {
  const { postList } = useContext(PostListContext);
  return (
    <>
      {postList.map((post, index) => (
        <Card key={index} post={post} />
      ))}
    </>
  );
}

export default Postlists;
