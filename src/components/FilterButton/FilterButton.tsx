import styles from "./FilterButton.module.css";
import { FilterType } from "../../../types.types";
import cn from "classnames";

export function FilterButton({
  list,
  title,
  isOpen,
  selected,
  counter,
  onClick,
  toggleSelected,
  toggleDeleteSelector
}: FilterType) {
  return (
    <div className={styles.filterPosition}>
      {counter !== 0 && <span onClick={toggleDeleteSelector} className={styles.counter}>{counter}</span>}
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
                const activeClass = selected?.includes(item)
                  ? styles.listItemActive
                  : "";
                return (
                  <li
                    className={cn(styles.listItem, activeClass)}
                    key={index}
                    onClick={() => {
                      if (toggleSelected) toggleSelected(item);
                    }}
                  >
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
