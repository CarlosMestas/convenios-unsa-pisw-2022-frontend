import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit{

   public objPrueba: any [] = [];
  currentUser = {
     name: 'Matias Fabian',
     id:1
  }
   user1 = {
     name:'Jade Gabriela',
     id: 2
   }
    user2 = {
     name:'Jesus',
     id: 3
   }

   chatMessages:{
     user:any,
     message:string
   }[] = [

   ]


 constructor() {
   this.objPrueba = [
     {
       user: "Prueba",
       message: "Gola"
     },
     {
       user: "Prueba",
       message: "Gola"
     },
     {
       user: "Prueba",
       message: "Gola"
     },
   ];
    this.chatMessages=[ {
     user: this.currentUser,
     message: "Hello 0"
    },
     {
        user: this.user1,
        message: "Hello 1"
      },
      {
       user: this.user2,
        message: "Hello 2"
      }];
 }
      ngOnInit() {
        this.objPrueba = [
          {
            user: "Prueba",
            message: "Gola"
          },
          {
            user: "Prueba",
            message: "Gola"
          },
          {
            user: "Prueba",
            message: "Gola"
          },
        ];
      }
}
