import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ManageArchivesComponent } from './manage-archives.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxSummernoteModule } from 'ngx-summernote';

describe('ManageArchivesComponent', () => {
  let component: ManageArchivesComponent;
  let fixture: ComponentFixture<ManageArchivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, NgxSummernoteModule, HttpClientTestingModule],
      declarations: [ManageArchivesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
