import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('./pages/hero-detail/hero-detail.component').then(
        (load) => load.HeroDetailComponent
      ),
  },
  {
    path: 'heroes',
    loadChildren: () =>
      import('./pages/heroes/heroes.component').then(
        (load) => load.HeroesComponent
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.component').then(
        (load) => load.DashboardComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
