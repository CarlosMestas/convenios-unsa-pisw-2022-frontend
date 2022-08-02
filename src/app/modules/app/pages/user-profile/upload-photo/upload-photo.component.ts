import { Component,Input, OnInit } from '@angular/core';
import { faTrash, faEdit} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.scss']
})
export class uploadPhotoComponent implements OnInit {
  @Input() imgValue: Object | null | undefined ;
  faTrash = faTrash
  faEdit = faEdit
  selected: boolean = false
  imgPreview  = null
  constructor(){
  }
  ngOnInit(): void {
  }
  onFileSelected (event:any) {
    let files = event.target.files
    if (files.length === 0) {
      console.log('Empty')
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      console.log('Only images are supported.')
      return;
    }
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        // @ts-ignore
        this.imgPreview = reader.result;
        this.selected = true
      };
    }
  }

  deletePhoto():void {
    this.selected =  false
    this.imgPreview = null
  }


}
