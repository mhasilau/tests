import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInfoModule } from 'src/app/components/user-info/user-info.module';
import { SettingsComponent } from './settings.component';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    UserInfoModule,
  ],
  exports: [SettingsComponent]
})
export class SettingsModule { }
