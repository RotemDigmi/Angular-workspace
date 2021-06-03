import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { Coupon } from '../models/coupon.model';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  public constructor(private httpClient: HttpClient) {}

  public purchaseCoupon(couponId: Number): Observable<string> {
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token')!);
    let options = { headers: theHeaders, responseType: 'text' as const };
    return this.httpClient.post(
      'http://localhost:8080/api/customer/purchase/' + couponId,
      null,
      options
    );
  }

  public getAllCoupons(): Observable<Coupon[]> {
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token')!);
    let options = { headers: theHeaders };
    return this.httpClient.get<Coupon[]>(
      'http://localhost:8080/api/customer/getAllCoupons',
      options
    );
  }

  public getCouponsByCategory(category: Category): Observable<Coupon[]> {
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token')!);
    let options = { headers: theHeaders };
    return this.httpClient.get<Coupon[]>(
      'http://localhost:8080/api/customer/getAll/category?category=' + category,
      options
    );
  }

  public getCouponsByMaxPrice(maxPrice: Number): Observable<Coupon[]> {
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token')!);
    let options = { headers: theHeaders };
    return this.httpClient.get<Coupon[]>(
      'http://localhost:8080/api/customer/getAll/maxPrice?maxPrice=' + maxPrice,
      options
    );
  }

  public getDetails(): Observable<Customer> {
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token')!);
    let options = { headers: theHeaders };
    return this.httpClient.get<Customer>(
      'http://localhost:8080/api/customer/get/details',
      options
    );
  }
}
