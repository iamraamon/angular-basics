import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleClassComponent } from './ng-style-class.component';

describe('NgStyleClassComponent', () => {
  let component: NgStyleClassComponent;
  let fixture: ComponentFixture<NgStyleClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgStyleClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgStyleClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
