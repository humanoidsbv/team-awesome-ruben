import { ClientsInterface } from '../clients/types';

export interface TimeEntryInterface {
  client: ClientsInterface[];
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
  clients: ClientsInterface;
  timeEntries: TimeEntryInterface;
}

export interface TimeEntriesDispatchInterface {
  addTimeEntry: (item) => ActionsInterface;
  deleteTimeEntry: (timeEntryId) => ActionsInterface;
  fetchClients: () => ActionsInterface;
  fetchTimeEntries: () => {};
  filterTimeEntriesByClient: (client) => ActionsInterface;
}

/*
export type TimeEntriesProps = TimeEntriesStateInterface &
  TimeEntriesDispatchInterface;
*/
