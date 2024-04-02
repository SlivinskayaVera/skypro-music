import styles from "./Sidebar.module.css";
import { SidebarItem } from "../SigebarItem/SidebarItem";

const nameButtons = ["favorite", "hits", "genre"];

export function Sidebar() {
  return (
    <div className={styles.mainSidebar}>
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarList}>
          {nameButtons.map((nameButton, index) => {
            return <SidebarItem key={nameButton} name={nameButton} id={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
