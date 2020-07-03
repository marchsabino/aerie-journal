import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumsComponent } from './forums.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { BoardComponent } from './board/board.component';
import { ThreadComponent } from './thread/thread.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ForumsComponent, BoardComponent, ThreadComponent],
  imports: [CommonModule, RouterModule, SharedModule, FormsModule],
})
export class ForumsModule {}
