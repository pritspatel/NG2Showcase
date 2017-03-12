import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from "./customer-list/customer-list.component";

// Route Configuration
export const routes: Routes = [
    { path: '', component: CustomerListComponent },
    { path: 'customer-list', component: CustomerListComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);