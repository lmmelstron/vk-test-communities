import { Community } from "@entities/Community";
import { Friends } from "@features/SelectFriends";
import { Privacy } from "@features/SelectPrivacy";

export const checkFilters = (
  el: Community,
  privacy: Privacy,
  friends: Friends,
  avatar_color: string | undefined
): boolean => {
  let res = true;
  switch (privacy) {
    case Privacy.OPEN:
      if (el.closed) res = false;
      break;
    case Privacy.CLOSED:
      if (!el.closed) res = false;
      break;
    default:
      break;
  }

  switch (friends) {
    case Friends.WITH_FRIENDS:
      if (!el.friends?.length) res = false;
      break;
    case Friends.WITHOUT_FRIENDS:
      if (el.friends?.length) res = false;
      break;
    default:
      break;
  }

  if (typeof avatar_color === "string" && el.avatar_color !== avatar_color) {
    res = false;
  }

  return res;
};
