import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injectable } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { ExcerciseComponent } from "./excercise/excercise.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ApiFAQComponent } from "./api-faq/api-faq.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { InterceptorService } from "./services/http.interceptor";
import { RingComponent } from './ring/ring.component';

@NgModule({
    declarations: [
        AppComponent,
        ExcerciseComponent,
        FooterComponent,
        HeaderComponent,
        SidebarComponent,
        ApiFAQComponent,
        RingComponent
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorService,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
