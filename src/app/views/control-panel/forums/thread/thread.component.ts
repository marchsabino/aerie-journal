import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumBoard, ForumThread } from 'src/app/shared/models';
import { ForumService } from 'src/app/shared/services/forum.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss'],
})
export class ThreadComponent implements OnInit {
  content = '';
  board: ForumBoard;
  thread: ForumThread;

  constructor(
    private activatedRoute: ActivatedRoute,
    private forumService: ForumService
  ) {}

  ngOnInit(): void {
    const threadId = this.activatedRoute.snapshot.params.threadId;
    this.forumService
      .getBoardById(this.activatedRoute.snapshot.params.id)
      .subscribe((board) => {
        this.board = board;
        this.thread = board.threads.find(
          (thread) => String(thread.id) === threadId
        );
      });
  }
}
