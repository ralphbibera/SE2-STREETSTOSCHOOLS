import "../../Stylesheets/table.css";
import { deleteBanner } from "../../../redux/actionCreators/bannerActionCreators";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "../../../config/firebase";
import AddBanner from "./AddBanner";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";

const ManageBanner = () => {
  const { path } = useRouteMatch();

  const banners = firestore.collection("banners");
  const bannerQuery = banners.limit(30).orderBy("date", "asc");
  const [bannerList] = useCollectionData(bannerQuery, { idField: "id" });

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <div className="top-buttons container d-flex justify-content-between">
            <Link to="/admin/dashboard/manage-banner/addbanner">
              <button>New Banner</button>
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
              {bannerList ? (
                bannerList &&
                bannerList.map((banners, index) => (
                  <tbody key={index}>
                    <tr>
                      <td>{index + 1}</td>
                      <td style={{ width: "600px" }}>
                        <img id="banner-img" src={banners.image} alt="Banner" />
                      </td>
                      <td style={{ width: "350px" }}>{banners.title}</td>
                      <td>
                        <button
                          className="action-buttons delete-btn"
                          onClickCapture={() => deleteBanner(banners.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))
              ) : (
                <tbody>
                  <tr>
                    <td>Loading</td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
        </Route>
        <Route path={path + "/addbanner"}>
          <AddBanner />
        </Route>
      </Switch>
    </div>
  );
};

export default ManageBanner;
