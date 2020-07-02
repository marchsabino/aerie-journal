import { async, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('DashboardComponent', () => {
  let component: DashboardComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [DashboardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    component = TestBed.inject(DashboardComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
