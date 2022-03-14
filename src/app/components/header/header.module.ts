import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HeaderComponent } from './header.component';
import { HeaderButtonsModule } from '../header-buttons/header-buttons.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HeaderButtonsModule,
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {}
