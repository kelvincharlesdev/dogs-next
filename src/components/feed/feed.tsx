import { PhotoProps } from '@/actions/photos-get';
import { FeedPhotos } from './feed-photos';

export const Feed = ({ photos }: { photos: PhotoProps[] }) => {
  return (
    <div>
      <FeedPhotos photos={photos} />
    </div>
  );
};
