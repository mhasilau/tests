import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { MainPageModule } from './pages/main-page/main-page.module';
import { SettingsModule } from './pages/settings/settings.module';
import { SignInModule } from './pages/sign-in/sign-in.module';
import { SignUpModule } from './pages/sign-up/sign-up.module';
import { NavMenuModule } from './components/nav-menu/nav-menu.module';
import { AvatarModule } from './components/avatar/avatar.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    MainPageModule,
    SettingsModule,
    SignInModule,
    SignUpModule,
    NavMenuModule,
    AvatarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
