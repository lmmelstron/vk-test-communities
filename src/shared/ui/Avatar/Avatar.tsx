import { memo } from "react";
import cls from "./Avatar.module.scss";

interface IAvatarProps {
  color?: string;
}

export const Avatar = memo(({ color = "white" }: IAvatarProps) => {
  return <div className={cls.Avatar} style={{ backgroundColor: color }} />;
});
