import { InputPropsType } from "../../../types.types";
import styles from "./FormInput.module.css";

export function FormInput({type, name, placeholder}: InputPropsType) {
  return (
    <input
      className={styles.modalInput}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
}
