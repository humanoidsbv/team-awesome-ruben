import { ClientInterface } from '../clients/types';

export interface TimeEntryInterface {
  client: ClientInterface;
  id: number;
  startTimestamp: string;
  stopTimestamp: string;
}
export interface TimeEntryStateInterface {
  filterByClient: string | null;
  hasError: string;
  isLoading: boolean;
  items: TimeEntryInterface[];
}

export interface ActionInterface {
  type: string;
  payload?: {};
}
export interface TimeEntriesStateInterface {
  clients: ClientInterface;
  timeEntries: TimeEntryInterface;
}

export interface TimeEntriesDispatchInterface {
  addTimeEntry: (timeEntryId: {}) => ActionInterface;
  deleteTimeEntry: (timeEntryId: {}) => ActionInterface;
  fetchClients: () => ActionInterface;
  fetchTimeEntries: () => {};
  filterTimeEntriesByClient: (client: {}) => ActionInterface;
}
