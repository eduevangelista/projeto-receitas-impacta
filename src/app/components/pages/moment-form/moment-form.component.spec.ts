/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MomentFormComponent } from './moment-form.component';

describe('MomentFormComponent', () => {
  let component: MomentFormComponent;
  let fixture: ComponentFixture<MomentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
