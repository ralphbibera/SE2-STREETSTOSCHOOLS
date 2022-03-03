import "../../Stylesheets/table.css";
import { Button, Col, Form, ProgressBar } from "react-bootstrap";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { shallowEqual } from "react-redux";
import { doBanners } from "../../../redux/actionCreators/bannerActionCreators";
import { fetchBanners } from "../../../redux/actionCreators/bannerActionCreators";
import { useHistory } from "react-router";
import useBanners from "../../useBanners";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "../../../config/firebase";

const ManageBanner = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      return toast.warning("Please fill all fields");
    }

    if (!image || image === undefined) {
      return toast.warning("Please select an image");
    }

    if (title.trim().split(" ").length < 2) {
      return toast.warning("Title at least 2 words");
    }

    if (image.size > 5242880) {
      return toast.warning("Max 5MB FOR IMAGE");
    }

    const data = {
      title: title,
      image: "",
      date: new Date(),
    };
    
    dispatch(doBanners(data, image, setProgress));
  };
  
  const banners = firestore.collection("banners");
  const bannerQuery = banners.limit(30).orderBy("date","asc");
  const [bannerList] = useCollectionData(bannerQuery, {idField: 'id'});
  console.log(bannerList);
  return (
    <div>
      <Col className="mx-auto">
        {progress > 0 && progress < 100 ? (
          <>
            <h1>Uploading Post {progress} %</h1>
            <ProgressBar now={progress} max={100} />
          </>
        ) : progress === 100 ? (
          <>
            <h1>Post Uploaded Successfully </h1>
          </>
        ) : (
          <Form onSubmit={handleSubmit} className="p-4">
            <Form.Group controlId="name" className="my-2">
              <Form.Control
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="file" className="my-2">
              <Form.Control
                type="file"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group controlId="btn" className="my-2">
              <Button
                type="submit"
                variant={"dark"}
                bg="dark"
                className="form-control"
              >
                Add Banner
              </Button>
            </Form.Group>
          </Form>
        )}
      </Col>

      {bannerList ? (
        bannerList && bannerList.map((banners, index) => (
          <table key={index}>
            <tbody style={{ fontsize: "15px" }}>
              <tr className="">
                <td>{index + 1}</td>
                <td style={{width: "600px"}}>
                  <img id="banner-img" src={banners.image} />
                </td>
                <td style={{width: "350px"}}>{banners.title}</td>
                <td className="">
                  <Button className="action-buttons edit-btn">Edit</Button>
                  <Button className="action-buttons delete-btn ">Archive</Button>
                </td>
              </tr>
            </tbody>
          </table>
        ))
      ) 
      : (
        <>Loading</>
      ) }
    </div>
  );
};

export default ManageBanner;
