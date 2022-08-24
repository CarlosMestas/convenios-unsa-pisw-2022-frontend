import { userLoadRequestAction } from './../../../ngrx/actions/auth/user-auth.actions';
import { IAppState } from './../../../ngrx/app.state';
import { Store } from '@ngrx/store';
import { AuthService } from './../../../core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { SideNavToggle } from './../../../shared/interfaces/sidenav.interface';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'admin-body',
  templateUrl: './admin-body.component.html',
  styleUrls: ['./admin-body.component.scss']
})
export class AdminBodyComponent implements OnInit {
  public fotos: Array<any> = [

  ];
  constructor(
    ) { }
  ngOnInit(): void {
    this.fotos = [
      "https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-6/277098013_2170086286489234_6480879527298290214_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFiqa5mfNMkL9qQVkItSYixquryzQEh8DOq6vLNASHwM67IN-ZUwjpbBlWkuM8DmFtSltFjbaGf_98PEpMKEh4z&_nc_ohc=tKZa22EZEaEAX_4MsnB&_nc_ht=scontent.faqp3-1.fna&oh=00_AT90DI7MBaM2c0ojq47XkKeXN2-GfGcQRnDYLxialDJJuw&oe=630A54D8",
      "https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-6/276129514_2167019603462569_1661982720871955248_n.png?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeE7VdpMV_Gr9bO_gq_t4FgZSSa4-ai8aqVJJrj5qLxqpRJsxl6Jw_hDy2Yw77JTXoZHWuM0c836nmJPnFPw9YPJ&_nc_ohc=xldwTRAPLjQAX-SZWW4&_nc_ht=scontent.faqp3-1.fna&oh=00_AT8yCHFi9GEaQiLzJcmefdfqJ2VcYg4uCjaN20lMmoAGqw&oe=630A9C20",
      "https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-6/275879259_2165281573636372_8635195235689819069_n.png?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHX0tb0EI7swljlfp1e2wp7cLxoh5n-xiFwvGiHmf7GIQUheygDCoYegaSFOrclSFscqt7t0p4oiSUX_BBrzgDv&_nc_ohc=pTlEk8LUdgIAX_Baf2g&_nc_ht=scontent.faqp3-1.fna&oh=00_AT-oDl5YcHLSLrAzLayvDheVzao6mFHES4vzZOjFgPPmYA&oe=6309CFC8",
      "https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-6/275299632_2158252544339275_6471187643302587500_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG2SGT2XP0w9Hu7_r_JpqHYLJ1kse8bTf8snWSx7xtN_8XWh1hWh54sDgqSgDHIav3GSuuP9RkSmVrlObpaR1bU&_nc_ohc=saNUC7S2eQ0AX_EM-2M&_nc_ht=scontent.faqp3-1.fna&oh=00_AT9yp2nwiFxnN6gD1qXOlZIprTBQUD-6oQDJ618dY0Evzg&oe=630B4E88",
      "https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-6/277098013_2170086286489234_6480879527298290214_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFiqa5mfNMkL9qQVkItSYixquryzQEh8DOq6vLNASHwM67IN-ZUwjpbBlWkuM8DmFtSltFjbaGf_98PEpMKEh4z&_nc_ohc=tKZa22EZEaEAX_4MsnB&_nc_ht=scontent.faqp3-1.fna&oh=00_AT90DI7MBaM2c0ojq47XkKeXN2-GfGcQRnDYLxialDJJuw&oe=630A54D8",
      "https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-6/276129514_2167019603462569_1661982720871955248_n.png?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeE7VdpMV_Gr9bO_gq_t4FgZSSa4-ai8aqVJJrj5qLxqpRJsxl6Jw_hDy2Yw77JTXoZHWuM0c836nmJPnFPw9YPJ&_nc_ohc=xldwTRAPLjQAX-SZWW4&_nc_ht=scontent.faqp3-1.fna&oh=00_AT8yCHFi9GEaQiLzJcmefdfqJ2VcYg4uCjaN20lMmoAGqw&oe=630A9C20",
      "https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-6/275879259_2165281573636372_8635195235689819069_n.png?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHX0tb0EI7swljlfp1e2wp7cLxoh5n-xiFwvGiHmf7GIQUheygDCoYegaSFOrclSFscqt7t0p4oiSUX_BBrzgDv&_nc_ohc=pTlEk8LUdgIAX_Baf2g&_nc_ht=scontent.faqp3-1.fna&oh=00_AT-oDl5YcHLSLrAzLayvDheVzao6mFHES4vzZOjFgPPmYA&oe=6309CFC8",
      "https://scontent.faqp3-1.fna.fbcdn.net/v/t39.30808-6/275299632_2158252544339275_6471187643302587500_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG2SGT2XP0w9Hu7_r_JpqHYLJ1kse8bTf8snWSx7xtN_8XWh1hWh54sDgqSgDHIav3GSuuP9RkSmVrlObpaR1bU&_nc_ohc=saNUC7S2eQ0AX_EM-2M&_nc_ht=scontent.faqp3-1.fna&oh=00_AT9yp2nwiFxnN6gD1qXOlZIprTBQUD-6oQDJ618dY0Evzg&oe=630B4E88"

    ]

  }
}
