import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatButtonModule } from '@angular/material/button';
import { HeaderButtonsComponent } from './header-buttons.component';

@NgModule({
  declarations: [HeaderButtonsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [HeaderButtonsComponent]
})
export class HeaderButtonsModule {}
