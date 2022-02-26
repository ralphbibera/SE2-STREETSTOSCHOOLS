import { useEffect, useState } from "react";
import { firestore } from "../config/firebase";

const useBanners = (collection) => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const unsub = firestore.collection(collection).onSnapshot((snap) => {
      let bannersArray = [];
      snap.forEach((banner) => {
        bannersArray.push({ ...{bannerData: banner.data(),bannerId:banner.id} });
      });
      setBanners(bannersArray);
    });

    return () => unsub;
  }, [collection]);

  return banners;
};

export default useBanners;
