import { Component, OnInit } from '@angular/core';
import { Product } from '../state/product';
import { Store, select } from '@ngrx/store';
import { invokeSaveProduct } from '../state/product-action';
import { Appstate } from 'src/app/shared/store/appstate';
import { selectAppState } from 'src/app/shared/store/appseletor';
import { Router } from '@angular/router';
import { setAPIStatus } from 'src/app/shared/store/appaction';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private store: Store, private appStore: Store<Appstate>, private router: Router,) { }

  productAddForm: Product = {
    id: 0,
    title: '',
    type: '',
    cost: 0

  }

  ngOnInit(): void {
  }

  saveAsProduct(): void {
    
    this.store.dispatch(invokeSaveProduct({ payload: { ...this.productAddForm } }))
    
    let appState$ = this.appStore.pipe(select(selectAppState))
    appState$.subscribe((data) => {
      if (data.apiStatus === 'success') {
        this.appStore.dispatch(setAPIStatus({ apiStatus: { apiStatus: '', apiResponseMessage: '' } }))
        this.router.navigate(['/'])
      }
    })
  }
}
