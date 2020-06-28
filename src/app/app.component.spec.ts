import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SharedModule } from './shared/shared.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [AppComponent, HeaderComponent, FooterComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const component = TestBed.createComponent(AppComponent);
    expect(component).toBeTruthy();
  });
});
