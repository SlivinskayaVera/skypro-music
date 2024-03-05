import styles from "./FilterButton.module.css";
import { FilterType } from "../../../types.types";
import { Button } from "./Button.styled";

export function FilterButton({ list, title, isOpen, onClick }: FilterType) {
  return (
    <div className={styles.filterPosition}>
      <Button active={`${isOpen}`}
        onClick={onClick}
      >
        {title}
      </Button>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.content}>
            <ul className={styles.list}>
              {list.map((item, index) => {
                return (
                  <li className={styles.listItem} key={index}>
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
