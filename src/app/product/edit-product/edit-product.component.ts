import { Component, OnInit } from '@angular/core';
import { Product } from '../state/product';
import { Store, select } from '@ngrx/store';
import { selectProductByID } from '../state/product-selector';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { invokeUpdateProductAPI } from '../state/product-action';
import { selectAppState } from 'src/app/shared/store/appseletor';
import { setAPIStatus } from 'src/app/shared/store/appaction';
import { Appstate } from 'src/app/shared/store/appstate';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  constructor(private store: Store, private route: ActivatedRoute, private router: Router, private appStore: Store<Appstate>) { }
  productAddForm: Product = {
    id: 0,
    title: '',
    type: '',
    cost: 0

  }

  ngOnInit(): void {
    let fetchFormData$ = this.route.paramMap.pipe(
      switchMap((param: any) => {
        var id = Number(param.get('id'));
        console.log('++++++++++++++++===',id);
        
        return this.store.pipe(select(selectProductByID(id)))
      })
    )

    fetchFormData$.subscribe((data) => {
      console.log('data--',data);
      
      if (!!data) {
        this.productAddForm = { ...data }

      } else {
        this.router.navigate(['/'])

      }
    })

  }

  updateAsProduct(): void {

    this.store.dispatch(invokeUpdateProductAPI({ payload: { ...this.productAddForm } }))
    let appState$ = this.appStore.pipe(select(selectAppState))
    appState$.subscribe((data) => {
      if (data.apiStatus === 'success') {
        this.appStore.dispatch(setAPIStatus({ apiStatus: { apiStatus: '', apiResponseMessage: '' } }))
        this.router.navigate(['/'])
      }
    })

  }

}
