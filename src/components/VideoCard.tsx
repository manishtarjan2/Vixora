import Link from 'next/link';
import styles from './VideoCard.module.css';

export interface VideoProps {
  id: string;
  thumbnail: string;
  title: string;
  channelName: string;
  channelAvatar: string;
  views: string;
  timestamp: string;
  duration: string;
}

export default function VideoCard({ video }: { video: VideoProps }) {
  return (
    <div className={styles.card}>
      <Link href={`/watch/${video.id}`} className={styles.thumbnailWrapper}>
        <img src={video.thumbnail} alt={video.title} className={styles.thumbnail} />
        <span className={styles.duration}>{video.duration}</span>
      </Link>
      <div className={styles.details}>
        <div className={styles.avatarWrapper}>
          <img src={video.channelAvatar} alt={video.channelName} className={styles.avatar} />
        </div>
        <div className={styles.meta}>
          <h3 className={styles.title}>
            <Link href={`/watch/${video.id}`} className={styles.titleLink}>
              {video.title}
            </Link>
          </h3>
          <div className={styles.channelName}>
            {video.channelName}
            <svg viewBox="0 0 24 24" width="14" height="14" className={styles.verifiedIcon}><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z"></path></svg>
          </div>
          <div className={styles.stats}>
            {video.views} views • {video.timestamp}
          </div>
        </div>
        <button className={styles.moreButton} aria-label="More options">
          <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path></svg>
        </button>
      </div>
    </div>
  );
}
