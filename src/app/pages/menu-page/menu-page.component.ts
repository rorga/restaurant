import { Component, OnInit } from '@angular/core';
import { MenuListItemModel } from 'src/app/shared/models/menu-item-list';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {

  menus: MenuListItemModel[] = [];
  showModal: boolean = false;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.menus = [
      { Title: 'Menú número 1', IconEnabled: true, ItemsCounter: true, Items: 13 },
      { Title: 'Menú número 2', IconEnabled: true, ItemsCounter: true, Items: 23 },
      { Title: 'Menú número 3', IconEnabled: true, ItemsCounter: true, Items: 56 },
      { Title: 'Menú número 4', IconEnabled: true, ItemsCounter: true, Items: 3 },
      { Title: 'Menú número 5', IconEnabled: true, ItemsCounter: true, Items: 8 },
    ]
  }

  openAddModal(){
    const modalTitle = 'Título Personalizado';
    const modalContent = '<p>Este es el contenido del modal.</p>';
    this.modalService.openModal(modalTitle, modalContent);
  }

  closeModal(){
    this.showModal = false;
  }

}
