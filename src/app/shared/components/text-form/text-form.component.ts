import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  RequiredValidator,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-text-form',
  templateUrl: './text-form.component.html',
  styleUrls: ['./text-form.component.scss'],
})
export class TextFormComponent implements OnInit {
  textForm = new FormGroup({});

  @Input() includeTitle = true;
  @Input() titlePlaceholder = 'Title';
  @Input() titleMaxLength = 255;
  @Input() includeUpload = false;
  @Input() maxLength = 255;
  @Input() buttonText = 'Submit';
  @Input() placeholder = 'Type a message...';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.textForm = this.fb.group({
      title: ['', this.includeTitle ? Validators.required : null],
      content: ['', [Validators.required, Validators.max(this.maxLength)]],
    });
  }
}
