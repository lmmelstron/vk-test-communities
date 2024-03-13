import { CommunityCard } from "@entities/Community";
import { useEffect, useMemo } from "react";
import cls from "./CommunitiesList.module.scss";
import { Loader } from "@shared/ui/Loader/Loader";
import { fetchCommunities } from "../../model/services/fetchCommunities";
import { observer } from "mobx-react-lite";
import { $communities } from "@entities/Community/store";

export const CommunitiesList = observer(() => {
  const { isLoading, error, communities, visible } = $communities;

  useEffect(() => {
    fetchCommunities();
  }, []);

  const list = useMemo(
    () => (communities || [])?.filter((el) => visible.includes(el.id)),
    [communities, visible]
  );

  if (isLoading)
    return (
      <div className={cls.LoaderWrapper}>
        <Loader />
      </div>
    );
  if (error) return <h5 className={cls.Error}>{error}</h5>;
  if (!list?.length)
    return (
      <div>
        Подходящие по фильтрам группы не были найдены, попробуйте сбросить
        фильтры.
      </div>
    );
  return (
    <div className={cls.List}>
      {list.map((el) => (
        <CommunityCard data={el} key={el.id} />
      ))}
    </div>
  );
});
