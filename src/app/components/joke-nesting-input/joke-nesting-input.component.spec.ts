import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeNestingInputComponent } from './joke-nesting-input.component';

describe('JokeNestingInputComponent', () => {
  let component: JokeNestingInputComponent;
  let fixture: ComponentFixture<JokeNestingInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeNestingInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeNestingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
