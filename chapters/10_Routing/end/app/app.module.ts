import { WithChildrenRecipeComponent } from './components/withChildrenRecipe/withChildrenRecipe.component';
import { WithChildrenOverviewComponent } from './components/withChildrenOverview/withChildrenOverview.component';
import { WithChildrenComponent } from './components/withChildren/withChildren.component';
import { ProductDetailsComponent } from './components/productDetails/productDetails.component';
import { ProductComponent } from './components/product/product.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes),
    ],

    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        NavigationComponent,
        ProductDetailsComponent,
        ProductComponent,
        WithChildrenComponent,
        WithChildrenOverviewComponent,
        WithChildrenRecipeComponent
    ],

    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
