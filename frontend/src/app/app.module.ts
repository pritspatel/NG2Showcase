import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {DataTableModule} from "primeng/components/datatable/datatable";
import {PaginatorModule} from "primeng/components/paginator/paginator";
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerSearchService} from "./customer-list/customer-search.service";
import {routing} from "./app.routes";

@NgModule({
    declarations: [
        AppComponent,
        CustomerListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        DataTableModule,
        PaginatorModule,
        routing
    ],
    providers: [CustomerSearchService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
