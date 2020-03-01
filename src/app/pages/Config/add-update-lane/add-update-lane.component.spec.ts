import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateLaneComponent } from './add-update-lane.component';

describe('AddUpdateLaneComponent', () => {
  let component: AddUpdateLaneComponent;
  let fixture: ComponentFixture<AddUpdateLaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateLaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateLaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
