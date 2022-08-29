import { ENUMDocumentType } from '../../enum/document-type.enum';
import { IDocumentType } from './document-type.interface';
export interface IDocument{
  id:number,
  path:string,
  description:string,
  type:IDocumentType
}
