import styles from "./FilterButton.module.css";
import cn from "classnames";

type FilterType = {
  list: Array<{ id: number; name: string }>;
  title: string;
  isOpen: boolean;
  onClick: () => void;
};

export function FilterButton({ list, title, isOpen, onClick }: FilterType) {
  return (
    <div className={styles.filterPosition}>
      <div
        onClick={onClick}
        className={cn(styles.filterButton, styles._btnText)}
      >
        {title}
      </div>
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
