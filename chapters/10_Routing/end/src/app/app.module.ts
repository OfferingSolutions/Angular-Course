import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WithChildrenComponent } from './with-children/with-children.component';
import { WithChildrenOverviewComponent } from './with-children-overview/with-children-overview.component';
import { WithChildrenRecipeComponent } from './with-children-recipe/with-children-recipe.component';
import { AppRoutes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContentComponent,
    AboutComponent,
    ProductComponent,
    ProductDetailsComponent,
    WithChildrenComponent,
    WithChildrenOverviewComponent,
    WithChildrenRecipeComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
