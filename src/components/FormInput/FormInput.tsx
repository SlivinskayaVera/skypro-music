import { InputPropsType } from "../../../types.types";
import styles from "./FormInput.module.css";

export function FormInput({
  type,
  name,
  placeholder,
  onChange,
  value,
}: InputPropsType) {
  return (
    <input
      onChange={onChange}
      className={styles.modalInput}
      value={value}
      type={type}
      name={name}
      required
      placeholder={placeholder}
    />
  );
}
