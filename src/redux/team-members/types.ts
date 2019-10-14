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

export interface TeamMembersStateInterface {
  addTeamMember: () => {};
  fetchTeamMembers: () => {};
  orderToggle: boolean;
  sortTeamMembersByField: (string) => void;
  sortTeamMembersOrder: () => void;
  teamMembers: TeamMemberInterface[];
}

export interface ActionsInterface {
  payload?: {};
  type: string;
}

export interface TeamMembersDispatchInterface {
  addTeamMembers: (item) => ActionsInterface;
  deleteTeamMember: (timeEntryId) => ActionsInterface;
  fetchTeamMembers: () => {};
  sortTeamMembersByField: (parameter) => ActionsInterface;
  sortTeamMembersOrder: (parameter) => ActionsInterface;
}

export interface TeamMembersPropsInterface {
  addTeamMembers: () => {};
  teamMembers: {};
  fetchTeamMembers: () => {};
}
