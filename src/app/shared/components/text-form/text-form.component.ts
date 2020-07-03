import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-form',
  templateUrl: './text-form.component.html',
  styleUrls: ['./text-form.component.scss'],
})
export class TextFormComponent implements OnInit {
  content = '';

  @Input() includeTitle = true;
  @Input() titlePlaceholder = 'Title';
  @Input() titleMaxLength = 255;
  @Input() includeUpload = false;
  @Input() maxLength = 255;
  @Input() buttonText = 'Submit';
  @Input() placeholder = 'Type a message...';

  constructor() {}

  ngOnInit(): void {}
}
