import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';
import { ModalGenericComponent } from '../components/modals/modal-generic/modal-generic.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalComponentRef: any;
  private isModalOpen: boolean = false;

  constructor(
    private resolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector
  ) { }

  openModal(title: string, content: any): void {
    if (this.isModalOpen) return; // Evitar abrir múltiples modales simultáneamente

    // Crear una fábrica de componentes para el modal dinámico
    const factory = this.resolver.resolveComponentFactory(ModalGenericComponent);

    // Crear un componente modal dinámico
    this.modalComponentRef = factory.create(this.injector);

    // Establecer las propiedades del modal
    this.modalComponentRef.instance.title = title;

    // Adjuntar el componente al DOM
    this.applicationRef.attachView(this.modalComponentRef.hostView);
    const domElem = (this.modalComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    // Mostrar el modal
    document.body.style.overflow = 'hidden'; // Bloquear el scroll del cuerpo
    this.isModalOpen = true;

    // Suscribirse al evento de cierre del modal
    this.modalComponentRef.instance.close.subscribe(() => {
      this.closeModal();
    });

    // Insertar el contenido en el cuerpo del modal
    const modalBody = domElem.querySelector('.modal-body');
    modalBody!.innerHTML = content;
  }

  closeModal(): void {
    if (this.modalComponentRef) {
      this.applicationRef.detachView(this.modalComponentRef.hostView);
      this.modalComponentRef.destroy();
      document.body.style.overflow = ''; // Restaurar el scroll del cuerpo
      this.isModalOpen = false;
    }
  }
}
