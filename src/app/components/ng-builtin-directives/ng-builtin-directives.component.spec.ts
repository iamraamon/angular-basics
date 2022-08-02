import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBuiltinDirectivesComponent } from './ng-builtin-directives.component';

describe('NgBuiltinDirectivesComponent', () => {
  let component: NgBuiltinDirectivesComponent;
  let fixture: ComponentFixture<NgBuiltinDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgBuiltinDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgBuiltinDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
