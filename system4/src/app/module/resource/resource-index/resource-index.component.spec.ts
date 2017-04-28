import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceIndexComponent } from './resource-index.component';

describe('ResourceIndexComponent', () => {
  let component: ResourceIndexComponent;
  let fixture: ComponentFixture<ResourceIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
