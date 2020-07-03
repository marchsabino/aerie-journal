import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss'],
})
export class ActionButtonComponent implements OnInit {
  @Input() loading = false;
  @Input() text = 'Submit';
  @Input() type: 'primary' | 'success' | 'danger' = 'primary';
  @Input() disabled = false;

  @Output() perform = new EventEmitter<MouseEvent>();

  constructor() {}

  onClick(event: MouseEvent): void {
    event.preventDefault();
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.perform.emit(event);
    }, 3000);
  }

  ngOnInit(): void {}
}
