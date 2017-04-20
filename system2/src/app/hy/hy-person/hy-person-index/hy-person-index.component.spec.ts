import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyPersonIndexComponent } from './hy-person-index.component';

describe('HyPersonIndexComponent', () => {
  let component: HyPersonIndexComponent;
  let fixture: ComponentFixture<HyPersonIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyPersonIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyPersonIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
