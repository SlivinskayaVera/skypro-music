import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.navLogo}>
        <Link href="/">
          <Image
            className={styles.logoImage}
            src="/img/logo.png"
            alt="logo"
            width={114}
            height={17}
          />
        </Link>
      </div>
      <div className={styles.centerBlockSearch}>
        <svg className={styles.searchSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          className={styles.searchText}
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <div className={styles.sidebarPersonal}>
        <p className={styles.sidebarPersonalName}>Sergey.Ivanov</p>
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
    </header>
  );
}
