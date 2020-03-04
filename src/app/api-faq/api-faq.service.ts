import { Injectable } from "@angular/core";
import { HttpService, HttpReqOptions } from "../services/http.service";
import { HttpHeaders, HttpParams, HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { config } from "rxjs";
@Injectable({
    providedIn: "root"
})
export class ApiFAQService {
    constructor(private http: HttpService) {}
    getListFAQ() {
        return this.http.send(
            "GET",
                environment.root +
                "api/v2/help_center/en-us/articles.json",
            {}
        );
    }
    getListSection() {
        return this.http.send(
            "GET",
                environment.root +
                "api/v2/help_center/sections.json",
            {}
        );
    }
    postNewFAQ(body, idSection) {
        const reqOptions: HttpReqOptions = {
            body: body
        };
        return this.http.send(
            "POST",
                environment.root +
                "api/v2/help_center/sections/" +
                idSection +
                "/articles.json",
            reqOptions
        );
    }
    getPermissionGroup() {
        return this.http.send(
            "GET",
                environment.root +
                "api/v2/guide/permission_groups.json",
            {}
        );
    }
    archiveArticle(id) {
        return this.http.send(
            "DELETE",
                environment.root +
                "api/v2/help_center/articles/" +
                id +
                ".json",
            {}
        );
    }
}
