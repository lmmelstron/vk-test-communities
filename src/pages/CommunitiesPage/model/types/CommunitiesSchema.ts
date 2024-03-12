import { Community } from "@entities/Community";

export interface CommunitiesSchema {
  isLoading?: boolean;
  error?: string;
  communities?: Community[];
}
