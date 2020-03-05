import { Component, OnInit } from "@angular/core";
import { ApiFAQService } from "./api-faq.service";
import { FormGroup, NgForm } from "@angular/forms";
import { take, map, catchError, filter } from "rxjs/operators";
import { of } from "rxjs";
@Component({
    selector: "app-api-faq",
    templateUrl: "./api-faq.component.html",
    styleUrls: ["./api-faq.component.scss"]
})
export class ApiFAQComponent implements OnInit {
    listFAQ: any;
    listSection: any;
    listPermission: any;
    sub: any;
    constructor(private apiFaq: ApiFAQService) {}
    section_faq: any;
    ngOnInit() {
        this.getListFAQ();
        this.getListSection();
        this.getPermissionGroup();
    }
    getListFAQ(): void {
        this.sub = this.apiFaq
            .getListFAQ()
            .pipe(
                map(data => {
                    return data.value.articles;
                }),
                map(data => {
                    return data.map(el => {
                        return {
                            id: el.id,
                            title: el.title,
                            html_url: el.html_url
                        };
                    });
                })
            )
            .subscribe(result => {
                this.listFAQ = result;
            });
    }
    getListSection() {
        this.apiFaq.getListSection().subscribe(data => {
            this.listSection = data.value.sections;
            this.section_faq = this.listSection[0]['id'];
        });
    }
    getPermissionGroup() {
        this.apiFaq
            .getPermissionGroup()
            .pipe(
                map(data => {
                    return data["value"]["permission_groups"];
                }),
                map(data => {
                    return data.map(el => {
                        return {
                            id: el.id,
                            name: el.name
                        };
                    });
                })
            )
            .subscribe(result => {
                this.listPermission = result;
            });
    }
    onAddArticle(articleForm: NgForm) {
        let data = articleForm.value;
        let body = {
            article: {
                title: data["title_faq"],
                name: data["title_faq"],
                body: data["content_faq"],
                locale: "en-us",
                user_segment_id: null,
                permission_group_id: 900000018826
            },
            notify_subscribers: false
        };
        this.apiFaq
            .postNewFAQ(body, data["section_faq"])
            .pipe(
                take(1),
                map(data => {
                    return data.value.article;
                })
            )
            .subscribe(res => {
                this.listFAQ.unshift({
                    id: res.id,
                    title: res.title,
                    html_url: res.html_url
                });
            });
        articleForm.reset();
    }
    onClear() {}
    onDelArticle(id: number) {
        this.apiFaq
            .archiveArticle(id)
            .pipe(take(1))
            .subscribe(res => {
                this.listFAQ = this.listFAQ.filter(res => res.id !== id);
            });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
