import { async, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [FooterComponent],
    }).compileComponents();

    component = TestBed.inject(FooterComponent);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
