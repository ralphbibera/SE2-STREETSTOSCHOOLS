import "../../Stylesheets/table.css";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import AddPost from "./AddPost";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "../../../config/firebase";

const ManagePost = () => {
  const { path } = useRouteMatch();
  const history = useHistory();

  const post = firestore.collection("posts");
  const postQuery = post.limit(50).orderBy("date", "asc");
  const [postList] = useCollectionData(postQuery);

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <div className="top-buttons container d-flex justify-content-between">
            <Link to="/admin/dashboard/manage-post/addpost">
              <button>New Post</button>
            </Link>
          </div>
          <div className="container">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>IMAGE</th>
                  <th>TITLE</th>
                  <th colSpan={2}>ACTIONS</th>
                </tr>
              </thead>
            </table>
            {postList ? (
              postList && postList.map((post, index) => (
                <table key={index}>
                  <tbody style={{ fontsize: "15px" }}>
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        <Button
                          onClick={() => history.push("/blog/" + post.id)}
                        >
                          <img id="post-img" src={post.image} alt="..."/>
                        </Button>
                      </td>
                      <td>{post.title}</td>
                      <td>
                        <Button className="action-buttons edit-btn">
                          Edit
                        </Button>
                      </td>
                      <td>
                        <Button className="action-buttons delete-btn">
                          Archive
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ))
            ) : (
              <>Loading</>
            )}
          </div>
        </Route>
        <Route path={path + "/addpost"}>
          <AddPost />
        </Route>
      </Switch>
    </div>
  );
};

export default ManagePost;
