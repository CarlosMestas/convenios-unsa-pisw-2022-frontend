import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.scss']
})
export class uploadPhotoComponent implements OnInit {
  selected: boolean = false
  imgPreview  = null
  constructor(){
  }
  ngOnInit(): void {
  }
  onFileSelected =(event:any) => {
    let reader, files = event.target.files
    if (files.length === 0) {
      console.log('Empty')
    }
    reader = new FileReader();

    reader.onload = (event:any) => {
      this.imgPreview = event.target.result
    }
    reader.readAsDataURL(files[0])
  }

  deletePhoto():void {
    this.selected =  false
    this.imgPreview = null
  }


}
