import HeroCarousel from '@/components/HeroCarousel';
import VideoRow from '@/components/VideoRow';
import VideoCard from '@/components/VideoCard';
import VideoGrid from '@/components/VideoGrid';
import styles from './page.module.css';
import { mockVideos } from '@/lib/mockData';

export default function Home({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  // If there is a category in the URL, filter the videos, otherwise show default layouts
  if (searchParams.category) {
    return (
      <div className={styles.homeContainer}>
        <VideoGrid 
          title={`${searchParams.category} Videos`} 
          subtitle={`Showing results for ${searchParams.category}`} 
        />
      </div>
    );
  }

  return (
    <div className={styles.homeContainer}>
      <HeroCarousel />
      
      <VideoRow title="Trending Now">
        {mockVideos.map(video => (
          <VideoCard key={`trending-${video.id}`} video={video} />
        ))}
      </VideoRow>

      <VideoRow title="Continue Watching">
        {[...mockVideos].reverse().map(video => (
          <VideoCard key={`continue-${video.id}`} video={video} />
        ))}
      </VideoRow>

      <VideoRow title="Recommended for You">
        {[...mockVideos, ...mockVideos].map((video, idx) => (
          <VideoCard key={`rec-${video.id}-${idx}`} video={video} />
        ))}
      </VideoRow>
    </div>
  );
}
