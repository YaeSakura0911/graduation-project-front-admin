import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionFormComponent } from './direction-form.component';

describe('DirectionFormComponent', () => {
  let component: DirectionFormComponent;
  let fixture: ComponentFixture<DirectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
