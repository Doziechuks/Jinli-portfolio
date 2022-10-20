import { createSelector } from "reselect";

const selectProduct = state => state.product;

export const selectProducts = createSelector(
  [selectProduct],
  items => items.products
);

export const selectProductItems = (collectionUrlParam) => {
  return createSelector(
    [selectProducts],
    (collections) => collections[collectionUrlParam]
  );
};