import styles from "./Sidebar.module.css";
import { SidebarItem } from "../SigebarItem/SidebarItem";

export function Sidebar() {
  return (
    <div className={styles.mainSidebar}>
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarList}>
          {["daily", "hits", "genre"].map((nameButton) => {
            return <SidebarItem key={nameButton} name={nameButton} />;
          })}
        </div>
      </div>
    </div>
  );
}
