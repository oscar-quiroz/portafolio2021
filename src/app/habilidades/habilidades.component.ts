import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent implements OnInit, OnDestroy {
  show: string = 'animate__backInRight';
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.show = 'animate__backOutLeft';
  }
}
