import { createSelector } from 'reselect';

import { clientsItemsSelector } from '../clients/selectors';

export const timeEntriesRootSelector = createSelector(
  state => state,
  ({ timeEntries }) => timeEntries
);

export const timeEntriesItemsSelector = createSelector(
  timeEntriesRootSelector,
  clientsItemsSelector,
  (timeEntries, clients) =>
    timeEntries.items.map(timeEntry => ({
      ...timeEntry,
      client: clients.find(client => client.id === timeEntry.client).companyName
    }))
);

export const timeEntriesIsLoadingSelector = createSelector(
  timeEntriesRootSelector,
  ({ isLoading }) => isLoading
);

export const timeEntriesErrorSelector = createSelector(
  timeEntriesRootSelector,
  ({ error }) => error
);
