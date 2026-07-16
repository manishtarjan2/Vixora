"use client";

import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react";
import styles from './Header.module.css';

export default function Header() {
  const { data: session } = useSession();
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button className={styles.iconButton} aria-label="Menu">
          <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path></svg>
        </button>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg viewBox="0 0 24 24" width="28" height="28" fill="#ff0000"><path d="M21.58 6.5A2.8 2.8 0 0 0 19.6 4.54C17.86 4.07 12 4 12 4s-5.86.07-7.6.54a2.8 2.8 0 0 0-1.98 1.96C2.07 8.24 2 12 2 12s.07 3.76.42 5.5a2.8 2.8 0 0 0 1.98 1.96C6.14 19.93 12 20 12 20s5.86-.07 7.6-.54a2.8 2.8 0 0 0 1.98-1.96C21.93 15.76 22 12 22 12s-.07-3.76-.42-5.5z"/><path fill="#fff" d="M10 15.5v-7l6 3.5-6 3.5z"/></svg>
          </div>
          <span className={styles.logoText}>YouTube</span>
        </Link>
      </div>

      <div className={styles.center}>
        <form className={styles.searchForm}>
          <div className={styles.searchInputWrapper}>
            <input 
              type="text" 
              placeholder="Search" 
              className={styles.searchInput}
            />
            {/* Keyboard shortcut icon placeholder */}
            <span className={styles.keyboardShortcut}>/</span>
          </div>
          <button type="submit" className={styles.searchButton} aria-label="Search">
            <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M20.87 20.17l-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.7zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></svg>
          </button>
        </form>
        <button className={`${styles.iconButton} ${styles.micButton}`} aria-label="Search with your voice">
          <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5S6.5 15.03 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41z"></path></svg>
        </button>
      </div>

      <div className={styles.right}>
        <button className={styles.iconButton} aria-label="Create">
          <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path></svg>
        </button>
        <button className={styles.iconButton} aria-label="Notifications">
          <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path></svg>
        </button>
        {session ? (
          <button className={styles.profileButton} aria-label="Profile" onClick={() => signOut()}>
            <img src={session.user?.image || `https://ui-avatars.com/api/?name=${session.user?.name}&background=0D8ABC&color=fff&rounded=true`} alt="User Avatar" className={styles.avatar} />
          </button>
        ) : (
          <Link href="/login" className={styles.signInButton}>
            <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></svg>
            Sign in
          </Link>
        )}
      </div>
    </header>
  );
}
