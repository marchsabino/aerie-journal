import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      providers: [AppComponent],
    }).compileComponents();

    component = TestBed.inject(AppComponent);
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
