// GitHub component
type UsersType = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: any;
  hireable: any;
  bio: any;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
};

type SearchUsersType = {
  total_count: number;
  incomplete_results: boolean;
  items: Array<UsersType>;
};

// GitHubUserDetails component
type GitHubUserDetailsType = {
  selectedUser: UsersType | null;
};

type TimerType = {
  seconds: number;
  setUserDetails: (userDetails: UsersType | null) => void;
  setSeconds: (seconds: any) => void;
};

// GitHubUser component
type GitHubUserType = {
  user: UsersType;
  selectedUser: UsersType | null;
  setSelectedUser: (selectedUser: UsersType | null) => void;
};

// GitHubSearchUsers component
type GitHubSearchUsersType = {
  searchTerm: string;
  findCallbackFunc: (value: string) => void;
  resetCallbackFunc: () => void;
};

export {
  UsersType,
  SearchUsersType,
  GitHubUserDetailsType,
  TimerType,
  GitHubUserType,
  GitHubSearchUsersType,
};
