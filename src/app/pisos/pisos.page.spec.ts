import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PisosPage } from './pisos.page';

describe('PisosPage', () => {
  let component: PisosPage;
  let fixture: ComponentFixture<PisosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PisosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
