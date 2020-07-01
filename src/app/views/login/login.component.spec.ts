import { async, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [LoginComponent],
    }).compileComponents();

    component = TestBed.inject(LoginComponent);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
