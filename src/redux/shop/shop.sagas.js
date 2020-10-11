import { call, put, takeEvery } from "redux-saga/effects";
import shopActionTypes from "./shop.types";

import {
  convertCollectionsSnapshotToMap,
  db,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shop.actions";

export function* fetchCollectionsAsync() {
  try {
    const collectionsRef = db.collection("collections");
    const snapshot = yield collectionsRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );

    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
