import shopActionTypes from "./shop.types";

import {
  convertCollectionsSnapshotToMap,
  db,
} from "../../firebase/firebase.utils";

const {
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
} = shopActionTypes;

const fetchCollectionsStart = () => ({ type: FETCH_COLLECTIONS_START });

const fetchCollectionsSuccess = (collectionsMap) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

const fetchCollectionsFailure = (errorMessage) => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionsRef = db.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionsRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
