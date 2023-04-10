import { Component, Input } from '@angular/core';

import { Breadcrumb, BREADCRUMB_SEPARATOR } from '../../models/breadcrumbs.types';

@Component({
  selector: 'breadcrumbs[breadcrumbs]',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  @Input() breadcrumbs: Breadcrumb[] = [];
  @Input() separator = BREADCRUMB_SEPARATOR;
}
