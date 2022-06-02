import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent implements OnInit {

  @Output() alterarFoto = new EventEmitter()

  @Input() preview: string = '';
  // base64String: string | ArrayBuffer;


  constructor() { }

  ngOnInit(): void {
  }

  handleFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    const reader = new FileReader();
    reader.onload = (event: any) => {
      // this.base64String = reader.result
      this.preview = event.target.result;}
    reader.readAsDataURL(files[0]);
    this.setFile(files[0]);
  }

  setFile(file) {
    this.alterarFoto.emit(file);
}


}
