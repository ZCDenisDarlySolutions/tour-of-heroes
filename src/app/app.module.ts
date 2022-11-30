import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from 'app.component';
import { DashboardModule } from 'pages/dashboard/dashboard.module';
import { HeroDetailModule } from 'pages/hero-detail/hero-detail.module';

import { HeroesModule } from 'pages/heroes/heroes.module';
import { InMemoryDataService } from 'shared/services/in-memory-data.service';

import { SharedModule } from 'shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,
    DashboardModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeroesModule,
    HeroDetailModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
