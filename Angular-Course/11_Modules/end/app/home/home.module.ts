import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeRoutes } from './home.routes';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(HomeRoutes)
    ],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }
