import { useCallback, useEffect } from "react";
import cls from "./Filters.module.scss";
import { $filters } from "../model/store";
import { observer } from "mobx-react-lite";
import { $communities } from "@entities/Community/store";
import { Community } from "@entities/Community";
import { Privacy, SelectPrivacy } from "@features/SelectPrivacy";
import { SelectColor } from "@features/SelectColor";
import { Friends, SelectFriends } from "@features/SelectFriends";
import { checkFilters } from "../model/services/checkFilters";

export const Filters = observer(() => {
  const { privacy, avatar_color, friends, change, purge } = $filters;
  const { communities, setVisible } = $communities;

  const handleChange = useCallback(
    (name: string, value: Privacy | Friends | string | undefined) => {
      change({ [name]: value });
    },
    [change]
  );

  const filterFunction = useCallback(
    (el: Community): boolean => {
      return checkFilters(el, privacy, friends, avatar_color);
    },
    [privacy, friends, avatar_color]
  );

  const resetFilters = useCallback(() => {
    setVisible(() => true);
    purge();
  }, [setVisible, purge]);

  useEffect(() => {
    if (communities?.length) {
      setVisible(() => true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [communities]);

  return (
    <div className={cls.Filters}>
      <SelectPrivacy value={privacy} onChange={handleChange} />
      <SelectColor value={avatar_color} onChange={handleChange} />
      <SelectFriends value={friends} onChange={handleChange} />
      <div className={cls.Footer}>
        <button onClick={resetFilters} className={cls.Reset}>
          Сбросить
        </button>
        <button
          className={cls.Submit}
          onClick={() => setVisible(filterFunction)}
        >
          Применить
        </button>
      </div>
    </div>
  );
});
