"use client";

import styles from "./Navigator.module.css";
import Link from "next/link";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function handelOpenMenu() {
    setIsOpen((prev) => !prev);
  }

  function handleExitBtnClick() {
    localStorage.removeItem("userData");
    localStorage.removeItem("tokens");
  }

  return (
    <nav className={styles.mainNav}>
      <button className={styles.navBurger} onClick={handelOpenMenu}>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </button>
      {isOpen && (
        <div className={styles.navMenu}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link href="/" className={styles.menuLink}>
                Главное
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/tracks/favorites/favorites" className={styles.menuLink}>
                Мой плейлист
              </Link>
            </li>
            <li onClick={handleExitBtnClick} className={styles.menuItem}>
              <Link href="/signin" className={styles.menuLink}>
                {localStorage.userData ? "Выйти" : "Войти"}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
