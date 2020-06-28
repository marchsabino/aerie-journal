import { Component, OnInit } from '@angular/core';
import { Archive } from 'src/app/shared/models';
import { ArchiveService } from 'src/app/shared/services/archive.service';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss'],
})
export class ArchivesComponent implements OnInit {
  archives: Archive[];

  constructor(private archiveService: ArchiveService) {}

  ngOnInit(): void {
    this.archiveService.getArchives().subscribe((archives) => {
      this.archives = archives;
    });
  }
}
