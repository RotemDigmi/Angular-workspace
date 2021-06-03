import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './components/admin/add-company/add-company.component';
import { AddCustomerComponent } from './components/admin/add-customer/add-customer.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminComponent } from './components/admin/admin.component';
import { CompanyActionsComponent } from './components/admin/company-actions/company-actions.component';
import { CustomerActionsComponent } from './components/admin/customer-actions/customer-actions.component';
import { DeleteCompanyComponent } from './components/admin/delete-company/delete-company.component';
import { DeleteCustomerComponent } from './components/admin/delete-customer/delete-customer.component';
import { GetAllCompaniesComponent } from './components/admin/get-all-companies/get-all-companies.component';
import { GetAllCustomersComponent } from './components/admin/get-all-customers/get-all-customers.component';
import { GetOneCompanyComponent } from './components/admin/get-one-company/get-one-company.component';
import { GetOneCustomerComponent } from './components/admin/get-one-customer/get-one-customer.component';
import { UpdateCompanyComponent } from './components/admin/update-company/update-company.component';
import { UpdateCustomerComponent } from './components/admin/update-customer/update-customer.component';
import { ActionsComponent } from './components/company/actions/actions.component';
import { AddCouponComponent } from './components/company/add-coupon/add-coupon.component';
import { CompanyHomeComponent } from './components/company/company-home/company-home.component';
import { CompanyComponent } from './components/company/company.component';
import { DeleteCouponComponent } from './components/company/delete-coupon/delete-coupon.component';
import { GetAllCouponsComponent } from './components/company/get-all-coupons/get-all-coupons.component';
import { GetCouponByIdComponent } from './components/company/get-coupon-by-id/get-coupon-by-id.component';
import { GetCouponsByCategoryComponent } from './components/company/get-coupons-by-category/get-coupons-by-category.component';
import { GetCouponsByMaxPriceComponent } from './components/company/get-coupons-by-max-price/get-coupons-by-max-price.component';
import { GetDetailsComponent } from './components/company/get-details/get-details.component';
import { UpdateCouponComponent } from './components/company/update-coupon/update-coupon.component';
import { CustomerHomeComponent } from './components/customer/customer-home/customer-home.component';
import { CustomerComponent } from './components/customer/customer.component';
import { FunctionComponent } from './components/customer/function/function.component';
import { GetAllCustomerCouponsByCategoryComponent } from './components/customer/get-all-customer-coupons-by-category/get-all-customer-coupons-by-category.component';
import { GetAllCustomerCouponsByMaxPriceComponent } from './components/customer/get-all-customer-coupons-by-max-price/get-all-customer-coupons-by-max-price.component';
import { GetAllCustomerCouponsComponent } from './components/customer/get-all-customer-coupons/get-all-customer-coupons.component';
import { GetCustomerDetailsComponent } from './components/customer/get-customer-details/get-customer-details.component';
import { PurchaseCouponComponent } from './components/customer/purchase-coupon/purchase-coupon.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'admin-home', component: AdminHomeComponent },
      { path: 'add-company', component: AddCompanyComponent },
      { path: 'update-company', component: UpdateCompanyComponent },
      { path: 'delete-company', component: DeleteCompanyComponent },
      { path: 'get-all-companies', component: GetAllCompaniesComponent },
      { path: 'get-one-company', component: GetOneCompanyComponent },
      { path: 'add-customer', component: AddCustomerComponent },
      { path: 'update-customer', component: UpdateCustomerComponent },
      { path: 'delete-customer', component: DeleteCustomerComponent },
      { path: 'get-all-customers', component: GetAllCustomersComponent },
      { path: 'get-one-customer', component: GetOneCustomerComponent },
      { path: 'company-actions', component: CompanyActionsComponent },
      { path: 'customer-actions', component: CustomerActionsComponent },
    ],
  },
  {
    path: 'company',
    component: CompanyComponent,
    children: [
      { path: 'actions', component: ActionsComponent },
      { path: 'company-home', component: CompanyHomeComponent },
      { path: 'add-coupon', component: AddCouponComponent },
      { path: 'update-coupon', component: UpdateCouponComponent },
      { path: 'delete-coupon', component: DeleteCouponComponent },
      { path: 'get-all-coupons', component: GetAllCouponsComponent },
      {
        path: 'get-coupons-by-category',
        component: GetCouponsByCategoryComponent,
      },
      {
        path: 'get-coupons-by-max-price',
        component: GetCouponsByMaxPriceComponent,
      },
      { path: 'get-coupon-by-id', component: GetCouponByIdComponent },
      { path: 'get-details', component: GetDetailsComponent },
    ],
  },
  {
    path: 'customer',
    component: CustomerComponent,
    children: [
      { path: 'function', component: FunctionComponent },
      { path: 'customer-home', component: CustomerHomeComponent },
      { path: 'purchase-coupon', component: PurchaseCouponComponent },
      {
        path: 'get-all-customer-coupons',
        component: GetAllCustomerCouponsComponent,
      },
      {
        path: 'get-all-customer-coupons-by-category',
        component: GetAllCustomerCouponsByCategoryComponent,
      },
      {
        path: 'get-all-customer-coupons-by-max-price',
        component: GetAllCustomerCouponsByMaxPriceComponent,
      },
      { path: 'get-customer-details', component: GetCustomerDetailsComponent },
    ],
  },
  { path: '', component: LoginComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
