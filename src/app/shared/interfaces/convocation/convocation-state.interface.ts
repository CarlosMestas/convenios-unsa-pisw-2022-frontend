import { IRequirement } from './../requirements/requirement.interface';
import { IDocument } from './../documents-convocation/document.interface';
import { IConvocationPIV } from './convocation-piv.interface';
import { IConvocation } from 'src/app/shared/interfaces/convocation.interface';

export interface IConvocationState{
  working:boolean,
  convocation:IConvocation|null,
  convocationDetail: IConvocationPIV|any|null,
  documents:IDocument[],
  requirements:IRequirement[]
}
