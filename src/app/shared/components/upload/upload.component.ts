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
  @Input() maxAllowed = 1;

  @Output() uploadComplete: EventEmitter<File[]> = new EventEmitter();

  files: File[] = [];

  constructor() {}

  onFileDropped(files: FileList): void {
    this.prepareFilesList(files);
  }

  fileBrowseHandler(files: FileList): void {
    this.prepareFilesList(files);
  }

  removeAttachment(index: number): void {
    this.files.splice(index, 1);
  }

  private prepareFilesList(files: FileList): void {
    const filesArr = Array.from(files);

    if (this.files.length >= this.maxAllowed) { return; }

    if (filesArr.length > this.maxAllowed) {
      filesArr.splice(0, this.maxAllowed);
    }

    for (const file of filesArr) {
      if (this.accept.includes('.' + file.name.split('.').pop())) {
        this.files.push(file);
      }
    }

    this.uploadComplete.emit(this.files);
  }

  ngOnInit(): void {}
}
