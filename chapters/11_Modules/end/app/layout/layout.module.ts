import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [NavigationComponent],
    declarations: [NavigationComponent],
    providers: [],
})
export class LayoutModule { }
