import styles from "./Sidebar.module.css";
import { SidebarItem } from "../SigebarItem/SidebarItem";

export function Sidebar() {
  return (
    <div className={styles.mainSidebar}>
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarList}>
          <div className={styles.sidebarItem}>
            <SidebarItem link="/favorite" scrImg="/img/playlist01.png" />
          </div>
          <div className={styles.sidebarItem}>
            <SidebarItem link="/hits" scrImg="/img/playlist02.png" />
          </div>
          <div className={styles.sidebarItem}>
            <SidebarItem link="/genre" scrImg="/img/playlist03.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
