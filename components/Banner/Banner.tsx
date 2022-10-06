import { FC } from 'react';
import styles from './Banner.module.css';

interface Props {
  buttonText: string;
  handleOnClick: () => void;
}

export const Banner: FC<Props> = ({ buttonText, handleOnClick }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Connoisseur</span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffee shops!</p>
      <div className="buttonWrapper">
        <button className={styles.button} onClick={handleOnClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};
