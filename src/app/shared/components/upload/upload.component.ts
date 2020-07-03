import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  @ViewChild('fileDropRef') fileDropRef: ElementRef;

  @Input() accept: string[] = [];

  @Output() uploadComplete: EventEmitter<File[]> = new EventEmitter();

  files: File[] = [];

  constructor() {}

  onFileDropped(files: FileList) {
    this.prepareFilesList(files);
  }

  fileBrowseHandler(files: FileList) {
    this.prepareFilesList(files);
  }

  private prepareFilesList(files: FileList) {
    for (const file of Array.from(files)) {
      this.files.push(file);
    }

    this.uploadComplete.emit(this.files);
  }

  ngOnInit(): void {}
}
