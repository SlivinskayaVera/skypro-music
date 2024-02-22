"use client";

import Image from "next/image";
import styles from "./MainNavigator.module.css";
import Link from "next/link";
import { useState } from "react";

export function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  function handelOpenMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <nav className={styles.mainNav}>
      {/* <div className={styles.navLogo}>
        <Link href="/">
        <Image
            className={styles.logoImage}
            src="/img/logo.png"
            alt="logo"
            width={114}
            height={17}
          />
        </Link>
      </div> */}
      <div className={styles.navBurger} onClick={handelOpenMenu}>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </div>
      {isOpen && (
        <div className={styles.navMenu}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link href="#" className={styles.menuLink}>
                Главное
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="#" className={styles.menuLink}>
                Мой плейлист
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="../signin.html" className={styles.menuLink}>
                Войти
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
