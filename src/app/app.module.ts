import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; // Remover ao usar API externa
import { InMemoryDatabase } from './in-memory-database'; // Remover ao usar API externa

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase) // Remover ao usar API externa
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
