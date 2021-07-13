import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitmemoComponent } from './debitmemo.component';

describe('DebitmemoComponent', () => {
  let component: DebitmemoComponent;
  let fixture: ComponentFixture<DebitmemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitmemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitmemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
