import styles from "./BtnEnter.module.css";

type BtnEnterType = {
  title: string;
  onClick: () => void;
};

export function BtnEnter({ title, onClick }: BtnEnterType) {
  function handleBtnClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    onClick();
  }

  return (
    <button onClick={(e) => handleBtnClick(e)} className={styles.button}>
      {title}
    </button>
  );
}
