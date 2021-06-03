import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  public constructor(private httpClient: HttpClient) {}

  public addCompany(company: Company): Observable<string> {
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token')!);
    let options = { headers: theHeaders, responseType: 'text' as const };
    let url = 'http://localhost:8080/api/admin/add/company';
    return this.httpClient.post(url, company, options);
  }

  public updateCompany(
    company: Company,
    companyID: Number
  ): Observable<string> {
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token')!);
    let options = { headers: theHeaders, responseType: 'text' as const };
    return this.httpClient.put(
      'http://localhost:8080/api/admin/update/company/' + companyID,
      company,
      options
    );
  }

  public deleteCompany(companyID: Number): Observable<string> {
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token')!);
    let options = { headers: theHeaders, responseType: 'text' as const };
    return this.httpClient.delete(
      'http://localhost:8080/api/admin/delete/company/' + companyID,
      options
    );
  }

  public getAllCompanies(): Observable<Company[]> {
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token')!);
    let options = { headers: theHeaders };
    return this.httpClient.get<Company[]>(
      'http://localhost:8080/api/admin/getAll/company',
      options
    );
  }

  public getOneCompany(companyID: Number): Observable<Company> {
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token')!);
    let options = { headers: theHeaders };
    return this.httpClient.get<Company>(
      'http://localhost:8080/api/admin/getOne/company/' + companyID,
      options
    );
  }

  //=================================================================================

  public addCustomer(customer: Customer): Observable<string> {
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token')!);
    let options = { headers: theHeaders, responseType: 'text' as const };
    return this.httpClient.post(
      'http://localhost:8080/api/admin/add/customer',
      customer,
      options
    );
  }

  public updateCustomer(
    customer: Customer,
    customerID: Number
  ): Observable<string> {
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token')!);
    let options = { headers: theHeaders, responseType: 'text' as const };
    return this.httpClient.put(
      'http://localhost:8080/api/admin/update/customer/' + customerID,
      customer,
      options
    );
  }

  public deleteCustomer(customerID: Number): Observable<string> {
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token')!);
    let options = { headers: theHeaders, responseType: 'text' as const };
    return this.httpClient.delete(
      'http://localhost:8080/api/admin/delete/customer/' + customerID,
      options
    );
  }

  public getAllCustomers(): Observable<Customer[]> {
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token')!);
    let options = { headers: theHeaders };
    return this.httpClient.get<Customer[]>(
      'http://localhost:8080/api/admin/getAll/customer',
      options
    );
  }

  public getOneCustomer(customerID: Number): Observable<Customer> {
    let theHeaders = new HttpHeaders();
    theHeaders = theHeaders.set('token', localStorage.getItem('token')!);
    let options = { headers: theHeaders };
    return this.httpClient.get<Customer>(
      'http://localhost:8080/api/admin/getOne/customer/' + customerID,
      options
    );
  }
}
