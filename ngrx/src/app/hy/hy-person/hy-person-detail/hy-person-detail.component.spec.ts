import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyPersonDetailComponent } from './hy-person-detail.component';

describe('HyPersonDetailComponent', () => {
  let component: HyPersonDetailComponent;
  let fixture: ComponentFixture<HyPersonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyPersonDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyPersonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
