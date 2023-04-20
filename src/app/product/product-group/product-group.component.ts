import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { invokeProductAPI } from '../state/product-action';
import { selectProduct } from '../state/product-selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-group',
  templateUrl: './product-group.component.html',
  styleUrls: ['./product-group.component.scss']
})
export class ProductGroupComponent implements OnInit {

  constructor(private store: Store, private router: Router) { }

  allProduct$ = this.store.pipe(select(selectProduct))

  ngOnInit(): void {
    this.store.dispatch(invokeProductAPI())
  }

  addAsProduct(type: string): void {
    if (type === 'add'){
      this.router.navigate(['/add'])
    } else{
      this.router.navigate(['/add'])
    }
  }

}
