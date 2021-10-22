import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificMenubarComponent } from './specific-menubar.component';

describe('SpecificMenubarComponent', () => {
  let component: SpecificMenubarComponent;
  let fixture: ComponentFixture<SpecificMenubarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificMenubarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
