import { CoreModule } from './../core/core.module';
import { LazyComponent } from './components/lazy/lazy.component';
import { SharedModule } from './../shared/shared.module';
import { LazyRoutes } from './lazy.routing';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        // Modules
        CommonModule,
        SharedModule,
        CoreModule,
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
