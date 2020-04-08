import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerscienceComponent } from './computerscience.component';

describe('ComputerscienceComponent', () => {
  let component: ComputerscienceComponent;
  let fixture: ComponentFixture<ComputerscienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerscienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerscienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
