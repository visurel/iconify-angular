import { IconService } from './../../projects/iconify/src/lib/icon.service';
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

  constructor(iconService: IconService){
    iconService.registerAll({
      home,
      'group-add': groupAdd,
      'bell-slash': bellSlash
    });
  }
}
