import VideoCard, { VideoProps } from '@/components/VideoCard';
import styles from './page.module.css';

const categories = [
  'All', 'Music', 'Gaming', 'Live', 'Computer programming', 
  'Web development', 'Artificial Intelligence', 'Mixes', 
  'Podcasts', 'Lo-fi', 'Thoughts', 'Recently uploaded', 'Watched', 'New to you'
];

const mockVideos: VideoProps[] = [
  {
    id: '1',
    thumbnail: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2070&auto=format&fit=crop',
    title: 'Building a Premium YouTube Clone from Scratch (Next.js, TypeScript)',
    channelName: 'Antigravity Code',
    channelAvatar: 'https://ui-avatars.com/api/?name=AC&background=random',
    views: '1.2M',
    timestamp: '2 days ago',
    duration: '1:45:22'
  },
  {
    id: '2',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
    title: 'Retro Gaming: Why the 90s Were the Best Era for Gamers',
    channelName: 'Pixel Perfect',
    channelAvatar: 'https://ui-avatars.com/api/?name=PP&background=random',
    views: '840K',
    timestamp: '1 week ago',
    duration: '14:20'
  },
  {
    id: '3',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    title: 'Future of AI: What to expect in 2027',
    channelName: 'Tech Tomorrow',
    channelAvatar: 'https://ui-avatars.com/api/?name=TT&background=random',
    views: '2.5M',
    timestamp: '3 weeks ago',
    duration: '22:15'
  },
  {
    id: '4',
    thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop',
    title: 'Lofi Hip Hop Radio - Beats to Relax/Study to',
    channelName: 'Chill Vibes',
    channelAvatar: 'https://ui-avatars.com/api/?name=CV&background=random',
    views: '15M',
    timestamp: 'Live',
    duration: 'LIVE'
  },
  {
    id: '5',
    thumbnail: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop',
    title: 'Advanced Web Development Concepts Explained Visually',
    channelName: 'Code Master',
    channelAvatar: 'https://ui-avatars.com/api/?name=CM&background=random',
    views: '450K',
    timestamp: '1 month ago',
    duration: '34:50'
  },
  {
    id: '6',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
    title: 'My Minimalist Desk Setup 2026',
    channelName: 'Workspace Goals',
    channelAvatar: 'https://ui-avatars.com/api/?name=WG&background=random',
    views: '1.1M',
    timestamp: '5 days ago',
    duration: '8:45'
  },
  {
    id: '7',
    thumbnail: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop',
    title: 'Learn Next.js 15 in 1 Hour - Crash Course',
    channelName: 'Dev Simplified',
    channelAvatar: 'https://ui-avatars.com/api/?name=DS&background=random',
    views: '3.2M',
    timestamp: '2 months ago',
    duration: '59:12'
  },
  {
    id: '8',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop',
    title: 'The Design System Behind Premium Web Apps',
    channelName: 'UI/UX Daily',
    channelAvatar: 'https://ui-avatars.com/api/?name=UI&background=random',
    views: '670K',
    timestamp: '1 week ago',
    duration: '18:30'
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.categoriesWrapper}>
        <div className={styles.categories}>
          {categories.map((cat, i) => (
            <button key={i} className={`${styles.chip} ${i === 0 ? styles.active : ''}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      <div className={styles.feed}>
        {mockVideos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
