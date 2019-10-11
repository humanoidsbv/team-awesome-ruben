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
  payload?: any;
  type: string;
}
export interface TimeEntriesStateInterface {
  clients: ClientsInterface[];
  timeEntries: TimeEntryInterface[];
}

export interface TimeEntriesDispatchInterface {
  addTimeEntry: (addTimeEntry) => ActionsInterface;
  deleteTimeEntry: (id) => ActionsInterface;
  fetchClients: () => ActionsInterface;
  fetchTimeEntries: () => ActionsInterface;
  filterTimeEntriesByClient: (client) => ActionsInterface;
}

export type TimeEntriesProps = TimeEntriesStateInterface &
  TimeEntriesDispatchInterface;
