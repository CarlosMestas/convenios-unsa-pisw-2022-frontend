import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
})
export class ChatbotComponent implements OnInit {
  chatInputMessage: string ="";

  currentUser = {
    name: 'Matias Fabian',
    id: 1,
    profileImageUrl:'https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png'
  };
  user1 = {
    name: 'Jade Gabriela',
    id: 2,
    profileImageUrl: 'https://cdn0.iconfinder.com/data/icons/female-avatars/512/Female_avatar-01-512.png'
  };
  user2 = {
    name: 'Jesus',
    id: 3,
    profileImageUrl:'https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg'
  };

  chatMessages: {
    user: any;
    message: string;
    created_at:number;
  }[] = [];

  constructor() {
    this.chatMessages = [
      {
        user: this.currentUser,
        message: 'Hello 0',
        created_at:Date.now(),
      },
      {
        user: this.user1,
        message: 'Hello 1',
        created_at:Date.now(),
      },
      {
        user: this.user2,
        message: 'Hello 2',
        created_at:Date.now(),
      },
      {
        user: this.currentUser,
        message: '"¿Qué es un animal? Para que un organismo se clasifique científicamente como animal deben tenerse en cuenta características a nivel celular, morfológico y fisiológico. No existe una definición breve para los animales, así que pasemos de una vez a  animales son organismos pluricelulares, heterótrofos, con células sin pared celular"',
        created_at:Date.now(),
      },
    ];
  }
  ngOnInit() {
  }
  send(){
      this.chatMessages.push({
        message:this.chatInputMessage,
        user: this.currentUser,
        created_at:Date.now()
      });
  }
  scrollToBotton(){
    let chatListContainer = document.getElementById('chat-list');
    //chatListContainer.scrollTop=chatListContainer.scrollHeight
  }
}
