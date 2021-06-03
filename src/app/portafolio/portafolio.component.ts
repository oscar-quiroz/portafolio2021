import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css'],
})
export class PortafolioComponent implements OnInit {
  move: string = '';

  sUno: string = 'active';
  sDos: string = '';
  sTres: string = '';

  constructor() {}

  ngOnInit(): void {}

  inicio() {
    this.move = '';
    this.sUno = 'active';
    this.sDos = '';
    this.sTres = '';
  }

  segundo() {
    this.move = 'move';
    this.sUno = '';
    this.sDos = 'active';
    this.sTres = '';
  }
}
