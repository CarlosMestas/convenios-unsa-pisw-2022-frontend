import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface SidenavItem{
  url:string,
  icon:IconDefinition,
  label:string,
  visible:boolean
}
export interface ISidenavToggle{
  screenWidth:number;
  collapsed:boolean;
}
