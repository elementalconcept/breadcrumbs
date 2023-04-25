import { InjectionToken } from '@angular/core';

export interface Breadcrumb {
  label: string;
  url: string | null;

  queryParams?: Record<string, string> | undefined | null;
}

export const BREADCRUMB_SEPARATOR = new InjectionToken<string>(
  'BREADCRUMB_SEPARATOR',
  {
    providedIn: 'root',
    factory: () => '|'
  }
);
