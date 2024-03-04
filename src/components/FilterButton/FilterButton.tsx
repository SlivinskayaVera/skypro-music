import styles from "./FilterButton.module.css";
import cn from "classnames";
import {FilterType} from "../../../types.types"

export function FilterButton({ list, title, isOpen, onClick }: FilterType) {
  return (
    <div className={styles.filterPosition}>
      <button
        onClick={onClick}
        className={cn(styles.filterButton, styles._btnText)}
      >
        {title}
      </button>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.content}>
            <ul className={styles.list}>
              {list.map((item, index) => {
                return <li className={styles.listItem} key={index}>{item.name}</li>;
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
