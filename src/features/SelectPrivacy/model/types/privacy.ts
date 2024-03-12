import { SelectOption } from "@shared/ui/Select/Select";

export enum Privacy {
  ALL = "all",
  CLOSED = "closed",
  OPEN = "open",
}

export const PRIVACY_OPTIONS: SelectOption[] = [
  { content: "Все", value: Privacy.ALL },
  { content: "Открытые", value: Privacy.OPEN },
  { content: "Зыкрытые", value: Privacy.CLOSED },
];
