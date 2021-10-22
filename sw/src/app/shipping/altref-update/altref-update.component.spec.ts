import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltrefUpdateComponent } from './altref-update.component';

describe('AltrefUpdateComponent', () => {
  let component: AltrefUpdateComponent;
  let fixture: ComponentFixture<AltrefUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltrefUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltrefUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
