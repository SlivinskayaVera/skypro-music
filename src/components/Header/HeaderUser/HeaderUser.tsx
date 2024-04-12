"use client";

import Link from "next/link";
import styles from "../Header.module.css";
import { SVG } from "../../SVGImage/SVGImage";

export function HeaderUser() {
  const userData = localStorage.userData && JSON.parse(localStorage.userData);

  return (
    <div className={styles.sidebarPersonal}>
      <p className={styles.sidebarPersonalName}>
        <Link className={styles.userLink} href="/tracks/favorites">
          {userData.username}
        </Link>
      </p>
      {userData.username === "Войти" && (
        <div className={styles.sidebarIcon}>
          <Link href="/signin">
            <SVG url={"signin"} className={styles.logoutSvg} />
          </Link>
        </div>
      )}
    </div>
  );
}
