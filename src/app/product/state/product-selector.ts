import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "./product";

export const selectProduct = createFeatureSelector<Product[]>("getProduct")

export const selectProductByID = (productId: number) => {

    return createSelector(selectProduct, (product: Product[]) => {
        const prodId = product.filter(_ => _.id == productId);
        if (prodId.length == 0) {
            return null;
        }
        return prodId[0]
    })
}