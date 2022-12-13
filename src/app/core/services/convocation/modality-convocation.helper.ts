
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { environment } from "src/environments/environment"
import { of } from 'rxjs';


export class ModalityConvocationHelper{


  protected static API_ROUTES = {
    MODALITY_CONVOCATION_GET_ALL:"get-all-modalities"
  }

  public url = environment.url
  public isProduction = environment.production

  constructor(
    protected http:HttpClient
  ){

  }

  getAllConvocationModalitiesError(error:HttpErrorResponse){
    let errorMessage = ''
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error status :${error.status} \n message: ${error.message}`
    }
    return of({
      error:true,
      msg: errorMessage,
      //data: [] as IModalityConvocationResponse,
      data: [
        {
          id:1,
          name:"Presencial"
        },
        {
          id:2,
          name:"Virtual"
        }
      ]
    })
  }


}
