// import { Community } from "@entities/Community";
import { Community } from "entities/Community";
import { memo, useCallback, useMemo, useState } from "react";

import cls from "./CommunityCard.module.scss";
import { TextItem } from "@shared/ui/TextItem/TextItem";
import { Avatar } from "@shared/ui/Avatar/Avatar";

interface CommunityCardProps {
  data: Community;
}

export const CommunityCard = memo((props: CommunityCardProps) => {
  const { id, name, closed, avatar_color, members_count, friends } = props.data;

  const [isFriends, setFriends] = useState<boolean>(false);

  const friends_list = useMemo(
    () =>
      friends?.length
        ? friends.map((el) => `${el.first_name} ${el.last_name}`)
        : [],
    [friends]
  );

  const toggleFriends = useCallback(() => setFriends((prev) => !prev), []);

  return (
    <div className={cls.Card}>
      <div className={cls.CardInfo}>
        <Avatar color={avatar_color} />
        <div className={cls.Group}>
          <TextItem name="Название группы:" value={name} />
          <TextItem name="id:" value={id} />
          <TextItem
            name="Тип группы:"
            value={closed ? "закрытая" : "открытая"}
          />
          <TextItem name="Количество участников:" value={members_count} />
          <TextItem
            onClick={toggleFriends}
            name="Количество друзей:"
            value={friends_list.length}
          />
        </div>
      </div>

      {!!friends_list && isFriends && (
        <div className={cls.Group}>
          <TextItem name="Друзья в группе:" value={friends_list.join(", ")} />
        </div>
      )}
    </div>
  );
});
