import { Friends } from "@features/SelectFriends";
import { Privacy } from "@features/SelectPrivacy";

export interface IFilters {
  privacy: Privacy;
  avatar_color: string | undefined;
  friends: Friends;
}

export interface IFiltersStore extends IFilters {
  change: (newValues: Partial<IFilters>) => void;
  purge: () => void;
}

export type IFilterKey = keyof IFilters;
