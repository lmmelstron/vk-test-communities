import { Select } from "@shared/ui/Select/Select";
import { PRIVACY_OPTIONS, Privacy } from "../model/types/privacy";
import { memo, useCallback } from "react";

interface ISelectPrivacyProps {
  value: Privacy | undefined;
  onChange: (name: string, value: Privacy) => void;
}

export const SelectPrivacy = memo(
  ({ value = Privacy.ALL, onChange }: ISelectPrivacyProps) => {
    const handleChange = useCallback(
      (value: string) => {
        onChange("privacy", value as Privacy);
      },
      [onChange]
    );

    return (
      <Select
        label="Выберите тип группы"
        options={PRIVACY_OPTIONS}
        value={value}
        onChange={handleChange}
      />
    );
  }
);
