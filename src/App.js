import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Switch, Route } from "react-router-dom";

import Admin from "./Admin";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "./redux/actionCreators/postActionCreators";
import NavBarComponentMain from "./Components/NavBar/NavBar";
import Post from "./Components/Blog/Post";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Contacts from "./Components/Contact/Contacts";
import BootstrapCarousel from "./Components/BootstrapCarousel/BootstrapCarousel";
import Register from "./Components/Register/Register";
import Blog from "./Components/Blog/Blog";
import Donate from "./Components/Donate/Donate";


function App() {
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
        <Route exact path="/">
        <div className="content-wrap">
          <NavBarComponentMain/>
          <BootstrapCarousel/>
        </div>
          <Home/>
          <Blog/>
          <Register/>
          <About/>
          <Contacts/>
          <Donate/>
          <Footer/>
        </Route>
        <Route path="/blog/:postId" component={() => <Post />} />
        <Route path="/admin" component={() => <Admin />} />
      </Switch>
    </div>
  );
}

export default App;
