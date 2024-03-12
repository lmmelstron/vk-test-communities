import { memo, useMemo } from "react";
import cls from "./TextItem.module.scss";

interface ITextItemProps {
  name: string;
  value?: string | number;
  onClick?: () => void;
}

export const TextItem = memo((props: ITextItemProps) => {
  const { name, value, onClick } = props;

  const clickable = useMemo(() => (onClick ? cls.underline : ""), [onClick]);

  if (!value) return null;
  return (
    <div className={cls.TextItem} onClick={onClick}>
      <span className={cls.TextItemName}>{name}</span>
      <span className={clickable}>{value}</span>
    </div>
  );
});
