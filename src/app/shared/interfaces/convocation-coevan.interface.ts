import { IUniversityResponse } from './university.interface';
import { IAcademicNetworkResponse } from './academic-network.interface';
import { IConvocationResponseDetail } from "./convocation.interface";
import { IDocumentResponseDetail } from './convocation-document.interface';
import { ILinkResponseDetail } from './convocation-link.interface';
import { IRequirementResponse } from './requirement.interface';

export interface IConvocationCoevanResponseDetail{
    id:number,
    convocation:IConvocationResponseDetail,
    academicNetwork:IAcademicNetworkResponse,
    university:IUniversityResponse,
    documents:IDocumentResponseDetail[],
    links:ILinkResponseDetail[],
    requirements:IRequirementResponse[]
  }

