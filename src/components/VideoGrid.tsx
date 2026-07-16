import React from 'react';
import VideoCard from './VideoCard';
import { mockVideos } from '@/lib/mockData';
import styles from './VideoGrid.module.css';

interface VideoGridProps {
  title: string;
  subtitle?: string;
}

export default function VideoGrid({ title, subtitle }: VideoGridProps) {
  return (
    <div className={styles.gridContainer}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', color: '#fff', textTransform: 'capitalize' }}>{title}</h1>
        {subtitle && <p style={{ color: 'var(--text-secondary)' }}>{subtitle}</p>}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
        {mockVideos.map((video, i) => (
          <div key={`${video.id}-${i}`} style={{ minWidth: 'auto', maxWidth: 'none', scrollSnapAlign: 'none' }}>
            <VideoCard video={video} />
          </div>
        ))}
      </div>
    </div>
  );
}
