"use client";

import Link from "next/link";
import styles from "../Header.module.css";
import { SVG } from "../../SVGImage/SVGImage";
import Cookie from "js-cookie";
import { useEffect, useState } from "react";

export function HeaderUser() {
  const cookie = Cookie.get("user");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(cookie && JSON.parse(cookie).username);
  }, [userName, cookie]);

  return (
    <div className={styles.sidebarPersonal}>
      <p className={styles.sidebarPersonalName}>
        <Link className={styles.userLink} href="/tracks/favorites">
          {userName}
        </Link>
      </p>
      {!userName && (
        <div className={styles.sidebarIcon}>
          <Link href="/signin">
            <SVG url={"signin"} className={styles.logoutSvg} />
          </Link>
        </div>
      )}
    </div>
  );
}
