/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Enfant5Component } from './enfant5.component';

describe('Enfant5Component', () => {
  let component: Enfant5Component;
  let fixture: ComponentFixture<Enfant5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Enfant5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Enfant5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
