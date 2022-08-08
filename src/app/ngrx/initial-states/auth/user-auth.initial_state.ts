import { IUserAuthState } from '../../../shared/interfaces/auth/user-auth-state.interface';
export const UserAuthInitialState:IUserAuthState = {
  working:false,
  user:null,
  email:null,
  id:-1,
  dialogUserRegisterWrongEmail:false
}
