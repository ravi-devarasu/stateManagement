import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductServiceService } from '../sevices/product-service.service';
import { SaveProductAPISuccess, invokeProductAPI, invokeSaveProduct, invokeUpdateProductAPI, productGetAPISucess, updateProductAPISuccess } from './product-action';
import { map, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';
import { Appstate } from 'src/app/shared/store/appstate';
import { setAPIStatus } from 'src/app/shared/store/appaction';

@Injectable({
  providedIn: 'root'
})
export class ProductEffectService {

  constructor(private action$: Actions, private productService: ProductServiceService, private appState: Store<Appstate>) { }


  loadAllProduct$ = createEffect(() =>
    this.action$.pipe(ofType(invokeProductAPI),
      switchMap(() => {
        return this.productService.getProduct().pipe(
          map((data) => productGetAPISucess({ allProduct: data }))
        )
      })
    )
  )


  saveProduct$ = createEffect(() =>
    this.action$.pipe(
      ofType(invokeSaveProduct),
      switchMap((action) => {
        this.appState.dispatch(setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } }))
        return this.productService.createProduct(action.payload).pipe(
          map((data) => {
            this.appState.dispatch(setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: 'success' } }))
            return SaveProductAPISuccess({ response: data })
          })
        )
      })
    )
  )


  updateProduct$ = createEffect(() =>
  this.action$.pipe(
    ofType(invokeUpdateProductAPI),
    switchMap((action) => {
      this.appState.dispatch(setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } }))
      return this.productService.updateProduct(action.payload).pipe(
        map((data) => {
          this.appState.dispatch(setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: 'success' } }))
          return updateProductAPISuccess({ response: data })
        })
      )
    })
  )
)


}
