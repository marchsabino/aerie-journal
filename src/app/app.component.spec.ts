import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      providers: [AppComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const component = TestBed.get(AppComponent);
    expect(component).toBeTruthy();
  });
});
