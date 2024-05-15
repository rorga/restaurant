import { Component, Input, OnInit } from '@angular/core';
import { MenuListItemModel } from '../../models/menu-item-list';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss']
})
export class MenuListItemComponent implements OnInit {
  @Input() menuListItemConfig: MenuListItemModel = { Title: ''};

  constructor() { }

  ngOnInit(): void {
  }

}
