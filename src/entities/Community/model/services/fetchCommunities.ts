import { Community } from "@entities/Community";
import { $communities } from "@entities/Community/store";

// ? Request is handled by service worker from the msv library
export const fetchCommunities = async () => {
  const { change } = $communities;
  change({ isLoading: true, error: undefined });
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const res = await fetch("/communities"); // ? normal request
    // const res = await fetch("/communities-error"); // ? error request
    if (res?.status !== 200) {
      throw new Error(`${res?.status}: ${res.statusText}`);
    }
    const data = await res.json();
    if (!Array.isArray(data)) {
      throw new Error(`No communities found`);
    }
    change({ communities: data as Community[] });
  } catch (e) {
    change({ error: `${e}` });
  }
  change({ isLoading: false });
};
