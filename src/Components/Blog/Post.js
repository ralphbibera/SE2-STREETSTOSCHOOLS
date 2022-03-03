import { Container, Col, Row } from "react-bootstrap";
import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router";
import "../Stylesheets/Content.css";
import CommentForm from "./CommentForm";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "../../config/firebase";


const Post = () => {
  const { postId } = useParams();

  const { isLoading, posts } = useSelector(
    (state) => ({ isLoading: state.post.isLoading, posts: state.post.posts }),
    shallowEqual
  );

  const post = firestore.collection("posts");
  const postQuery = post.limit(50).orderBy("date", "asc");
  const [postList] = useCollectionData(postQuery);

  const currentPost =
  postList.length > 0 && postList.find((pst) => pst.id === postId);

  if (isLoading) {
    return <div>Loading Post</div>;
  }



  if (!isLoading && currentPost === undefined) {
    return (
      <Container>
        <Row>
          <Col>
            <h1>NO POST FOUND</h1>
          </Col>
        </Row>
      </Container>
    );
  }

  






  return (
    <div className="main_body">
      <div className="content-body">
        <div className="container-md">
          <h1 className="content-title" style={{ fontStyle: "5vw" }}>
            {currentPost.title}
          </h1>
          <p className="content-author-date" style={{ fontStyle: "1vw" }}>
            By {currentPost.author} |{" "}
            {new Date(
              currentPost.postData.date.seconds * 1000
            ).toLocaleDateString("en-US", { timeZone: "UTC" })}
          </p>
          <img src={currentPost.postData.image} style={{ width: "100%" }} />
          <p className="content-paragraph" style={{ fontStyle: "3vw" }}>
            {currentPost.postData.description}
          </p>
          <hr className="content-line" />
          <h1 className="content-comment-header" style={{ fontStyle: "2vw" }}>
            Comments
          </h1>
          <div className="content-section-comment">
            <h1 style={{ fontStyle: "2vw" }} className="content-name">
              Juan Dela Cruz
            </h1>
            <p style={{ fontStyle: "2vw" }} className="content-comment">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, nulla
              pariatur.
            </p>
          </div>
          <br />
          <div className="content-section-comment">
            <h1 style={{ fontStyle: "2vw" }} className="content-name">
              Juan Dela Cruz
            </h1>
            <p style={{ fontStyle: "2vw" }} className="content-comment">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, nulla
              pariatur.
            </p>
          </div>
          <br />
          <div className="content-section-comment">
            <h1 style={{ fontStyle: "2vw" }} className="content-name">
              Juan Dela Cruz
            </h1>
            <p style={{ fontStyle: "2vw" }} className="content-comment">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, nulla
              pariatur.
            </p>
          </div>
          <br />
          <div className="content-section-comment">
            <h1 style={{ fontStyle: "2vw" }} className="content-name">
              Juan Dela Cruz
            </h1>
            <p style={{ fontStyle: "2vw" }} className="content-comment">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, nulla
              pariatur.
            </p>
          </div>
          <br />
          <h1 className="content-leave-header" style={{ fontStyle: "2vw" }}>
            Leave a comment
          </h1>
          <CommentForm />
        </div>
      </div>
    </div>
  );
};

export default Post;
