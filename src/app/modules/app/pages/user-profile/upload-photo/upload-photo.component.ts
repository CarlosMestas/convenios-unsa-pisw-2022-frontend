import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { faTrash, faEdit} from '@fortawesome/free-solid-svg-icons';
import {IProfile} from "../../../../../shared/interfaces/profile.interface";


@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.scss']
})
export class uploadPhotoComponent implements OnInit {
  @Input()   profile:IProfile|null
  @Output() stringImage = new EventEmitter<string>();

  faTrash = faTrash
  faEdit = faEdit
  selected: boolean = false
  isUpload: boolean = false
  imgPreview  = null
  imgSendProfile:string | undefined=''
  constructor(){
    this.profile = {} as IProfile
  }
  ngOnInit(): void {
    if(this.profile?.image!=''){
      this.selected = true
      this.imgSendProfile = this.profile?.image
    }
  }
  sendMessage() {
    this.stringImage.emit(this.imgSendProfile)
    console.log("EVEMNTO IAMGEN ENVIO", this.imgSendProfile)
  }
  onFileSelected (event:any) {
    this.isUpload = true
    let files = event.target.files
    if (files.length === 0) {
      console.log('Empty')
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
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
        console.log('IMG', this.imgPreview )

        this.sendMessage()
      };
    }
  }

  deletePhoto():void {
    this.selected =  false
    this.imgPreview = null
  }


}
