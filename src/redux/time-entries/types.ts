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

export interface ActionsInterface {
  type: string;
  payload?: {};
}
export interface TimeEntriesStateInterface {
  clients: ClientInterface;
  timeEntries: TimeEntryInterface;
}

export interface TimeEntriesDispatchInterface {
  addTimeEntry: (item: {}) => ActionsInterface;
  deleteTimeEntry: (timeEntryId: number) => ActionsInterface;
  fetchClients: () => ActionsInterface;
  fetchTimeEntries: () => {};
  filterTimeEntriesByClient: (client: {}) => ActionsInterface;
}

//* Todo: Startpoint to refactor time entries props
/*
export type TimeEntriesProps = TimeEntriesStateInterface &
  TimeEntriesDispatchInterface;
*/
