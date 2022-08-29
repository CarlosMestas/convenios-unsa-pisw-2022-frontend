import { ENUMDocumentType } from '../../enum/document-type.enum';
import { IDocumentType } from './document-type.interface';
export interface IDocument{
  id:number,
  path:string,
  description:string,
  type:ENUMDocumentType,
  created_at:string,
  updated_at:string,
  log_status:number,
  log_user_created:string,
  log_user_modified:string
}
