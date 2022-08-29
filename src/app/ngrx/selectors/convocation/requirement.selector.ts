import { IAppState } from 'src/app/ngrx/app.state';
import { createSelector } from '@ngrx/store';
import { IRequirement } from 'src/app/shared/interfaces/requirements/requirement.interface';
import { Requirement } from 'src/app/shared/models/requirement.model';


export const requirementsStateSelector = (state:IAppState) =>  state.convocation.requirements

export const convocationRequirementsStateSelector = createSelector(
  requirementsStateSelector,
  (requirementsState:IRequirement[])=> requirementsState

)
export const requirementsListableStateSelector = createSelector(
  requirementsStateSelector,
  (requirementsState:IRequirement[])=> Requirement.getListableFormat(requirementsState)
)
