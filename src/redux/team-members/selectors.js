import { createSelector } from 'reselect';

export const teamMembersRootSelector = createSelector(
  state => state,
  ({ teamMembers }) => teamMembers
);

export const teamMembersItemsSelector = createSelector(
  teamMembersRootSelector,
  ({ items, sortByField, order }) =>
    [...items].sort((a, b) => {
      if (order) return a[sortByField] < b[sortByField] ? -1 : 1;

      return a[sortByField] < b[sortByField] ? 1 : -1;
    })
);

export const teamMembersOrderSelector = createSelector(
  teamMembersRootSelector,
  ({ order }) => order
);

export const teamMembersIsLoadingSelector = createSelector(
  teamMembersRootSelector,
  ({ isLoading }) => isLoading
);

export const teamMembersErrorSelector = createSelector(
  teamMembersRootSelector,
  ({ error }) => error
);
