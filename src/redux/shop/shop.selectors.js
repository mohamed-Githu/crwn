import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionForOverview = createSelector(
  [selectCollections],
  collections => Object.values(collections)
)

export const selectCollection = collectionId => (
  createSelector(
    [selectCollections],
    collections => collections[collectionId]
  )
);