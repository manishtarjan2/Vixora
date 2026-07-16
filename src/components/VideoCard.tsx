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
  // Simulate a stable progress for demo purposes based on the video ID
  const progress = React.useMemo(() => {
    let hash = 0;
    for (let i = 0; i < video.id.length; i++) {
      hash = video.id.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash % 100);
  }, [video.id]);
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
