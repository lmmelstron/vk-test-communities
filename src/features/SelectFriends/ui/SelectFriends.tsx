import { Select } from "@shared/ui/Select/Select";
import { memo, useCallback } from "react";
import { FRIENDS_OPTIONS, Friends } from "../model/types/friends";

interface ISelectPrivacyProps {
  value: Friends | undefined;
  onChange: (name: string, value: Friends) => void;
}

export const SelectFriends = memo(
  ({ value = Friends.ALL, onChange }: ISelectPrivacyProps) => {
    const handleChange = useCallback(
      (value: string) => {
        onChange("friends", value as Friends);
      },
      [onChange]
    );

    return (
      <Select
        label="Оторбаражать группы с друзьями"
        options={FRIENDS_OPTIONS}
        value={value}
        onChange={handleChange}
      />
    );
  }
);
