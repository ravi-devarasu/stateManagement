import { createReducer, on } from "@ngrx/store";
import { Product } from "./product";
import { SaveProductAPISuccess, productGetAPISucess, updateProductAPISuccess } from "./product-action";



export const intialProductState: Product[] = [];

export const productReducer = createReducer(
    intialProductState,
    on(productGetAPISucess, (productState, { allProduct }) => {
             return allProduct;
    }),
    on(SaveProductAPISuccess, (productState, { response }) => {
        let newState = [...productState];
        newState.unshift(response)
        return newState;
    }),
    
    on(updateProductAPISuccess, (productState, { response }) => {
        let newState = productState.filter(_ => _.id !== response.id);
        newState.unshift(response)
        return newState;
    }),
)