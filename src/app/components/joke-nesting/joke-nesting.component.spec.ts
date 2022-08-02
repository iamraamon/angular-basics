import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeNestingComponent } from './joke-nesting.component';

describe('JokeNestingComponent', () => {
  let component: JokeNestingComponent;
  let fixture: ComponentFixture<JokeNestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeNestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeNestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
