import React, { useReducer, createContext } from "react";

export const PostListContext = createContext([
  {
    postList: [],
    addPost: () => {},
    deletePost: () => {},
  },
]);

const postListReducer = (currentPostList, action) => {
  return currentPostList;
};

function PostListProvider({ children }) {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
}

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: `MSM divya che`,
    body: `MSM na divyata no anubhav je ne thay eene j khabar pade ke su mal hath ma avyo che `,
    tags: [`MSM`, `Divya`, `Stsang`],
    reactions: `1921`,
    userId: `user-101`,
  },
  {
    id: 2,
    title: `Jobs`,
    body: `The current market is so bad that I have never seen such bad market in my life and I have been working in the industry for 35 years`,
    tags: [`Strugales`, `GodHelpUs`, `resession`],
    reactions: `100`,
    userId: `user-14`,
  },
];
export default PostListProvider;
