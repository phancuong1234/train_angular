import { Component, OnInit } from "@angular/core";
// import * as $ from ''
@Component({
    selector: "app-excercise",
    templateUrl: "./excercise.component.html",
    styleUrls: ["./excercise.component.scss"]
})
export class ExcerciseComponent implements OnInit {
    color: string = "222222";
    username: string = "avb";
    status: boolean = false;
    constructor() {}

    ngOnInit() {}
    // ngAfterViewInit() {
    //     console.log(this.username.length);
    // }
    reset() {
        this.username = "";
    }
    // onChangeColor($event) {
    //     this.color = (<HTMLInputElement>event.target).value;
    // }
}
