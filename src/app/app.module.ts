import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from 'app.component';
import { DashboardComponent } from 'pages/dashboard/dashboard.component';
import { HeroSearchComponent } from 'pages/dashboard/shares/components/hero-search/hero-search.component';
import { HeroDetailComponent } from 'pages/hero-detail/hero-detail.component';
import { HeroesComponent } from 'pages/heroes/heroes.component';
import { InMemoryDataService } from 'shared/services/in-memory-data.service';

import { SharedModule } from 'shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
