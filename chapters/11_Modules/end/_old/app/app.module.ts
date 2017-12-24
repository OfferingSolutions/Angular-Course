import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { AppRoutes } from './app.routes';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule,
        // RouterModule.forRoot(AppRoutes, { preloadingStrategy: PreloadAllModules })
        RouterModule.forRoot(AppRoutes),
        CoreModule,//.forRoot(),
        HomeModule,
        LayoutModule
    ],

    declarations: [
        AppComponent
    ],

    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
