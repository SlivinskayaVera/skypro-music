"use client";
import Link from "next/link";
import styles from "../Header/Header.module.css";
import Image from "next/image";
import { useAppSelector } from "@/store/hooks";

export function HeaderUser() {
  const userName = useAppSelector((store) => store.user.userData.username);

  return (
    <div className={styles.sidebarPersonal}>
      <p className={styles.sidebarPersonalName}>{userName}</p>
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
