import { makeAutoObservable } from "mobx";
import { IFilters, IFiltersStore } from "../types/filters";
import { Privacy } from "@features/SelectPrivacy";
import { Friends } from "@features/SelectFriends";

const initialValues: IFilters = {
  privacy: Privacy.ALL,
  friends: Friends.ALL,
  avatar_color: undefined,
};

export const $filters = makeAutoObservable<IFiltersStore>(
  {
    ...initialValues,
    change(newValues: Partial<IFilters>) {
      Object.assign(this, newValues);
    },
    purge() {
      Object.assign(this, initialValues);
    },
  },
  {},
  { autoBind: true }
);
