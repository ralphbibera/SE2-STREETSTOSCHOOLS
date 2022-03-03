import React from "react";
import { firestore } from "../config/firebase";
import { useCollectionData, useDocumentData } from "react-firebase-hooks/firestore";
import { doc, getDoc } from "firebase/firestore";

const Posts = () => {
  const posts = firestore.collection("posts");
  const postQuery = posts.doc("lqUN2Uttr5CSsrdkrUX1");
  const [postList] = useDocumentData(postQuery);

  console.log(postList);

  return postList ? (
    <div className="content-container">
      <h1>{postList.title}</h1>
      <h1>{postList.id}</h1>
      <h1>{postList.description}</h1>
      <img src={postList.image} alt="Post" />
    </div>
  ) : (
    <>Loading</>
  );
};

export default Posts;
