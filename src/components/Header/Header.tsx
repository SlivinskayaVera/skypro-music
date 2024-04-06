import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import Search from "../Search/Search";
import { HeaderUser } from "../HeaderUser/HeaderUser";

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
      <Search />
      <HeaderUser />
    </header>
  );
}
