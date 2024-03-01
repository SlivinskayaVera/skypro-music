import Image from "next/image";
import Link from "next/link";
import styles from "./WrapperModal.module.css";

type WrapperModalProps = { children: string };

const WrapperModal: React.FC<WrapperModalProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.modalBlock}>
          <form className={styles.modalFormLogin} action="#">
            <Link href="/">
              <div className={styles.modalLogo}>
                <Image
                  src="/logo_modal.png"
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
};

export default WrapperModal;
