import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeDomainComponent } from './joke-domain.component';

describe('JokeDomainComponent', () => {
  let component: JokeDomainComponent;
  let fixture: ComponentFixture<JokeDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeDomainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
