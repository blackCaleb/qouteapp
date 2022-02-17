import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QouteListComponent } from './qoute-list.component';

describe('QouteListComponent', () => {
  let component: QouteListComponent;
  let fixture: ComponentFixture<QouteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QouteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QouteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
