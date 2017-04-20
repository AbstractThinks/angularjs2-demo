import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyPersonComponent } from './hy-person.component';

describe('HyPersonComponent', () => {
  let component: HyPersonComponent;
  let fixture: ComponentFixture<HyPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
