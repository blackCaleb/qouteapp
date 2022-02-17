import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QouteNavbarComponent } from './qoute-navbar.component';

describe('QouteNavbarComponent', () => {
  let component: QouteNavbarComponent;
  let fixture: ComponentFixture<QouteNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QouteNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QouteNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
