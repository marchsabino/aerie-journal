import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-archives',
  templateUrl: './manage-archives.component.html',
  styleUrls: ['./manage-archives.component.scss'],
})
export class ManageArchivesComponent implements OnInit {
  private readonly reader = new FileReader();
  uploadedFile: string = '';

  constructor() {}

  ngOnInit(): void {}

  displayFiles(files: File[]) {
    this.reader.addEventListener('load', () => {
      this.uploadedFile = this.reader.result.toString();
    });
    this.reader.readAsDataURL(files[0]);
  }
}
