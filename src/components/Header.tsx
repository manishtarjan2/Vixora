"use client";

import Link from 'next/link';
import { useSession, signOut } from "next-auth/react";
import styles from './Header.module.css';

export default function Header({ toggleSidebar }: { toggleSidebar?: () => void }) {
  const { data: session } = useSession();
  
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button className={styles.hamburgerBtn} onClick={toggleSidebar}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
        </button>
        <Link href="/" className={styles.logo}>
          <svg viewBox="0 0 24 24" width="32" height="32" className={styles.logoIcon}>
            <defs>
              <linearGradient id="vGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E50914" />
                <stop offset="100%" stopColor="#8A050C" />
              </linearGradient>
            </defs>
            <path fill="url(#vGradient)" d="M21.58 6.5A2.8 2.8 0 0 0 19.6 4.54C17.86 4.07 12 4 12 4s-5.86.07-7.6.54a2.8 2.8 0 0 0-1.98 1.96C2.07 8.24 2 12 2 12s.07 3.76.42 5.5a2.8 2.8 0 0 0 1.98 1.96C6.14 19.93 12 20 12 20s5.86-.07 7.6-.54a2.8 2.8 0 0 0 1.98-1.96C21.93 15.76 22 12 22 12s-.07-3.76-.42-5.5z"/>
            <path fill="#fff" d="M10 15.5v-7l6 3.5-6 3.5z"/>
          </svg>
          <span className={styles.logoText}>Vixora</span>
        </Link>
      </div>

      <div className={styles.center}>
        <div className={styles.searchBox}>
          <svg viewBox="0 0 24 24" width="20" height="20" className={styles.searchIcon}><path fill="currentColor" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
          <input type="text" placeholder="Search videos, channels, shows..." className={styles.searchInput} />
        </div>
      </div>

      <div className={styles.right}>
        <button className={styles.uploadButton}>
          <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/></svg>
          Upload
        </button>
        
        <button className={styles.iconButton} aria-label="Notifications">
          <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path></svg>
          <span className={styles.badge}>3</span>
        </button>

        {session ? (
          <button className={styles.profileButton} aria-label="Profile" onClick={() => signOut()}>
            <img src={session.user?.image || `https://ui-avatars.com/api/?name=${session.user?.name}&background=0D8ABC&color=fff&rounded=true`} alt="User Avatar" className={styles.avatar} />
          </button>
        ) : (
          <Link href="/login" className={styles.signInButton}>
            Sign in
          </Link>
        )}
      </div>
    </header>
  );
}
