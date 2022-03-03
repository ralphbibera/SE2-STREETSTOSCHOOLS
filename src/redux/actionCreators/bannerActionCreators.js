import { toast } from "react-toastify";
import { firestore, storage } from "../../config/firebase";
import * as types from "../types/bannerTypes";
import { collection, doc, setDoc } from "firebase/firestore";

//action

const setLoadingBanner = (data) => ({
  type: types.SET_LOADING,
  payload: data,
});

const addBanners = (data) => ({
  type: types.ADD_BANNERS,
  payload: data,
});

const getBanners = (data) => ({
  type: types.SET_BANNERS,
  payload: data,
});

//BANNER POST ACTIONS
export const doBanners = (data, image, setProgress) => (dispatch) => {
  firestore
    .collection("banners")
    .add(data)
    .then(async (res) => {
      const document = await res.get();
      const bannerData = { data: document.data(), id: document.id };
      const uploadRef = storage.ref("banners/" + document.id);
      const newDocRef = doc(collection(firestore, "banners"));

      uploadRef.put(image).on(
        "state_change",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          setProgress(progress);
        },
        (err) => {
          console.log(err);
        },
        async () => {
          const url = await uploadRef.getDownloadURL();
          firestore
            .collection("banners")
            .doc(document.id)
            .update({
              image: url,
              id: document.id,
            })
            .then(() => {
              bannerData.data.image = url;
              dispatch(addBanners(bannerData));
              toast.success("Banner Created");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchBanners = () => (dispatch) => {
  dispatch(setLoadingBanner(true));
  firestore
    .collection("banners")
    .get()
    .then((banners) => {
      const allBanners = [];
      banners.forEach((banner) => {
        const data = { bannerData: banner.data(), bannerId: banner.id };
        allBanners.push(data);
      });

      dispatch(getBanners(allBanners));
      dispatch(setLoadingBanner(false));
    })
    .catch((err) => {
      console.log(err);
      toast.error(err);
    });
};
