import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBlockComponent } from './user-block.component';
import { SharedModule } from '../../shared.module';

describe('UserInfoComponent', () => {
  let component: UserBlockComponent;
  let fixture: ComponentFixture<UserBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
