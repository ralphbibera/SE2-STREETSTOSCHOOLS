import { useEffect } from "react";
import { shallowEqual } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { fetchBanners } from "../../redux/actionCreators/bannerActionCreators";
import "../Stylesheets/Banner.css";
import c1 from "../Assets/c1.png";
import c2 from "../Assets/c2.png";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, banners } = useSelector(
    (state) => ({
      isLoading: state.banner.isLoading,
      banners: state.banner.banners,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (isLoading) {
      dispatch(fetchBanners());
    }
  }, [isLoading, dispatch]);

  const myBanners = banners;
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide justify-content-center align content-container"
        data-bs-ride="carousel"
      >
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div className="carousel-inner">
          {myBanners.map((bnrs, index) => (
            <div className="carousel-item active" key={bnrs.bannerId}>
              <img
                src={bnrs.bannerData.image}
                className="d-block w-100 h-100"
                alt="..."
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
