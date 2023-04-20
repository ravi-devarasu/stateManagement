import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductGroupComponent } from './product-group/product-group.component';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './state/product-reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffectService } from './state/product-effect.service';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component';




@NgModule({
  declarations: [
    ProductGroupComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    StoreModule.forFeature("getProduct", productReducer),
    EffectsModule.forFeature([ProductEffectService])
    
  ]
})
export class ProductModule { }
