import Image from "next/image";
import Link from "next/link";
import styles from "./WrapperModal.module.css";

export type WrapperModalType = { children: JSX.Element[] };

function WrapperModal({ children }: WrapperModalType) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.modalBlock}>
          <form className={styles.modalFormLogin} action="#">
            <Link href="/">
              <div className={styles.modalLogo}>
                <Image
                  src="/img/logo_modal.png"
                  alt="logo"
                  width={140}
                  height={21}
                />
              </div>
            </Link>
            {children}
          </form>
        </div>
      </div>
    </div>
  );
}

export default WrapperModal;
