import { WithChildrenRecipeComponent } from './components/withChildrenRecipe/withChildrenRecipe.component';
import { WithChildrenOverviewComponent } from './components/withChildrenOverview/withChildrenOverview.component';
import { WithChildrenComponent } from './components/withChildren/withChildren.component';
import { ProductDetailsComponent } from './components/productDetails/productDetails.component';
import { ProductComponent } from './components/product/product.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'products', component: ProductComponent },
    { path: 'product/:id', component: ProductDetailsComponent },
    {
        path: 'withChildren/:id', component: WithChildrenComponent,
        children: [
            { path: '', component: WithChildrenOverviewComponent },
            { path: 'recipe', component: WithChildrenRecipeComponent }
        ]
    }
];
