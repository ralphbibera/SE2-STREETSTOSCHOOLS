import "../Stylesheets/Banner.css";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "../../config/firebase";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  const banners = firestore.collection("banners");
  const bannerQuery = banners.limit(30);
  const [bannerList] = useCollectionData(bannerQuery);

  return (
    <div>
      <Carousel>
        {bannerList ? (
          bannerList.map((banners) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={banners.image}
                alt="First slide"
              />
            </Carousel.Item>
          ))
        ) : (
          <>Loading</>
        )}
      </Carousel>
    </div>
  );
};

export default Banner;
