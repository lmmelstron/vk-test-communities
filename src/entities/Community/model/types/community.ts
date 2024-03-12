export interface CommunityUser {
  first_name: string;
  last_name: string;
}

export interface Community {
  id: number;
  name: string;
  closed: boolean;
  avatar_color: string;
  members_count: number;
  friends?: CommunityUser[];
}

export interface ICommunities {
  isLoading: boolean;
  error: string | undefined;
  communities: Community[] | null;
  visible: number[];
}

export interface ICommunitiesStore extends ICommunities {
  change: (newValues: Partial<ICommunities>) => void;
  setVisible: (func: (el: Community) => boolean) => void;
  purge: () => void;
}
