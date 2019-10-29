import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { RouterModule } from '@angular/router';
import { LazyRoutes } from './lazy.routing';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [CommonModule, CoreModule, RouterModule.forChild(LazyRoutes)],
  declarations: [MainComponent]
})
export class LazyModule {}
