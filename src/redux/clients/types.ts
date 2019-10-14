export interface ClientInterface {
  branch: string;
  branchAdress: string;
  companyName: string;
  id: number;
  locality: string;
  postalCode: string;
}

export interface ClientsStateInterface {
  hasError: string;
  isLoading: boolean;
  items: ClientInterface[];
}

export interface ClientsActionsInterface {
  payload?: {};
  type: string;
}

export interface ClientsPropsInterface {
  addClient: () => {};
  clients: {};
  fetchClients: () => {};
}
