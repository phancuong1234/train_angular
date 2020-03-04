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
                Accept: "*/*",
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization:
                    "Bearer 2a67c3760e278a998dac8333c0f2d8db5e8239e9adcdcebab60f2685cdbe8838"
            }
        });
        return next.handle(reqClone);
    }
}
