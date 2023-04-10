# Breadcrumbs

Use this library if you need a simple `routerLink` based `breadcrumb component`.

## Installation

With npm:

```Shell
npm i @elemental-concept/breadcrumbs
```

With Yarn:

```Shell
yarn add @elemental-concept/breadcrumbs
```

Add the `BreadcrumbsModule` into the component imports to be able to use it.
Make sure the project is using `Routing`.

```typescript
import { BreadcrumbsModule } from '@elemental-concept/breadcrumbs';

@NgModule({
  declarations: [ ... ],
  imports: [
    ...,
    BreadcrumbsModule
  ],
  providers: [ ],
  bootstrap: [ ... ]
})
export class TestModule { }
```

## Usage

To use the component you only need a list of crumbs.

```typescript
import { Component } from '@angular/core';

import { Breadcrumb } from '@elemental-concept/breadcrumbs';

@Component({
  selector: 'app-breadcrumbs-page',
  template: '<breadcrumbs [breadcrumbs]="breadcrumbs" separator="/"></breadcrumbs>',
  styleUrls: [ './breadcrumbs-page.component.scss' ]
})
export class BreadcrumbsPageComponent {
  breadcrumbs: Breadcrumb[] = [
    { label: 'Home', url: '/' },
    { label: 'Breadcrumb Example', url: null }
  ];
}
```

No spaces are added by default, so the output will be:
```text
Home|Breadcrumb Example
```

## Style

To change the css style just use css variables into your main `style.scss` file or into your component.
Here the default values:

```scss
:root {
  --breadcrumb-inactive-color: black;
  --breadcrumb-active-color: lightgray;
  --breadcrumb-separator-color: black;
  --breadcrumb-separator-padding: 8px;
  --breadcrumb-text-margin: 0;
  --breadcrumb-text-font-family: "Helvetica", sans-serif;
}
// OR
:host {
  --breadcrumb-inactive-color: black;
  --breadcrumb-active-color: lightgray;
  --breadcrumb-separator-color: black;
  --breadcrumb-separator-padding: 8px;
  --breadcrumb-text-margin: 0;
  --breadcrumb-text-font-family: "Helvetica", sans-serif;
}
```
