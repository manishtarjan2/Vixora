import React from 'react';
import styles from './VideoRow.module.css';

interface VideoRowProps {
  title: string;
  children: React.ReactNode;
}

export default function VideoRow({ title, children }: VideoRowProps) {
  return (
    <div className={styles.rowContainer}>
      <div className={styles.rowHeader}>
        <div className={styles.titleWrapper}>
          <div className={styles.accentLine}></div>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <span className={styles.seeAll}>See all</span>
      </div>
      <div className={styles.rowContent}>
        {children}
      </div>
    </div>
  );
}
