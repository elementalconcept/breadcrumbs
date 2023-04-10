import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BreadcrumbsModule } from '@elemental-concept/breadcrumbs';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule,

    BreadcrumbsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
