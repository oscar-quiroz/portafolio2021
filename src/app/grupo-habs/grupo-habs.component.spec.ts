import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoHabsComponent } from './grupo-habs.component';

describe('GrupoHabsComponent', () => {
  let component: GrupoHabsComponent;
  let fixture: ComponentFixture<GrupoHabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoHabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoHabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
