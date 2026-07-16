import React from 'react';
import VideoCard from './VideoCard';
import { mockVideos } from '@/lib/mockData';
import styles from './VideoGrid.module.css';

interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  channelName: string;
  views: number;
  duration: string;
  createdAt: string;
  category?: string;
}

interface VideoGridProps {
  title: string;
  subtitle?: string;
  videos?: Video[];
}

export default function VideoGrid({ title, subtitle, videos = mockVideos }: VideoGridProps) {
  return (
    <div className={styles.gridContainer}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', color: '#fff', textTransform: 'capitalize' }}>{title}</h1>
        {subtitle && <p style={{ color: 'var(--text-secondary)' }}>{subtitle}</p>}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
        {videos.map((video, i) => (
          <div key={`${video.id}-${i}`} style={{ minWidth: 'auto', maxWidth: 'none', scrollSnapAlign: 'none' }}>
            <VideoCard video={video} />
          </div>
        ))}
      </div>
    </div>
  );
}
