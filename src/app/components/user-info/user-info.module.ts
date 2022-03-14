import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInfoComponent } from './user-info.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [UserInfoComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [UserInfoComponent]
})
export class UserInfoModule { }
