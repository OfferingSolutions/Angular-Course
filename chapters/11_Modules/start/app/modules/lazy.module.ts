import { SharedModule } from './shared.module';
import { RouterModule } from '@angular/router';
import { LazyRoutes } from './../lazy.routing';
import { LazyComponent } from './../components/lazy/lazy.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        // Modules
        CommonModule,
        SharedModule,
        RouterModule.forChild(LazyRoutes)
    ],

    declarations: [

        // Components & directives

        LazyComponent
    ],

    providers: [
        // Services
    ],

    exports: []
})

export class LazyModule { }
