import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) {


  }
 createProduct(payLoad: any) {
    return this.http.post<any>('http://localhost:3000/product', payLoad)
  }
  getProduct() {
    return this.http.get<any>('http://localhost:3000/product')
  }

 
  
  updateProduct(payLoad: any) {
    return this.http.put<any>(`http://localhost:3000/product/${payLoad.id}`, payLoad)
  }
}
