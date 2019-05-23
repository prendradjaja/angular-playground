import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sandbox6Component } from './sandbox6.component';

describe('Sandbox6Component', () => {
  let component: Sandbox6Component;
  let fixture: ComponentFixture<Sandbox6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sandbox6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sandbox6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
