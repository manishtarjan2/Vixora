import Link from 'next/link';
import styles from './Sidebar.module.css';

const mainLinks = [
  { icon: <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4zm2-2h2v-6h8v6h2v-9l-6-5.22L6 10v9z"></path></svg>, label: 'Home', active: true },
  { icon: <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="m10 14.65 5.8-3.15-5.8-3.15v6.3zM19 16c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v8z"></path></svg>, label: 'Shorts' },
  { icon: <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1.4-1.1 2.5-2.5 2.5H6.2C4.8 21.2 3.7 20.1 3.7 18.7V12c0-1.4 1.1-2.5 2.5-2.5h11.7c1.4 0 2.5 1.1 2.5 2.5zm-1.7 0c0-.5-.4-.8-.8-.8H6.2c-.5 0-.8.4-.8.8v6.7c0 .5.4.8.8.8h11.7c.5 0 .8-.4.8-.8V12zM10 15.6v-3.8l3.8 1.9-3.8 1.9z"></path></svg>, label: 'Subscriptions' }
];

const youLinks = [
  { icon: <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path></svg>, label: 'History' },
  { icon: <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="m22 7-1.2-1.3L12 14l-4.8-5.3L6 10l6 6.7 10-9.7zM12 17.8l-10-9.7L.8 9.4 12 21.8l2.2-2.3-2.2-1.7z"></path></svg>, label: 'Playlists' },
  { icon: <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M22 7H2v1h20V7zm-6 5H2v-1h14v1zm-6 5H2v-1h8v1z"></path></svg>, label: 'Your videos' },
  { icon: <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="m14.97 16.95 1.06-1.7L12 12.76V7h-2v6.87l4.97 3.08zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>, label: 'Watch later' },
  { icon: <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M18.77 11h-4.23l1.52-4.94C16.38 5.03 15.54 4 14.38 4c-.58 0-1.14.24-1.52.65L7 11H3v10h4h1h9.43c1.06 0 1.98-.67 2.19-1.61l1.34-6C21.23 12.15 20.18 11 18.77 11zM7 20H4v-8h3v8zm12.96-6.66l-1.34 6c-.07.31-.38.66-.76.66h-9.43v-8.7l5.42-5.49c.12-.12.27-.19.41-.19.24 0 .4.15.44.33l-1.53 4.96-.32.96h1.07h4.04c.64 0 1.08.57.94 1.47z"></path></svg>, label: 'Liked videos' }
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.section}>
        {mainLinks.map((link) => (
          <Link 
            key={link.label} 
            href="#" 
            className={`${styles.navItem} ${link.active ? styles.active : ''}`}
          >
            <div className={styles.icon}>{link.icon}</div>
            <span className={styles.label}>{link.label}</span>
          </Link>
        ))}
      </div>
      
      <div className={styles.divider}></div>
      
      <div className={styles.section}>
        <Link href="#" className={`${styles.navItem} ${styles.sectionHeader}`}>
          <span className={styles.label}>You</span>
          <div className={styles.icon}>
            <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path></svg>
          </div>
        </Link>
        {youLinks.map((link) => (
          <Link key={link.label} href="#" className={styles.navItem}>
            <div className={styles.icon}>{link.icon}</div>
            <span className={styles.label}>{link.label}</span>
          </Link>
        ))}
      </div>
      
      <div className={styles.divider}></div>
      
      <div className={styles.footer}>
        <p>About Press Copyright Contact us Creators Advertise Developers</p>
        <p>Terms Privacy Policy & Safety How YouTube works Test new features</p>
        <p className={styles.copyright}>© 2026 Google LLC</p>
      </div>
    </aside>
  );
}
