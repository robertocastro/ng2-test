/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PetitEnfant1Component } from './petit-enfant1.component';

describe('PetitEnfant1Component', () => {
  let component: PetitEnfant1Component;
  let fixture: ComponentFixture<PetitEnfant1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetitEnfant1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitEnfant1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
