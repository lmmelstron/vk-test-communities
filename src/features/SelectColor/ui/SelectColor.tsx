import { Select } from "@shared/ui/Select/Select";
import { useCallback, useMemo } from "react";
import { observer } from "mobx-react-lite";
import { $communities } from "@entities/Community/store";

interface ISelectColorProps {
  value: string | undefined;
  onChange: (name: string, value: string | undefined) => void;
}

const AnyColorOption = { value: "any", content: "Любой цвет" };

export const SelectColor = observer(
  ({ value = "any", onChange }: ISelectColorProps) => {
    const { communities } = $communities;

    const options = useMemo(() => {
      const colors = new Set<string>();
      (communities || []).forEach((el) => colors.add(el.avatar_color));
      return [
        AnyColorOption,
        ...Array.from(colors).map((el) => ({
          value: el,
          content: el,
          bgColor: el,
        })),
      ];
    }, [communities]);

    const handleChange = useCallback(
      (value: string) => {
        onChange("avatar_color", value === "any" ? undefined : value);
      },
      [onChange]
    );

    return (
      <Select
        label="Выберите цвет аватарки"
        options={options}
        value={value}
        onChange={handleChange}
      />
    );
  }
);
