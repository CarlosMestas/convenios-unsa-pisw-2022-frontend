import { IConvocationResponse, IConvocationResponseDetail } from './../convocation.interface';
import { IRequirement } from './../requirements/requirement.interface';
import { IDocument } from './../documents-convocation/document.interface';
import { IConvocationPIV } from './convocation-piv.interface';
import { IConvocation } from 'src/app/shared/interfaces/convocation.interface';
import { IEventType } from './event-type.interface';

export interface IConvocationState{
  working:boolean,
  convocation:IConvocationResponseDetail|null,
  convocationDetail: IConvocationPIV|any|null,
  documents:IDocument[],
  requirements:IRequirement[],
  eventTypes:IEventType[]
}
