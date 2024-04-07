"use client";

import Link from "next/link";
import styles from "../Header/Header.module.css";
import Image from "next/image";

export function HeaderUser() {
  const userData = localStorage.userData && JSON.parse(localStorage.userData);

  return (
    <div className={styles.sidebarPersonal}>
      <p className={styles.sidebarPersonalName}>
        {userData && userData.username}
      </p>
      <div className={styles.sidebarIcon}>
        <Link href="/signin">
          <Image
            className={styles.logoutSvg}
            src="/img/logout.png"
            alt="logo"
            width={40}
            height={40}
          />
        </Link>
      </div>
    </div>
  );
}
