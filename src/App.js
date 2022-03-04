import "./App.css";
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
import ManageArchives from './Admin/julius/manageArchives';
import ManageFeatured from './Admin/julius/manageFeatured';
import ManageBanner from './Admin/julius/manageBanner';


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
      <ManageBanner/>
      <ManageFeatured/>
      <ManageArchives/>
      <ToastContainer />
      <Switch>
        <Route exact path="/">
          <NavBarComponentMain/>
          <Home />
          
          <Footer/>
          
        </Route>
        <Route path="/blog/:postId" component={() => <Post />} />
        <Route path="/admin" component={() => <Admin />} />
      </Switch>
      
         
          
    </div>
  );
  
}

export default App;
