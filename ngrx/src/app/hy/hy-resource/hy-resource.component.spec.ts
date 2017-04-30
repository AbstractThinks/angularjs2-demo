import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyResourceComponent } from './hy-resource.component';

describe('HyResourceComponent', () => {
  let component: HyResourceComponent;
  let fixture: ComponentFixture<HyResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
