import { createSelector } from 'reselect';

const rulersPlacementSelector = state => state.rulers;
export const RulersSelector = createSelector(
  rulersPlacementSelector,
  rulers => rulers
);
