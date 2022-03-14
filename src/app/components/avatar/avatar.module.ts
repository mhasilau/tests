import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar.component';
import {MatInputModule} from '@angular/material/input'


@NgModule({
  declarations: [AvatarComponent],
  imports: [
    CommonModule,
    MatInputModule
  ],
  exports: [AvatarComponent]
})
export class AvatarModule { }
