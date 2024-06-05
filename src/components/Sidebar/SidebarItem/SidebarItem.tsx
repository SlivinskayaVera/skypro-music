import Image from "next/image";
import Link from "next/link";
import styles from "../Sidebar.module.css";

export type ItemProps = {
  name: string;
};

export function SidebarItem({ name }: ItemProps) {
  return (
    <>
      <div className={styles.sidebarItem}>
        <Link className={styles.sidebarLink} href={`/tracks/playlists/${name}`}>
          <Image
            className={styles.sidebarImg}
            src={`/img/${name}.png`}
            alt="playlist"
            width={250}
            height={150}
            priority
          />
        </Link>
      </div>
    </>
  );
}
