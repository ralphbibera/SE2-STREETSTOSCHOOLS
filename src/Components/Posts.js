import React from "react";
import { firestore } from "../config/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Posts = () => {
  const posts = firestore.collection("posts");
  const postQuery = posts.limit(30);
  const [postList] = useCollectionData(postQuery);

  return postList ? (
    postList.map((post) => (
      <div>
        <h1>{post.title}</h1>
        <img src={post.image} />
      </div>
    ))
  ) : (
    <>Loading</>
  );
};

export default Posts;
