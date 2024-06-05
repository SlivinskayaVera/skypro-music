"use client";

import styles from "./Navigator.module.css";
import Link from "next/link";
import { useState } from "react";
import Cookie from "js-cookie";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const cookies = Cookie.get("user");

  function handelOpenMenu() {
    setIsOpen((prev) => !prev);
  }

  function handleExitBtnClick() {
    Cookie.remove("user");
    Cookie.remove("tokens");
    Cookie.remove("tokenRefresh");
    Cookie.remove("tokensAccess");
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
              <Link href="/tracks/favorites" className={styles.menuLink}>
                Мой плейлист
              </Link>
            </li>
            <li onClick={handleExitBtnClick} className={styles.menuItem}>
              <Link href="/signin" className={styles.menuLink}>
                {cookies ? "Выйти" : "Войти"}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
