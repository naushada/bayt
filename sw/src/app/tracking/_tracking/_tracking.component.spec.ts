import { ComponentFixture, TestBed } from '@angular/core/testing';

import { _TrackingComponent } from './_tracking.component';

describe('MainComponent', () => {
  let component: _TrackingComponent;
  let fixture: ComponentFixture<_TrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ _TrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(_TrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
