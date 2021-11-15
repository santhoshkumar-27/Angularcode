import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User11Component } from './user11.component';

describe('User11Component', () => {
  let component: User11Component;
  let fixture: ComponentFixture<User11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ User11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(User11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
