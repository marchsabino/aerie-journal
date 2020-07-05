import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumsComponent } from './forums.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ForumsComponent', () => {
  let component: ForumsComponent;
  let fixture: ComponentFixture<ForumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ForumsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});