import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompanyActionsComponent } from './components/admin/company-actions/company-actions.component';
import { CustomerActionsComponent } from './components/admin/customer-actions/customer-actions.component';
import { ActionsComponent } from './components/company/actions/actions.component';
import { PurchaseCouponComponent } from './components/customer/purchase-coupon/purchase-coupon.component';
import { GetAllCouponsComponent } from './components/company/get-all-coupons/get-all-coupons.component';
import { GetCouponsByCategoryComponent } from './components/company/get-coupons-by-category/get-coupons-by-category.component';
import { GetCouponsByMaxPriceComponent } from './components/company/get-coupons-by-max-price/get-coupons-by-max-price.component';
import { GetDetailsComponent } from './components/company/get-details/get-details.component';
import { AddCouponComponent } from './components/company/add-coupon/add-coupon.component';
import { UpdateCouponComponent } from './components/company/update-coupon/update-coupon.component';
import { DeleteCouponComponent } from './components/company/delete-coupon/delete-coupon.component';
import { GetCouponByIdComponent } from './components/company/get-coupon-by-id/get-coupon-by-id.component';
import { AddCompanyComponent } from './components/admin/add-company/add-company.component';
import { UpdateCompanyComponent } from './components/admin/update-company/update-company.component';
import { DeleteCompanyComponent } from './components/admin/delete-company/delete-company.component';
import { GetAllCompaniesComponent } from './components/admin/get-all-companies/get-all-companies.component';
import { GetOneCompanyComponent } from './components/admin/get-one-company/get-one-company.component';
import { AddCustomerComponent } from './components/admin/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './components/admin/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './components/admin/delete-customer/delete-customer.component';
import { GetAllCustomersComponent } from './components/admin/get-all-customers/get-all-customers.component';
import { GetOneCustomerComponent } from './components/admin/get-one-customer/get-one-customer.component';
import { AdminComponent } from './components/admin/admin.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { CompanyHomeComponent } from './components/company/company-home/company-home.component';
import { CompanyHeaderComponent } from './components/company/company-header/company-header.component';
import { CustomerHeaderComponent } from './components/customer/customer-header/customer-header.component';
import { CustomerHomeComponent } from './components/customer/customer-home/customer-home.component';
import { FunctionComponent } from './components/customer/function/function.component';
import { GetAllCustomerCouponsComponent } from './components/customer/get-all-customer-coupons/get-all-customer-coupons.component';
import { GetAllCustomerCouponsByCategoryComponent } from './components/customer/get-all-customer-coupons-by-category/get-all-customer-coupons-by-category.component';
import { GetAllCustomerCouponsByMaxPriceComponent } from './components/customer/get-all-customer-coupons-by-max-price/get-all-customer-coupons-by-max-price.component';
import { GetCustomerDetailsComponent } from './components/customer/get-customer-details/get-customer-details.component';

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    Page404Component,
    LoginComponent,
    CompanyActionsComponent,
    CustomerActionsComponent,
    ActionsComponent,
    PurchaseCouponComponent,
    GetAllCouponsComponent,
    GetCouponsByCategoryComponent,
    GetCouponsByMaxPriceComponent,
    GetDetailsComponent,
    AddCouponComponent,
    UpdateCouponComponent,
    DeleteCouponComponent,
    GetCouponByIdComponent,
    AddCompanyComponent,
    UpdateCompanyComponent,
    DeleteCompanyComponent,
    GetAllCompaniesComponent,
    GetOneCompanyComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    GetAllCustomersComponent,
    GetOneCustomerComponent,
    AdminComponent,
    CompanyComponent,
    CustomerComponent,
    AdminHeaderComponent,
    AdminHomeComponent,
    CompanyHomeComponent,
    CompanyHeaderComponent,
    CustomerHeaderComponent,
    CustomerHomeComponent,
    FunctionComponent,
    GetAllCustomerCouponsComponent,
    GetAllCustomerCouponsByCategoryComponent,
    GetAllCustomerCouponsByMaxPriceComponent,
    GetCustomerDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [LayoutComponent],
})
export class AppModule {}
