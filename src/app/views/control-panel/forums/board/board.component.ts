import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from 'src/app/shared/services/forum.service';
import { ForumBoard } from 'src/app/shared/models';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  board: ForumBoard;

  constructor(
    private activatedRoute: ActivatedRoute,
    private forumService: ForumService
  ) {}

  ngOnInit(): void {
    this.forumService
      .getBoardById(this.activatedRoute.snapshot.params.id)
      .subscribe((board) => (this.board = board));
  }
}
