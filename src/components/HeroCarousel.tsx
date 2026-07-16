import React from 'react';
import styles from './HeroCarousel.module.css';

export default function HeroCarousel() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.imageWrapper}>
        <img 
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=2000" 
          alt="The Last Frontier" 
          className={styles.heroImage} 
        />
        <div className={styles.gradientOverlay}></div>
      </div>
      
      <div className={styles.content}>
        <span className={styles.originalBadge}>VIXORA <span className={styles.originalText}>ORIGINAL</span></span>
        <h1 className={styles.title}>THE LAST<br/>FRONTIER</h1>
        <p className={styles.description}>
          In a world of chaos, one mission<br/>can change everything.
        </p>
        
        <div className={styles.actions}>
          <button className={styles.watchNowBtn}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            Watch Now
          </button>
          <button className={styles.myListBtn}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
            My List
          </button>
        </div>
      </div>

      <div className={styles.carouselNav}>
        <button className={styles.navArrow}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
        </button>
        <button className={styles.navArrow}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
        </button>
      </div>

      <div className={styles.indicators}>
        <span className={`${styles.dot} ${styles.active}`}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
    </div>
  );
}
