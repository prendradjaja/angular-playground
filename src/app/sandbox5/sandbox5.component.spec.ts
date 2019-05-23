import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sandbox5Component } from './sandbox5.component';

describe('Sandbox5Component', () => {
  let component: Sandbox5Component;
  let fixture: ComponentFixture<Sandbox5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sandbox5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sandbox5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
