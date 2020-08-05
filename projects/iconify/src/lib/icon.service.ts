import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  private icons: Record<string, object> = {};

  register(name: string, icon: object) {
    this.icons[name] = icon;
  }

  get(name: string): object {
    const icon = this.icons[name];
    if (!icon) {
      throw new Error(`[Iconify]: No icon registered for name '${name}'. Call 'IconService.register' to register icons.`);
    }
    return icon;
  }
}
