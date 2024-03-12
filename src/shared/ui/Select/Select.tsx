import { ChangeEvent, SelectHTMLAttributes, memo, useMemo } from "react";
import cls from "./Select.module.scss";

export interface SelectOption {
  value: string;
  content: string;
  bgColor?: string;
}

interface ISelectProps
  extends Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    "value" | "onChange" | "readonly"
  > {
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo((props: ISelectProps) => {
  const { label, options, value, onChange, readonly, ...otherProps } = props;

  const optionsList = useMemo(
    () =>
      (options || []).map((opt, index) => (
        <option
          key={`${index}-${opt.value}`}
          value={opt.value}
          className={cls.option}
          style={{ backgroundColor: opt.bgColor ? opt.bgColor : "" }}
        >
          {opt.content}
        </option>
      )),
    [options]
  );

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={cls.Wrapper}>
      {label && <span className={cls.label}>{`${label}`}</span>}
      <select
        value={value}
        onChange={onChangeHandler}
        className={cls.select}
        disabled={readonly}
        {...otherProps}
      >
        {optionsList}
      </select>
    </div>
  );
});
