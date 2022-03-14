import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [NavMenuComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    AppRoutingModule
  ],
  exports: [NavMenuComponent]
})
export class NavMenuModule { }
