import { IDialogNotification } from './../interfaces/notification.interface';
export const DATADialogNotifications= {
    WRONG_EMAIL_DOMAIN:{
        message:"",
        detail:""
    },
    USER_NOT_LOGGED:{
        message:"Debe Iniciar Sesión para Acceder a esta función",
        detail:"puede acceder con su cuenta institucional example@unsa.edu.pe"
    },
    USER_NOT_REGISTERED:{
        message:"Al parecer su cuenta aún no está registrada, regístrese por favor",
        detail:"Recuerde utilizar su correo institucional example@unsa.edu.pe"
    },
    POSTULATION_PROFILE_NOT_CONFIGURED:{
        message:"Previo a su postulación, es necesario que configure su perfil",
        detail:"recuerdo completar todos los datos por favor"
    }
}
