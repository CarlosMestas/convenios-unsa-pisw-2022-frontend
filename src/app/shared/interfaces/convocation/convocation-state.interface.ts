import { IRequirement } from './../requirements/requirement.interface';
import { IDocument } from './../documents-convocation/document.interface';
import { IConvocationPIVE } from './convocation-pive.interface';
import { IConvocation } from 'src/app/shared/interfaces/convocation.interface';

export interface IConvocationState{
  working:boolean,
  convocation:IConvocation|null,
  convocationDetail: IConvocationPIVE|any|null,
  documents:IDocument[],
  requirements:IRequirement[]
}
