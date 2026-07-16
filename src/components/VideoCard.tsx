import React from 'react';
import Link from 'next/link';
import styles from './VideoCard.module.css';

interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  channelName: string;
  views: number;
  duration: string;
  createdAt: string;
}

export default function VideoCard({ video }: { video: Video }) {
  // Simulate a random progress for demo purposes to match the Netflix "Continue Watching" look
  const progress = React.useMemo(() => Math.floor(Math.random() * 100), []);
  const showProgress = progress > 10;

  return (
    <Link href={`/watch/${video.id}`} className={styles.card}>
      <div className={styles.thumbnailContainer}>
        <img src={video.thumbnailUrl} alt={video.title} className={styles.thumbnail} />
        <span className={styles.duration}>{video.duration}</span>
        {showProgress && (
          <div className={styles.progressBarContainer}>
            <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
          </div>
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.details}>
          <h3 className={styles.title}>{video.title}</h3>
          <span className={styles.subtitle}>{video.channelName} • 2024</span>
        </div>
      </div>
    </Link>
  );
}
