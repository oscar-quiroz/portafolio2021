import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupo-habs',
  templateUrl: './grupo-habs.component.html',
  styleUrls: ['./grupo-habs.component.css'],
})
export class GrupoHabsComponent implements OnInit {
  main: boolean = true;
  second: boolean = false;
  last: boolean = false;
  ir: string = '';

  sUno: string = 'active';
  sDos: string = '';
  sTres: string = '';

  constructor() {}

  ngOnInit(): void {}

  selectOne() {
    this.ir = 'animate__backOutLeft';
    this.sUno = 'active';
    this.sDos = '';
    this.sTres = '';
    setTimeout(() => {
      this.main = true;
      this.second = false;
      this.last = false;
      this.ir = 'animate__backInRight';
    }, 500);
  }

  selectTwo() {
    this.ir = 'animate__backOutLeft';
    this.sUno = '';
    this.sDos = 'active';
    this.sTres = '';
    setTimeout(() => {
      this.main = false;
      this.second = true;
      this.last = false;
      this.ir = 'animate__backInRight';
    }, 500);
  }

  selectThree() {
    this.ir = 'animate__backOutLeft';
    this.sUno = '';
    this.sDos = '';
    this.sTres = 'active';
    setTimeout(() => {
      this.main = false;
      this.second = false;
      this.last = true;
      this.ir = 'animate__backInRight';
    }, 500);
  }
}
