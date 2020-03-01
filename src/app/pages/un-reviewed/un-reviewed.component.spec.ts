import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnReviewedComponent } from './un-reviewed.component';

describe('UnReviewedComponent', () => {
  let component: UnReviewedComponent;
  let fixture: ComponentFixture<UnReviewedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnReviewedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnReviewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
