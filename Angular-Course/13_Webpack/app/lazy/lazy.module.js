var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CoreModule } from './../core/core.module';
import { LazyComponent } from './components/lazy/lazy.component';
import { SharedModule } from './../shared/shared.module';
import { LazyRoutes } from './lazy.routing';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
var LazyModule = (function () {
    function LazyModule() {
    }
    return LazyModule;
}());
LazyModule = __decorate([
    NgModule({
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
        providers: [],
        exports: []
    })
], LazyModule);
export { LazyModule };
//# sourceMappingURL=lazy.module.js.map