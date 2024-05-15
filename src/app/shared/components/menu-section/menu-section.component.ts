import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Section } from '../../models/section.model';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.scss']
})
export class MenuSectionComponent implements OnInit {
  @Input() Id: number = 0;
  @Input() Title: string = "";
  @Output() sectionSelected = new EventEmitter<Section>();
  // Futuro:
  // Input para si tiene icono delante o no
  // Input de si está en negrita o no

  constructor() { }

  ngOnInit(): void {
  }

  onSelect() {
    this.sectionSelected.emit({ Id: this.Id, Title: this.Title });
}

}
