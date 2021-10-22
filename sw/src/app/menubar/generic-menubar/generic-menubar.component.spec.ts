import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericMenubarComponent } from './generic-menubar.component';

describe('GenericMenubarComponent', () => {
  let component: GenericMenubarComponent;
  let fixture: ComponentFixture<GenericMenubarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericMenubarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
