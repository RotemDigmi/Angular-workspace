import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { Company } from '../models/company.model';
import { Coupon } from '../models/coupon.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  public constructor(private httpClient: HttpClient) {}

  public addCoupon(coupon: Coupon): Observable<string> {
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token')!);
    let options = { headers: theHeaders, responseType: 'text' as const };
    return this.httpClient.post(
      'http://localhost:8080/api/company/addCoupon',
      coupon,
      options
    );
  }

  public updateCoupon(coupon: Coupon, couponID: Number): Observable<string> {
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token')!);
    let options = { headers: theHeaders, responseType: 'text' as const };
    return this.httpClient.put(
      'http://localhost:8080/api/company/updateCoupon/' + couponID,
      coupon,
      options
    );
  }

  public deleteCoupon(couponID: Number): Observable<string> {
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token')!);
    let options = { headers: theHeaders, responseType: 'text' as const };
    return this.httpClient.delete(
      'http://localhost:8080/api/company/deleteCoupon/' + couponID,
      options
    );
  }

  public getAllCoupons(): Observable<Coupon[]> {
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token')!);
    let options = { headers: theHeaders };
    return this.httpClient.get<Coupon[]>(
      'http://localhost:8080/api/company/getCoupons/company',
      options
    );
  }

  public getCouponsByCategory(category: Category): Observable<Coupon[]> {
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token')!);
    let options = { headers: theHeaders };
    return this.httpClient.get<Coupon[]>(
      'http://localhost:8080/api/company/getCoupons/category?category=' +
        category,
      options
    );
  }

  public getCouponsByMaxPrice(maxPrice: Number): Observable<Coupon[]> {
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token')!);
    let options = { headers: theHeaders };
    return this.httpClient.get<Coupon[]>(
      'http://localhost:8080/api/company/getCoupons/maxPrice?maxPrice=' +
        maxPrice,
      options
    );
  }

  public getDetails(): Observable<Company> {
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token')!);
    let options = { headers: theHeaders };
    return this.httpClient.get<Company>(
      'http://localhost:8080/api/company/getDetails',
      options
    );
  }

  public getCouponById(couponID: Number): Observable<Coupon> {
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token')!);
    let options = { headers: theHeaders };
    return this.httpClient.get<Coupon>(
      'http://localhost:8080/api/company/getCoupon/' + couponID,
      options
    );
  }
}
