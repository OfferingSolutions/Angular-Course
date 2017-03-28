import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'lazy', loadChildren: './+lazy/lazy.module#LazyModule' }
];
