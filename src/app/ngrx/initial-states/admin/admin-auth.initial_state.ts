import { IAdminAuthState } from '../../../shared/interfaces/admin/admin-auth-state.interface';
export const AdminAuthInitialState:IAdminAuthState = {
  working:false,
  admin:null,
  email:null,
  id:-1,
  dialogUserRegisterWrongEmail:false
}
