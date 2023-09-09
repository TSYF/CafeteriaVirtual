import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardformPage } from './cardform.page';

describe('CardformPage', () => {
  let component: CardformPage;
  let fixture: ComponentFixture<CardformPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CardformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
