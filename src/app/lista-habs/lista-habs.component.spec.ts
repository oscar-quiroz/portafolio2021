import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHabsComponent } from './lista-habs.component';

describe('ListaHabsComponent', () => {
  let component: ListaHabsComponent;
  let fixture: ComponentFixture<ListaHabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaHabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaHabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
