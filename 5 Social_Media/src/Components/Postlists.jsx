import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import LoadingSpinner from "./LoadingSpinner";
import WelcomeMessage from "./WelcomeMessage";
import { PostListContext } from "../ContextAPI/post-list-store";

function Postlists() {
  const { postList, addInitialPosts } = useContext(PostListContext);
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching &&
        postList.map((post, index) => <Card key={index} post={post} />)}
    </>
  );
}

export default Postlists;
