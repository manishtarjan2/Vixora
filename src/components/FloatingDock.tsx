import Link from 'next/link';
import styles from './FloatingDock.module.css';

export default function FloatingDock() {
  return (
    <div className={styles.dockContainer}>
      <div className={styles.dockInner}>
        {/* Left Side: Media Info */}
        <div className={styles.mediaInfo}>
          <img 
            src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=100&q=80" 
            alt="The Last Frontier" 
            className={styles.mediaThumb} 
          />
          <div className={styles.mediaDetails}>
            <span className={styles.mediaTitle}>The Last Frontier</span>
            <span className={styles.mediaSubtitle}>S1 • E1</span>
          </div>
        </div>

        {/* Center: Play Controls */}
        <div className={styles.controls}>
          <button className={styles.controlBtn}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
          </button>
        </div>

        {/* Right Side: Navigation */}
        <div className={styles.navigation}>
          <Link href="/" className={`${styles.navItem} ${styles.active}`}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            <span>Home</span>
          </Link>
          <Link href="/explore" className={styles.navItem}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="m11.99 21.05-1.07-.98c-3.77-3.46-6.26-5.72-6.26-8.54 0-2.3 1.83-4.13 4.14-4.13 1.31 0 2.57.61 3.4 1.57.83-.96 2.09-1.57 3.4-1.57 2.31 0 4.14 1.83 4.14 4.13 0 2.82-2.49 5.08-6.26 8.54l-1.09.98z"/></svg>
            <span>Explore</span>
          </Link>
          <Link href="/shorts" className={styles.navItem}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
            <span>Shorts</span>
          </Link>
          <Link href="/subscriptions" className={styles.navItem}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/></svg>
            <span>Subscriptions</span>
          </Link>
          <Link href="/library" className={styles.navItem}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"/></svg>
            <span>Library</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
