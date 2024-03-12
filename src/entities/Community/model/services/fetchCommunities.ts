import { Community } from "@entities/Community";
import { $communities } from "@entities/Community/store";
import data from "@shared/assets/groups.json";

export const fetchCommunities = async () => {
  const { change } = $communities;
  change({ isLoading: true, error: undefined });
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    change({ communities: data as Community[] });
  } catch (e) {
    change({ error: "Server error" });
    console.log("error:", e);
  }
  change({ isLoading: false });
};
