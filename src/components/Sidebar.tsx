"use client";

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import styles from './Sidebar.module.css';

const mainLinks = [
  { icon: <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>, text: 'Home', href: '/' },
  { icon: <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="m11.99 21.05-1.07-.98c-3.77-3.46-6.26-5.72-6.26-8.54 0-2.3 1.83-4.13 4.14-4.13 1.31 0 2.57.61 3.4 1.57.83-.96 2.09-1.57 3.4-1.57 2.31 0 4.14 1.83 4.14 4.13 0 2.82-2.49 5.08-6.26 8.54l-1.09.98z"/></svg>, text: 'Explore', href: '/explore' },
  { icon: <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>, text: 'Shorts', href: '/shorts' },
  { icon: <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/></svg>, text: 'Subscriptions', href: '/subscriptions' },
  { icon: <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"/></svg>, text: 'Library', href: '/library' },
  { icon: <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>, text: 'History', href: '/history' },
  { icon: <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 1 0-1.41-1.41z"/></svg>, text: 'Watch Later', href: '/watch-later' },
  { icon: <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg>, text: 'Liked Videos', href: '/liked-videos' },
];

const subscriptions = [
  { name: 'Tech Burner', live: true },
  { name: 'Flying Beast', live: true },
  { name: 'MrBeast', live: true },
  { name: 'Netflix India', live: true },
  { name: 'BB Ki Vines', live: true },
];

const categories = [
  { icon: <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>, text: 'Trending', href: '/?category=trending' },
  { icon: <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>, text: 'Music', href: '/?category=music' },
  { icon: <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M21.58 16.09l-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.79-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.81.75 1.56 0 2.73-1.37 2.52-2.91zM7.5 13c-.83 0-1.5-.67-1.5-1.5S6.67 10 7.5 10s1.5.67 1.5 1.5S8.33 13 7.5 13zm3-4c-.83 0-1.5-.67-1.5-1.5S9.67 6 10.5 6s1.5.67 1.5 1.5S11.33 9 10.5 9zm4 4c-.83 0-1.5-.67-1.5-1.5S13.67 10 14.5 10s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>, text: 'Gaming', href: '/?category=gaming' },
  { icon: <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/></svg>, text: 'Movies', href: '/?category=movies' },
];

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');

  return (
    <aside className={`${styles.sidebar} ${!isOpen ? styles.collapsed : ''}`}>
      <nav className={styles.navGroup}>
        {mainLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.text} href={link.href} className={`${styles.navItem} ${isActive ? styles.active : ''}`}>
              <span className={styles.icon}>{link.icon}</span>
              <span className={styles.text}>{link.text}</span>
            </Link>
          );
        })}
      </nav>

      <div className={styles.divider}></div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h3>Subscriptions</h3>
          <span className={styles.seeAll}>See all</span>
        </div>
        <div className={styles.subList}>
          {subscriptions.map((sub) => (
            <Link key={sub.name} href={`/channel/${sub.name.replace(/\s+/g, '-').toLowerCase()}`} className={styles.subItem}>
              <div className={styles.subInfo}>
                <img src={`https://ui-avatars.com/api/?name=${sub.name.replace(' ', '+')}&background=random&color=fff&rounded=true&size=24`} alt={sub.name} className={styles.subAvatar} />
                <span className={styles.text}>{sub.name}</span>
              </div>
              {sub.live && <span className={styles.liveDot}></span>}
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h3>Categories</h3>
        </div>
        <div className={styles.navGroup}>
          {categories.map((category) => {
            const categoryValue = new URLSearchParams(category.href.split('?')[1]).get('category');
            const isActive = pathname === '/' && currentCategory === categoryValue;
            return (
              <Link key={category.text} href={category.href} className={`${styles.navItem} ${isActive ? styles.active : ''}`}>
                <span className={styles.icon}>{category.icon}</span>
                <span className={styles.text}>{category.text}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className={styles.premiumCard}>
        <div className={styles.premiumHeader}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="#E50914"><path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99z"/></svg>
          <h4>Go Premium</h4>
        </div>
        <p>Ad-free, downloads & exclusive content.</p>
        <button className={styles.premiumButton}>Try Premium</button>
      </div>
    </aside>
  );
}
