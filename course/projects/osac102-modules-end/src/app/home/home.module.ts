import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(HomeRoutes)],
  declarations: [ContentComponent],
  exports: [ContentComponent]
})
export class HomeModule {}
