/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PTuristicoComponent } from './p-turistico.component';

describe('PTuristicoComponent', () => {
  let component: PTuristicoComponent;
  let fixture: ComponentFixture<PTuristicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PTuristicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PTuristicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
