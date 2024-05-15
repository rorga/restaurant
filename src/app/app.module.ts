import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MenuSectionComponent } from './shared/components/menu-section/menu-section.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { MenuListItemComponent } from './shared/components/menu-list-item/menu-list-item.component';
import { ModalGenericComponent } from './shared/components/modals/modal-generic/modal-generic.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MenuSectionComponent,
    MenuPageComponent,
    MenuListItemComponent,
    ModalGenericComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
