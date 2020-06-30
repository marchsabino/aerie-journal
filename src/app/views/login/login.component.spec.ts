import { async, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [LoginComponent],
    }).compileComponents();

    component = TestBed.get(LoginComponent);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
