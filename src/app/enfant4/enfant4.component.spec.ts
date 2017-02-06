/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Enfant4Component } from './enfant4.component';

describe('Enfant4Component', () => {
  let component: Enfant4Component;
  let fixture: ComponentFixture<Enfant4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Enfant4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Enfant4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
