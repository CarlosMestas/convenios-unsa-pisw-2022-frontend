import { sidenavItems } from 'src/app/core/mocks/items-sidenav.mock';
import { BehaviorSubject, Subject } from 'rxjs';
import { SidenavItem } from './../../../shared/interfaces/sidenav-item.interface';
import { AppRoutingModule } from './../../../modules/app/app.routes';

import { Injectable } from "@angular/core";
import { catchError, map, Observable } from 'rxjs';
import { IConvocatoria } from 'src/app/shared/interfaces/convocatoria.interface';
import { SidenavHelper } from './sidenav.helper';

import { faHouseUser,faQuestion, faPhone,faUser} from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn:'root'
})
export class SidenavService extends SidenavHelper{
  sidenavItems:{[name:string]:SidenavItem};
  sidenavItems$:BehaviorSubject<{[name:string]:SidenavItem}>;

  constructor(){
    super()
    this.sidenavItems =
      {
        'home':{
          url:'home',
          icon:faHouseUser,
          label:'Convocatorias',
          visible:true
        },
        'quienes-somos':{
          url:'quienes-somos',
          icon:faQuestion,
          label:'Quiénes Somos',
          visible:true
        },
        'contacto':{
          url:'contacto',
          icon:faPhone,
          label:'Contact',
          visible:true
        },
        'iniciar-sesion':{
          url:'iniciar-sesion',
          icon:faUser,
          label:'Iniciar Sesión',
          visible:true
        },
        'cerrar-sesion':{
          url:'iniciar-sesion',
          icon:faUser,
          label:'Cerrar Sesión',
          visible:false
        }
      }
      this.sidenavItems$ = new BehaviorSubject<{[name:string]:SidenavItem}>(this.sidenavItems)
  }
  /**
   * get all sidenav items
   *
  */
  getSidenavItems():Observable<{[name:string]:SidenavItem}>{
    return this.sidenavItems$.asObservable()
  }
  /**
   * enable cerrar-sesion sidenav item to be visible
   *
  */
  sidenavUserLogged():void{
    this.sidenavItems["cerrar-sesion"].visible=true
    this.sidenavItems["iniciar-sesion"].visible=false
    this.sidenavItems$.next(this.sidenavItems)
  }
  /**
   * disable cerrar-sesion sidenav item to be visible
   *
  */
  sidenavUserNotLogged():void{
    this.sidenavItems["cerrar-sesion"].visible=false
    this.sidenavItems["iniciar-sesion"].visible=true
    this.sidenavItems$.next(this.sidenavItems)
  }

}

