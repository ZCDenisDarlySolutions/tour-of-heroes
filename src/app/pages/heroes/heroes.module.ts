import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';

@NgModule({
  declarations: [HeroesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HeroesComponent,
      },
    ]),
  ],
})
export class HeroesModule {}
