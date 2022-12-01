import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {ChatbotComponent} from "./body/chatbot.component";

const PostulacionRoutesValues = {
  ROUTE_APP_CHATBOT: "chat"

};
const ChatbotRoutes: Routes = [
  {
    path: '',
    component:ChatbotComponent,
    children:[
      // {
      //   path:'',
      //   redirectTo:PostulacionRoutesValues.ROUTE_POSTULACION_VERIFY_DATA,
      //   pathMatch:'full'
      // },
      // {
      //   path: PostulacionRoutesValues.ROUTE_POSTULACION_VERIFY_DATA,
      //   component:VerifyDataComponent,
      // },
      // {
      //   path: PostulacionRoutesValues.ROUTE_POSTULACION_FILL_FILE,
      //   component:FillFileComponent,
      // },
      // {
      //   path: PostulacionRoutesValues.ROUTE_POSTULACION_UPOLOAD_FILES,
      //   component:UploadFilesComponent,
      // }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(ChatbotRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class ChatbotRoutingModule {
  public static  ROUTES_VALUES = PostulacionRoutesValues;
}
