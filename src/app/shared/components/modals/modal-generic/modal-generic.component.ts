import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-generic',
  templateUrl: './modal-generic.component.html',
  styles: [`
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1000;
    }
    .modal {
      position: fixed;
      top: 50%;
      left: 50%;
      width: 500px;
      height: 300px;
      transform: translate(-50%, -50%);
      background-color: white;
      z-index: 1001;
      padding: 20px;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    }
    .modal-content {
      max-width: 80%;
      max-height: 80%;
      overflow: auto;
    }
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    .modal-body {
      padding: 10px;
    }
  `]
})
export class ModalGenericComponent {
  @Input() title!: string;
  @Output() close = new EventEmitter<void>();
  @Output() nameSubmitted = new EventEmitter<string>();

  name: string = '';

  submitName(): void {
    this.nameSubmitted.emit(this.name);
    this.close.emit();
  }
}