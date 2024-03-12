import { SelectOption } from "@shared/ui/Select/Select";

export enum Friends {
  ALL = "all",
  WITH_FRIENDS = "yes",
  WITHOUT_FRIENDS = "no",
}

export const FRIENDS_OPTIONS: SelectOption[] = [
  { content: "Все", value: Friends.ALL },
  { content: "С друзьями", value: Friends.WITH_FRIENDS },
  { content: "Без друзей", value: Friends.WITHOUT_FRIENDS },
];
