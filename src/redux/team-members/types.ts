export interface TeamMemberInterface {
  currentClient: string;
  employeeNumber: string;
  firstName: string;
  id?: number;
  lastName: string;
  role: string;
  startingDate: string;
}

export interface TeamMemberStateInterface {
  hasError: string;
  isLoading: boolean;
  items: TeamMemberInterface[];
  order?: boolean;
  sortByField?: string;
}

export interface ActionInterface {
  payload?: any;
  type: string;
}

export interface TeamMembersDispatchInterface {
  addTeamMember: (item: {}) => ActionInterface;
  deleteTeamMember: (timeEntryId: number) => ActionInterface;
  fetchTeamMembers: (timeEntryId: number) => ActionInterface;
}

export interface TeamMembersPropsInterface {
  teamMembers: {};
}
