import { async, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [HeaderComponent],
    }).compileComponents();

    component = TestBed.get(HeaderComponent);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
