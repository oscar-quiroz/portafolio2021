import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Habilidades2Component } from './habilidades2.component';

describe('Habilidades2Component', () => {
  let component: Habilidades2Component;
  let fixture: ComponentFixture<Habilidades2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Habilidades2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Habilidades2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
