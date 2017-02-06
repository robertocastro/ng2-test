/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Enfant3Component } from './enfant3.component';

describe('Enfant3Component', () => {
  let component: Enfant3Component;
  let fixture: ComponentFixture<Enfant3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Enfant3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Enfant3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
