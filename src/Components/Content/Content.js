import { Container, Col, Row } from "react-bootstrap";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router";
import { firestore } from "../../config/firebase";
import "../Stylesheets/Content.css";
import bg from "../Assets/bg.png";
import CommentForm from "./CommentForm";


const Post = () => {
  const { postId } = useParams();

  const { isLoading, posts } = useSelector(
    (state) => ({ isLoading: state.post.isLoading, posts: state.post.posts }),
    shallowEqual
  );

  const post = firestore.collection("posts");
  const postQuery = post.doc(postId);
  const [postList] = useDocumentData(postQuery);
  
  if (isLoading) {
    return <div>Loading Post</div>;
  }

  if (postList === undefined) {
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
    <div
      className="bg_image content-container"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover"
      }}>
      <div className="content-body">
        <div className="container-md">
          <h1 className="content-title" style={{ fontStyle: "5vw" }}>
            {postList.title}
          </h1>
          <p className="content-author-date" style={{ fontStyle: "1vw" }}>
            By {postList.author} |{" "}
            {new Date(
              postList.date.seconds * 1000
            ).toLocaleDateString("en-US", { timeZone: "UTC" })}
          </p>
          <img src={postList.image} style={{ width: "100%" }} />
          <p className="content-paragraph" style={{ fontStyle: "3vw" }}>
            {postList.description}
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