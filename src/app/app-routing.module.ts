import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// import { ExcerciseComponent } from "./excercise/excercise.component";
import {ApiFAQComponent} from "./api-faq/api-faq.component";
import {RingComponent} from "./ring/ring.component"

const routes: Routes = [{ path: "", component: RingComponent }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
