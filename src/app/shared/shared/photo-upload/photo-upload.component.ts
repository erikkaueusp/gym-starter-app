import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent implements OnInit {

  @Output() alterarFoto = new EventEmitter()

  preview: string = '../../../../assets/img/nouser.jpg';


  constructor() { }

  ngOnInit(): void {
  }

  handleFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    const reader = new FileReader();
    reader.onload = (event: any) => this.preview = event.target.result;
    reader.readAsDataURL(files[0]);
    this.setFile(files[0]);
  }

  setFile(file) {
    this.alterarFoto.emit(file);
}


}
