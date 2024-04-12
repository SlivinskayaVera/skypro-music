"use client";

import Link from "next/link";
import styles from "../Header.module.css";
import { SVG } from "../../SVGImage/SVGImage";
import { useAppSelector } from "@/store/hooks";

export function HeaderUser() {
  const userName = useAppSelector(store => store.user.userData.username);
  

  return (
    <div className={styles.sidebarPersonal}>
      <p className={styles.sidebarPersonalName}>
        <Link className={styles.userLink} href="/tracks/favorites">
          {userName}
        </Link>
      </p>
      {userName === "Войти" && (
        <div className={styles.sidebarIcon}>
          <Link href="/signin">
            <SVG url={"signin"} className={styles.logoutSvg} />
          </Link>
        </div>
      )}
    </div>
  );
}
