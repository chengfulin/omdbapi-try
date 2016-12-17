/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OmdbListComponent } from './omdb-list.component';

describe('OmdbListComponent', () => {
  let component: OmdbListComponent;
  let fixture: ComponentFixture<OmdbListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmdbListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmdbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
