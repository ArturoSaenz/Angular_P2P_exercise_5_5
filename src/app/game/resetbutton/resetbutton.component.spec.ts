import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetbuttonComponent } from './resetbutton.component';

describe('ResetbuttonComponent', () => {
  let component: ResetbuttonComponent;
  let fixture: ComponentFixture<ResetbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
