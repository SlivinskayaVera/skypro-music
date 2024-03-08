import styles from "./Sidebar.module.css";
import { SidebarItem } from "../SigebarItem/SidebarItem";

type SidebarProps = { isLoading: boolean };
const nameButtons = ["favorite", "hits", "genre"];

export function Sidebar({ isLoading }: SidebarProps) {
  return (
    <div className={styles.mainSidebar}>
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarList}>
          {nameButtons.map((nameButton) => {
            return (
              <SidebarItem
                key={nameButton}
                name={nameButton}
                isLoading={isLoading}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
