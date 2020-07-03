import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/shared/services/forum.service';
import { ForumBoard } from 'src/app/shared/models';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.scss'],
})
export class ForumsComponent implements OnInit {
  boards: ForumBoard[];

  constructor(private forumService: ForumService) {}

  ngOnInit(): void {
    this.forumService.getBoards().subscribe((boards) => {
      this.boards = boards;
    });
  }
}
