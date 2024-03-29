export interface ClientInterface {
  branch: string;
  branchAddress: string;
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

export interface ClientsActionInterface {
  payload?: any;
  type: string;
}

export interface ClientsPropsInterface {
  addClient: ({}) => void;
  clients: ClientInterface[];
  fetchClients: () => void;
}
