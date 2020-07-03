import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFormComponent } from './text-form.component';
import { SharedModule } from '../../shared.module';

describe('TextFormComponent', () => {
  let component: TextFormComponent;
  let fixture: ComponentFixture<TextFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
