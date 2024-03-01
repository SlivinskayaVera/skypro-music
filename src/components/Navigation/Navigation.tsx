"use client";

import styles from "./Navigator.module.css";
import Link from "next/link";
import React from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  function handelOpenMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <nav className={styles.mainNav}>
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
