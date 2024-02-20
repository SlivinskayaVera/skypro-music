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
    <nav className={styles.main__nav}>
      <div className={styles.nav__logo}>
        <Link href="/">
          <Image
            className={styles.logo__image}
            src="/logo.svg"
            alt="logo"
            width={114}
            height={17}
          />
        </Link>
      </div>
      <div className={styles.nav__burger} onClick={handelOpenMenu}>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </div>
      {isOpen && (
        <div className={styles.nav__menu}>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <Link href="#" className={styles.menu__link}>
                Главное
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link href="#" className={styles.menu__link}>
                Мой плейлист
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link href="../signin.html" className={styles.menu__link}>
                Войти
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
