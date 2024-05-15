import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/shared/models/section.model';

export enum MenuIds {
  MENU = 3
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  MenuIds = MenuIds;

  sections: Section[] = [];
  selectedSection?: Section;

  constructor() { }


  ngOnInit(): void {
    this.sections = [
      { Id: 1,Title: 'Sección 1'},
      { Id: 2,Title: 'Sección 2'},
      { Id: 3,Title: 'Menú'},
      { Id: 4,Title: 'Ajustes'}
    ]
  }

  onSelectedMenuSection(event: Section) {
    if(event)
    this.selectedSection = event;
  }

  

}
