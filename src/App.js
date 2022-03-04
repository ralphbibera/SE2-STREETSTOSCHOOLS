import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import Admin from "./Admin";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "./redux/actionCreators/postActionCreators";
import NavBarComponentMain from "./Components/NavBar/NavBar";
import { useLocation } from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Posts from "./Components/Posts";
import Content from "./Components/Content/Content";
import Donate from "./Components/Donate/Donate";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Contacts from "./Components/Contact/Contacts";
import Register from "./Components/Register/Register";
import Blog from "./Components/Blog/Blog";

import ManageComments from "./Admin/Dashboard/ManageComments/manageComments";
import ManageAboutUs from "./Admin/Dashboard/ManageAboutUs/manageAboutUs";

function App() {
  const { pathname } = useLocation();
  const isLoading = useSelector((state) => state.post.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(fetchPosts());
    }
  }, [isLoading, dispatch]);

  return (
    <div className="App">
      <ToastContainer />
      <Switch>
        {!pathname.includes("/admin") ? <NavBarComponentMain /> : null}
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/blog">
          <Blog />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contacts">
          <Contacts />
        </Route>

        <Route path="/donate">
          <Donate />
        </Route>

        <Route path="/posts/" component={() => <Posts />} />

        <Route path="/blog/:postId" component={() => <Content />} />

        <Route path="/admin" component={() => <Admin />} />
        {!pathname.includes("/admin") ? <Footer /> : null}
      </Switch>
    </div>
  );
}

export default App;
