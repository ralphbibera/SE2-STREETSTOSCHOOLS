import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Home from "./Components/Home/index";
import Admin from "./Admin";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "./redux/actionCreators/postActionCreators";
import NavBarComponentMain from "./Components/NavBar/NavBar";
import Post from "./Components/Blog/Post";
import Footer from "./Components/Footer/Footer";
import Posts from "./Components/Posts";
import { useLocation } from "react-router-dom";

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
        <Route path="/posts/" component={() => <Posts />} />
        <Route path="/blog/:postId" component={() => <Post />} />
        <Route path="/admin" component={() => <Admin />} />
        {!pathname.includes("/admin") ? <Footer /> : null}
      </Switch>
    </div>
  );
}

export default App;
