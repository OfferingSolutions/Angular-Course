import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WithChildrenComponent } from './with-children/with-children.component';
import { WithChildrenOverviewComponent } from './with-children-overview/with-children-overview.component';
import { WithChildrenRecipeComponent } from './with-children-recipe/with-children-recipe.component';

export const AppRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ContentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  {
    path: 'withChildren/:id',
    component: WithChildrenComponent,
    children: [
      { path: '', component: WithChildrenOverviewComponent },
      { path: 'recipe', component: WithChildrenRecipeComponent }
    ]
  }
];
