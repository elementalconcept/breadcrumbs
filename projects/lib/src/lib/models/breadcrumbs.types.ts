import { InjectionToken } from '@angular/core';

export interface Breadcrumb {
  label: string;
  url: string | null;
}

export const BREADCRUMB_SEPARATOR = new InjectionToken<string>(
  'BREADCRUMB_SEPARATOR',
  {
    providedIn: 'root',
    factory: () => '|'
  }
);
