import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthpawLogoComponent } from './southpaw-logo.component';

describe('SouthpawLogoComponent', () => {
  let component: SouthpawLogoComponent;
  let fixture: ComponentFixture<SouthpawLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouthpawLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthpawLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
