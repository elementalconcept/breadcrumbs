import { Component, Inject, Input } from '@angular/core';

import { Breadcrumb, BREADCRUMB_SEPARATOR } from '../../models/breadcrumbs.types';

@Component({
  selector: 'breadcrumbs[breadcrumbs]',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  @Input() breadcrumbs: Breadcrumb[] = [];

  separator: string;

  constructor(@Inject(BREADCRUMB_SEPARATOR) private readonly breadcrumbSeparator: string) {
    this.separator = breadcrumbSeparator;
  }
}
