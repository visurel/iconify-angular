import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IconDirective } from './icon.directive';


@NgModule({
  declarations: [IconDirective],
  imports: [],
  exports: [IconDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IconModule {
}
