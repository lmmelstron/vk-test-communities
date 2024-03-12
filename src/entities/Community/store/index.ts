import { makeAutoObservable } from "mobx";
import {
  Community,
  ICommunities,
  ICommunitiesStore,
} from "../model/types/community";

const initialValues: ICommunities = {
  isLoading: false,
  error: undefined,
  communities: null,
  visible: [],
};

export const $communities = makeAutoObservable<ICommunitiesStore>(
  {
    ...initialValues,
    change(newValues: Partial<ICommunities>) {
      Object.assign(this, newValues);
    },
    setVisible(func: (el: Community) => boolean) {
      this.visible = (this.communities || []).filter(func).map((el) => el.id);
    },
    purge() {
      Object.assign(this, initialValues);
    },
  },
  {},
  { autoBind: true }
);
