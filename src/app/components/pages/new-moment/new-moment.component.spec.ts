/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewMomentComponent } from './new-moment.component';

describe('NewMomentComponent', () => {
  let component: NewMomentComponent;
  let fixture: ComponentFixture<NewMomentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMomentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
