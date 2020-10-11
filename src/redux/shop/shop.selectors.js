import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectCollectionForOverview = createSelector(
  [selectCollections],
  (collections) => (collections ? Object.values(collections) : [])
);

export const selectCollection = (collectionId) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionId] : null
  );

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!!shop.collections
);
