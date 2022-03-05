import { toast } from "react-toastify";
import { firestore, storage } from "../../config/firebase";
import * as types from "../types/recordTypes";

//action
const setLoading = (data) => ({
  type: types.SET_LOADING,
  payload: data,
});

const addRecord = (data) => ({
  type: types.ADD_RECORDS,
  payload: data,
});

const getRecords = (data) => ({
  type: types.SET_RECORDS,
  payload: data,
});

//ACTION CREATORS

export const doRecord = (data, setProgress) => (dispatch) => {
  firestore
    .collection("records")
    .add(data)
    .then(async (res) => {
      const document = await res.get();
      const recordData = { data: document.data(), id: document.id };
      firestore
        .collection("records")
        .doc(document.id)
        .update({
          id: document.id,
        })
        .then(() => {
          dispatch(addRecord(recordData));
          toast.success("Record Created");
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
