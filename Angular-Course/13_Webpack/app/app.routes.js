export var AppRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' }
];
//# sourceMappingURL=app.routes.js.map