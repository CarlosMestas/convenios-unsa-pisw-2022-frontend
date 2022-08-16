import { IConvocationState } from './../../../shared/interfaces/convocation/convocation-state.interface';
import { IAppState } from 'src/app/ngrx/app.state';
import { createSelector } from '@ngrx/store';


export const convocationStateSelector = (state:IAppState) =>  state.convocation

export const convocationConvocationStateSelector = createSelector(
  convocationStateSelector,
  (convocationState:IConvocationState)=>convocationState.convocation
)
