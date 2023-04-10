import { Component } from '@angular/core';

import { Breadcrumb } from '@elemental-concept/breadcrumbs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  breadcrumbs: Breadcrumb[] = [
    {label: 'Home', url: '/'},
    {label: 'Breadcrumb Example', url: null}
  ];
}
