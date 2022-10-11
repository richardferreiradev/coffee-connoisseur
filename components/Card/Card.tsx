import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import cls from 'classnames';

import styles from './Card.module.css';

interface Props {
  href: string | null;
  title: string | null;
  imgUrl: string | null;
  className?: string;
}

export const Card: FC<Props> = ({ href, title, imgUrl }) => {
  return (
    <Link className={styles.cardLink} href={href!}>
      <a>
        <div className={cls('glass', styles.container)}>
          <div className={styles.cardHeaderWrapper}>
            <h2 className={styles.cardHeader}>{title}</h2>
          </div>
          <div className={styles.cardImageWrapper}>
            <Image
              src={imgUrl!}
              width={260}
              height={160}
              alt={title!}
              className={styles.cardImage}
            />
          </div>
        </div>
      </a>
    </Link>
  );
};
