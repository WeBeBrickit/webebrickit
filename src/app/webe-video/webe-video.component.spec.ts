import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebeVideoComponent } from './webe-video.component';

describe('WebeVideoComponent', () => {
  let component: WebeVideoComponent;
  let fixture: ComponentFixture<WebeVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebeVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
