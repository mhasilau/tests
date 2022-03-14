import { Component } from '@angular/core';


@Component({
  selector: 'app-header-buttons',
  templateUrl: './header-buttons.component.html',
  styleUrls: ['./header-buttons.component.scss']
})
export class HeaderButtonsComponent {
  public isLogin: boolean = false;

  login = (): void => {
    this.isLogin = true;
  }

  logout = (): void => {
    this.isLogin = false;
  }

}
