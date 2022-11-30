import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('./pages/hero-detail/hero-detail.module').then(
        (load) => load.HeroDetailModule
      ),
  },
  {
    path: 'heroes',
    loadChildren: () =>
      import('./pages/heroes/heroes.module').then((load) => load.HeroesModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (load) => load.DashboardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
