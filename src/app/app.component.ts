import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portafolio2021';
  active = '';
  count = 0;

  hamburger_menu = document.querySelector('.hamburger-menu');
  container = document.querySelector('.container');

  activar() {
    if (this.count === 0) {
      this.active = 'active';
      this.count += 1;
    } else {
      this.active = '';
      this.count -= 1;
    }
  }

  constructor() {
    console.log('tipo de menu: ', typeof this.hamburger_menu);
  }
}
