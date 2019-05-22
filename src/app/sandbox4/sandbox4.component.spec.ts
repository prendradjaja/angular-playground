import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sandbox4Component } from './sandbox4.component';

describe('Sandbox4Component', () => {
  let component: Sandbox4Component;
  let fixture: ComponentFixture<Sandbox4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sandbox4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sandbox4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
