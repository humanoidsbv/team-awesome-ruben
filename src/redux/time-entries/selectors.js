import { createSelector } from 'reselect';

import { clientsItemsSelector } from '../clients/selectors';

export const timeEntriesRootSelector = createSelector(
  state => state,
  ({ timeEntries }) => timeEntries
);

export const timeEntriesItemsSelector = createSelector(
  timeEntriesRootSelector,
  clientsItemsSelector,
  ({ items }, clients) =>
    items
      .map(timeEntry => ({
        ...timeEntry,
        client: clients.find(client => client.id === timeEntry.client)
      }))
      .sort((a, b) => new Date(b.startTimestamp) - new Date(a.startTimestamp))
);

export const timeEntriesIsLoadingSelector = createSelector(
  timeEntriesRootSelector,
  ({ isLoading }) => isLoading
);

export const timeEntriesByClientSelector = createSelector(
  timeEntriesItemsSelector,
  timeEntriesRootSelector,
  (items, { filterByClient }) =>
    items.filter(
      item => filterByClient === null || item.client.id === filterByClient
    )
);

export const timeEntriesErrorSelector = createSelector(
  timeEntriesRootSelector,
  ({ error }) => error
);
