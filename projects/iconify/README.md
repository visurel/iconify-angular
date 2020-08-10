# Iconify for Angular

Angular implementation of [Iconify](https://github.com/iconify/iconify), strongly inspired from [Iconify-React](https://github.com/iconify/iconify-react#icon-packages).

## Installation

If you are using NPM:

`npm install @visurel/iconify-angular`

If you are using Yarn:

`yarn add @visurel/iconify-angular`

This package does not include icons. Icons are split into separate packages that available at NPM. See [Iconify-React](https://github.com/iconify/iconify-react#icon-packages).

## Usage

Assign the icon to an instance variable in the component:

```typescript
import { Component } from '@angular/core';
import home from '@iconify/icons-mdi/home';
import groupAdd from '@iconify/icons-mdi/group-add';
import bellSlash from '@iconify/icons-fa-solid/bell-slash';

@Component({
  selector: 'ic-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  homeIcon = home;
  groupAddIcon = groupAdd;
  bellSlashIcon = bellSlash;
}
```

Use it inside your template:

```html
<ic-icon [icon]="homeIcon"></ic-icon>
<p>This is the inline icon: <ic-icon [icon]="bellSlashIcon" [inline]="true"></ic-icon></p>
```

## Properties

- **icon** [object, required]: icon object from `@iconify/icons-*` packages
- **width** [string | number]: width of icon. Default value is "1em".
- **height** [string | number]: height of icon. Default value is "1em".
- **hFlip** [boolean]: flip icon horizontally
- **vFlip** [boolean]: flip icon vertically
- **flip** [string]: same as hFlip and vFlip. Value is "horizontal", "vertical" or "horizontal,vertical"
- **rotate** [number | string]: rotate icon. Value is number 0-3 (1 = 90deg, 2 = 180deg, 3 = 270deg) or string "90deg", "180deg", "270deg"
- **color** [string] - icon color, usable only for colorless icons. By default colorless icons use currentColor, so you can set color using stylesheet by setting text color. This property can override it.
- **align** [string] - icon alignment. It matters only when width and height are both set and width/height ratio doesn't match icon ratio. Value is a string that includes any of these values separated by comma: horizontal alignment: "left", "center", "right", vertical alignment: "top", "middle", "bottom", slice: "meet", "slice". Example: align="left,middle,slice". Default value is "center,middle,meet"

## Contributing

### Code scaffolding

Run `ng generate component component-name --project iconify` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project iconify`.
> Note: Don't forget to add `--project iconify` or else it will be added to the default project in your `angular.json` file. 

### Build

Run `ng build iconify` to build the project. The build artifacts will be stored in the `dist/` directory.

### Publishing

After building your library with `ng build iconify --prod` (https://v9.angular.io/guide/ivy#maintaining-library-compatibility), go to the dist folder `cd dist/iconify` and run `npm publish`.

### Running unit tests

Run `ng test iconify` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
