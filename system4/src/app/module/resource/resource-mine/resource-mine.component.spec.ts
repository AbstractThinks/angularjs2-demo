import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceMineComponent } from './resource-mine.component';

describe('ResourceMineComponent', () => {
  let component: ResourceMineComponent;
  let fixture: ComponentFixture<ResourceMineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceMineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceMineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
