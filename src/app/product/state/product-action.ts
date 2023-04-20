import { createAction, props } from "@ngrx/store";

export const invokeProductAPI = createAction(
    "[product API] invoke product get API"
)

export const productGetAPISucess = createAction(
    "[product API] product API Success", props<any>()
)

export const invokeSaveProduct = createAction(
    "[product API] invoke product save API" ,props<any>()
)

export const SaveProductAPISuccess = createAction(
    "[product API] product save API Success" ,props<any>()
)

export const invokeUpdateProductAPI = createAction(
    "[product API] invoke product update API" , props<any>()
)

export const updateProductAPISuccess = createAction(
    "[product API] product update API Success" ,props<any>()
)
