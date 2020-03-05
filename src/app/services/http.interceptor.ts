import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpParams
} from "@angular/common/http";
import { Observable } from "rxjs";
import { take, concatMap, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";

@Injectable()
export class InterceptorService implements HttpInterceptor {
    constructor() {}
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        let reqClone = request.clone({
            url: request.url,
            setHeaders: {
                // Accept: "application/json, text/plain, */*",
                // "Access-Control-Allow-Origin":"https://namconchuot.zendesk.com",
                // "Access-Control-Allow-Credentials": "true",
                // "Access-Control-Allow-Methods": "*",
                Authorization:
                    "Bearer 2a67c3760e278a998dac8333c0f2d8db5e8239e9adcdcebab60f2685cdbe8838",
                // Authorization: "Basic dHJ1b25nLnRoaS5oYW5oOTFAZ21haWwuY29tL3Rva2VuOjFNa2ZmQlA4bUd4aUpLcG9qV2ZTQ2dac2FDOEU3bUZXTnJaNVZON0w==="
            }
        });
        return next.handle(reqClone);
    }
}
