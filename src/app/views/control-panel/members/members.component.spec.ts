import { async, TestBed } from '@angular/core/testing';
import { MembersComponent } from './members.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('MembersComponent', () => {
  let component: MembersComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [MembersComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    component = TestBed.inject(MembersComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
