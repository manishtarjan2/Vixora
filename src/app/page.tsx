import HeroCarousel from '@/components/HeroCarousel';
import VideoRow from '@/components/VideoRow';
import VideoCard from '@/components/VideoCard';
import VideoGrid from '@/components/VideoGrid';
import styles from './page.module.css';
import { mockVideos } from '@/lib/mockData';
import { db } from '@/lib/db';
import { Video, User } from '@prisma/client';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>;
}) {
  const resolvedSearchParams = await searchParams;

  // 1. Fetch from DB
  let dbVideos: (Video & { user: User })[] = [];
  try {
    dbVideos = await db.video.findMany({
      include: {
        user: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
  } catch (e) {
    console.error("Failed to fetch database videos:", e);
  }

  // 2. Format DB videos to match UI interface
  const formattedDbVideos = dbVideos.map(video => ({
    id: video.id,
    title: video.title,
    thumbnailUrl: video.thumbnailUrl || 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
    channelName: video.user.name || 'Anonymous Creator',
    views: video.views,
    duration: video.duration || '9:56',
    createdAt: 'Just now',
    category: 'trending', // default db videos to show in trending
  }));

  // 3. Combine database and mock videos
  const allVideos = [...formattedDbVideos, ...mockVideos];

  // 4. Handle Search Parameter
  if (resolvedSearchParams.search) {
    const query = resolvedSearchParams.search.toLowerCase();
    const searchResults = allVideos.filter(video => 
      video.title.toLowerCase().includes(query) ||
      video.channelName.toLowerCase().includes(query)
    );

    return (
      <div className={styles.homeContainer}>
        <VideoGrid 
          title={`Search Results for "${resolvedSearchParams.search}"`} 
          subtitle={`Found ${searchResults.length} videos`} 
          videos={searchResults}
        />
      </div>
    );
  }

  // 5. Handle Category Parameter
  if (resolvedSearchParams.category) {
    const cat = resolvedSearchParams.category.toLowerCase();
    const filteredVideos = allVideos.filter(video => video.category === cat);

    return (
      <div className={styles.homeContainer}>
        <VideoGrid 
          title={`${resolvedSearchParams.category} Videos`} 
          subtitle={`Showing results for ${resolvedSearchParams.category}`} 
          videos={filteredVideos}
        />
      </div>
    );
  }

  // 6. Default layout: rows of videos
  const trendingVideos = allVideos.filter(v => v.category === 'trending' || v.views > 5000000);
  const continueWatchingVideos = [...allVideos].reverse();
  const recommendedVideos = [...allVideos, ...mockVideos];

  return (
    <div className={styles.homeContainer}>
      <HeroCarousel />
      
      <VideoRow title="Trending Now">
        {trendingVideos.map((video, idx) => (
          <VideoCard key={`trending-${video.id}-${idx}`} video={video} />
        ))}
      </VideoRow>

      <VideoRow title="Continue Watching">
        {continueWatchingVideos.map((video, idx) => (
          <VideoCard key={`continue-${video.id}-${idx}`} video={video} />
        ))}
      </VideoRow>

      <VideoRow title="Recommended for You">
        {recommendedVideos.map((video, idx) => (
          <VideoCard key={`rec-${video.id}-${idx}`} video={video} />
        ))}
      </VideoRow>
    </div>
  );
}
