import styles from "./FilterButton.module.css";
import { FilterType } from "../../../types.types";
import cn from "classnames";

export function FilterButton({ list, title, isOpen, onClick }: FilterType) {
  return (
    <div className={styles.filterPosition}>
      <button
        onClick={onClick}
        className={cn(styles.filterButton, `${isOpen && styles.activeButton}`)}
      >
        {title}
      </button>
      {isOpen && (
          <div className={styles.modal}>
            <div className={styles.content}>
              <ul className={styles.list}>
                {list.map((item, index) => {
                  return (
                    <li className={styles.listItem} key={index}>
                      {item}
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
