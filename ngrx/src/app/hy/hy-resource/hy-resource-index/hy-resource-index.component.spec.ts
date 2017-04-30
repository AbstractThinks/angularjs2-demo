import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyResourceIndexComponent } from './hy-resource-index.component';

describe('HyResourceIndexComponent', () => {
  let component: HyResourceIndexComponent;
  let fixture: ComponentFixture<HyResourceIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyResourceIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyResourceIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
