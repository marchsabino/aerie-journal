import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models';

@Component({
  selector: 'app-user-block',
  templateUrl: './user-block.component.html',
  styleUrls: ['./user-block.component.scss'],
})
export class UserBlockComponent implements OnInit {
  @Input() user: User;
  @Input() theme: 'light' | 'dark' = 'dark';

  constructor() {}

  ngOnInit(): void {}
}
