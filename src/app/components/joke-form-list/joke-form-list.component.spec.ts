import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeFormListComponent } from './joke-form-list.component';

describe('JokeFormListComponent', () => {
  let component: JokeFormListComponent;
  let fixture: ComponentFixture<JokeFormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeFormListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
