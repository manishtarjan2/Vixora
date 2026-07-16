import styles from './page.module.css';

export default function WatchPage({ params }: { params: { id: string } }) {
  // Using a mock video ID for the iframe or a placeholder if we don't want actual youtube embeds.
  // We'll use a placeholder div that looks like a video player.
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.videoPlayer}>
          <div className={styles.videoPlaceholder}>
            <svg viewBox="0 0 24 24" width="64" height="64" className={styles.playIcon}><path fill="currentColor" d="M8 5v14l11-7z"></path></svg>
            <div className={styles.controls}>
              <div className={styles.progressBar}></div>
              <div className={styles.controlsRow}>
                <div className={styles.leftControls}>
                  <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M8 5v14l11-7z"></path></svg>
                  <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></svg>
                  <span className={styles.time}>1:23 / 10:00</span>
                </div>
                <div className={styles.rightControls}>
                  <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.videoInfo}>
          <h1 className={styles.title}>Building a Premium YouTube Clone from Scratch (Next.js, TypeScript)</h1>
          <div className={styles.primaryInfo}>
            <div className={styles.channelInfo}>
              <img src="https://ui-avatars.com/api/?name=AC&background=random" alt="Channel Avatar" className={styles.avatar} />
              <div className={styles.channelDetails}>
                <div className={styles.channelName}>Antigravity Code</div>
                <div className={styles.subCount}>1.5M subscribers</div>
              </div>
              <button className={styles.subscribeButton}>Subscribe</button>
            </div>
            <div className={styles.actions}>
              <div className={styles.actionGroup}>
                <button className={styles.actionButton}>
                  <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"></path></svg>
                  125K
                </button>
                <div className={styles.separator}></div>
                <button className={styles.actionButton}>
                  <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></svg>
                </button>
              </div>
              <button className={styles.actionButtonSecondary}>
                <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M11.73 9.68l-3.79 3.79c-.83.83-2.18.83-3.01 0-.83-.83-.83-2.18 0-3.01l4.08-4.08c1.66-1.66 4.34-1.66 6 0 1.66 1.66 1.66 4.34 0 6l-3.52 3.52c-.83.83-2.18.83-3.01 0-.3-.3-.49-.69-.55-1.11L9.49 14.1c.14.76.62 1.45 1.28 2.11 1.38 1.38 3.62 1.38 5 0l3.52-3.52c1.38-1.38 1.38-3.62 0-5-1.38-1.38-3.62-1.38-5 0l-1.34 1.34-1.22-1.22 2.56-2.56c2.03-2.03 5.31-2.03 7.34 0 2.03 2.03 2.03 5.31 0 7.34l-3.52 3.52c-2.03 2.03-5.31 2.03-7.34 0-1.42-1.42-2.11-3.32-1.92-5.18.06-.52.24-1.03.54-1.49zM5.38 14.94c.55.55 1.44.55 1.99 0l3.79-3.79c.55-.55.55-1.44 0-1.99-.55-.55-1.44-.55-1.99 0l-4.08 4.08c-1.1 1.1-1.1 2.89 0 3.99.55.55 1.28.83 2 .83.47 0 .93-.12 1.35-.34L6.96 16.3c-.23.1-.49.15-.75.15-.46 0-.89-.18-1.21-.5-.73-.73-.73-1.93 0-2.66l2.12-2.12-1.22-1.22-2.12 2.12c-1.38 1.38-1.38 3.62 0 5 1.38 1.38 3.62 1.38 5 0l1.34-1.34 1.22 1.22-2.56 2.56c-2.03 2.03-5.31 2.03-7.34 0-2.03-2.03-2.03-5.31 0-7.34l1.42-1.42 1.22 1.22-1.42 1.42c-.55.55-.55 1.44 0 1.99z"></path></svg>
                Share
              </button>
            </div>
          </div>
          
          <div className={styles.descriptionBox}>
            <div className={styles.descriptionStats}>1.2M views • 2 days ago</div>
            <p className={styles.descriptionText}>
              In this video we build a fully functioning YouTube clone. 
              We'll be using Next.js for the framework, and pure CSS for styling to make it look premium and modern.
              <br/><br/>
              Don't forget to like and subscribe!
            </p>
          </div>
          
          <div className={styles.comments}>
            <div className={styles.commentsHeader}>
              <h3>1,429 Comments</h3>
            </div>
            {/* Simple mock comment */}
            <div className={styles.comment}>
              <img src="https://ui-avatars.com/api/?name=U&background=random" alt="User Avatar" className={styles.commentAvatar} />
              <div className={styles.commentContent}>
                <div className={styles.commentMeta}>
                  <span className={styles.commentName}>@user-123</span>
                  <span className={styles.commentTime}>1 day ago</span>
                </div>
                <div className={styles.commentText}>
                  This is incredible! The attention to detail in the UI is spot on.
                </div>
                <div className={styles.commentActions}>
                  <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"></path></svg>
                  <span className={styles.commentLikes}>24</span>
                  <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></svg>
                  <span className={styles.commentReply}>Reply</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.sidebarRelated}>
        {/* Mock related videos */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className={styles.relatedVideo}>
            <div className={styles.relatedThumbnailWrapper}>
              <img src={`https://images.unsplash.com/photo-1542831371-29b0f74f971${item}?q=80&w=300&auto=format&fit=crop`} alt="Thumbnail" className={styles.relatedThumbnail} />
              <span className={styles.relatedDuration}>12:34</span>
            </div>
            <div className={styles.relatedDetails}>
              <div className={styles.relatedTitle}>Building more features for the clone app</div>
              <div className={styles.relatedChannel}>Code Master</div>
              <div className={styles.relatedStats}>120K views • 2 weeks ago</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
