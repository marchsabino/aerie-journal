import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-archives',
  templateUrl: './manage-archives.component.html',
  styleUrls: ['./manage-archives.component.scss'],
})
export class ManageArchivesComponent implements OnInit {
  private readonly reader = new FileReader();
  uploadedFile: string = '';
  summernoteConfig = {
    height: '10rem',
    placeholder: 'Type the archive here...',
    disableDragAndDrop: true,
    toolbar: [
      [
        'font',
        [
          'bold',
          'italic',
          'underline',
          'strikethrough',
          'superscript',
          'subscript',
          'clear',
        ],
      ],
      ['fontname', ['fontname']],
      ['fontsize', ['fontsize']],
      ['color', ['color']],
      ['para', ['ol', 'ul', 'paragraph', 'height']],
      ['table', ['table']],
      ['insert', ['link']],
      ['view', ['undo', 'redo', 'fullscreen', 'codeview', 'help']],
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  displayFiles(files: File[]) {
    this.reader.addEventListener('load', () => {
      this.uploadedFile = this.reader.result.toString();
    });
    this.reader.readAsDataURL(files.pop());
  }
}
