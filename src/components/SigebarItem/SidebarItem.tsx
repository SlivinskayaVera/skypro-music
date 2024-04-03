import Image from "next/image";
import Link from "next/link";
import styles from "./SidebarItem.module.css";
import { ItemProps } from "../../../types.types";

export function SidebarItem({ name }: ItemProps) {
  return (
    <>
      <div className={styles.sidebarItem}>
        <Link className={styles.sidebarLink} href={`/tracks/playlists/${name}`}>
          <Image
            className={styles.sidebarImg}
            src={`/img/${name}.png`}
            alt="day's playlist"
            width={250}
            height={150}
            priority
          />
        </Link>
      </div>
    </>
  );
}
