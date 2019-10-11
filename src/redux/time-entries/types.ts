export interface TimeEntryInterface {
  client: number;
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
