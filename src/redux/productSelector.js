import { createSelector } from "reselect";

const selectProduct = state => state.products;

const selectProducts = createSelector(
  [selectProduct],
  items => items.products
);

export const selectProductItems = (productUrlParam) => {
  return createSelector(
    [selectProducts],
    products => products[productUrlParam]
  )
}