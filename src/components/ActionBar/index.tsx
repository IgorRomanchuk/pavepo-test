import styles from "./styles.module.scss";
import { FC, useEffect, useState } from "react";
import useDebounce from "@shared/hooks/useDebounce.ts";

interface Props {
  onSearch: (term: string) => void;
  onFilterCity: (city: string) => void;
  options?: string[];
  delay?: number;
  placeholder?: string;
}

const ActionBar: FC<Props> = ({
  onSearch,
  onFilterCity,
  options,
  delay = 500,
  placeholder = "Search by name or email...",
}) => {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, delay);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  return (
    <div className={styles.container}>
      <input type="text" placeholder={placeholder} onChange={(e) => setInputValue(e.target.value)} />
      <select onChange={(e) => onFilterCity(e.target.value)}>
        <option value="">All Cities</option>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ActionBar;
