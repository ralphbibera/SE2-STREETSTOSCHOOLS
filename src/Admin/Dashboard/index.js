import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { auth } from "../../config/firebase";
import { logoutUser } from "../../redux/actionCreators/authActionCreators";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import Register from "../Auth/Register/Register";
import NavbarComponent from "./NavBar/NavbarComponent";
import ManagePost from "./ManagePost/ManagePost";
import ManageBanner from "./ManageBanner/ManageBanner";
import ManageAboutUs from "./ManageAboutUs/ManageAboutUs";
import ManageComments from "./ManageComments/ManageComments";
import ManageArchives from "./ManageArchives/ManageArchives";
import ManageDonation from "./ManageDonation/ManageDonation";
import ManageRecords from "./ManageRecords/ManageRecords";
import ManageFeatured from "./ManageFeatured/ManageFeatured";
import ManageRegistration from "./ManageRegistration/ManageRegistration";


const Dashboard = () => {
  const { path } = useRouteMatch();
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    auth.signOut();
    dispatch(logoutUser());
    toast.success("Logged out Successfully");
    history.push("/admin/login");
  };

  return (
    <div>
      <NavbarComponent />
      <div className="main">
        <Switch>
          <Route exact path={path}>
            <h1>DASHBOARD ADMIN</h1>
            <button type="button" onClick={logout}>
              LOGOUT
            </button>
            <Link to="/admin/dashboard/adduser">Add User</Link>
          </Route>
          <Route
            path={path + "/manage-banner"}
            component={() => <ManageBanner />}
          />
          <Route
            path={path + "/manage-featured"}
            component={() => <ManageFeatured />}
          />
          <Route
            path={path + "/manage-post"}
            component={() => <ManagePost />}
          />
          <Route
            path={path + "/manage-archives"}
            component={() => <ManageArchives />}
          />
          <Route
            path={path + "/manage-comments"}
            component={() => <ManageComments />}
          />
          <Route
            path={path + "/manage-aboutus"}
            component={() => <ManageAboutUs />}
          />
          <Route
            path={path + "/manage-registration"}
            component={() => <ManageRegistration />}
          />
          <Route
            path={path + "/manage-donation"}
            component={() => <ManageDonation />}
          />
          <Route
            path={path + "/manage-records"}
            component={() => <ManageRecords />}
          />
          <Route
            path={path + "/change-donation"}
            component={() => <ManageBanner />}
          />
          <Route
            path={path + "/manage-changepassword"}
            component={() => <ManageBanner />}
          />
          <Route path={path + "/adduser"} component={() => <Register />} />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
