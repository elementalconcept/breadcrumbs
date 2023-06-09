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

Simply add the `import` into the component or add `BreadcrumbsModule` to the `xx.module.ts` to be able to use it.

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

To use the component you only need a simple list of crumbs.

```typescript
import { Component } from '@angular/core';

import { Breadcrumb } from '@elemental-concept/breadcrumbs';

@Component({
  selector: 'app-breadcrumbs-page',
  template: '<ec-breadcrumbs [breadcrumbs]="breadcrumbs" separator="/"></ec-breadcrumbs>',
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
Home/Breadcrumb Example
```

## Style

To change the css style just use css variables into your main `style.scss` file.
Here the default values:

```scss
:root {
  --breadcrumb-inactive-color: black;
  --breadcrumb-active-color: lightgray;
}
```

## Advanced

If you want to change the look and feel of the breadcrumb,
use the `breadcrumb` for both cases or just `no-link` or `link` for the specific case,
and use `separator` for the separator.

```html
  <div class="breadcrumb no-link">
    <p>{{ breadcrumb.label }}</p>
  </div>

  <div class="breadcrumb link">
    <p [routerLink]="breadcrumb.url">{{ breadcrumb.label }}</p>
    <p class="separator">{{ separator }}</p>
  </div>
```
