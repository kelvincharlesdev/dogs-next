'use client';

import { PhotoProps, photosGet } from '@/actions/photos-get';
import { FeedPhotos } from './feed-photos';
import { useEffect, useRef, useState } from 'react';
import Loading from '@/components/helper/loading';

import styles from './feedPhotos.module.css';

export const Feed = ({
  photos,
  user,
}: {
  photos: PhotoProps[];
  user?: 0 | string;
}) => {
  const [photosFeed, setPhotosFeed] = useState<PhotoProps[]>(photos);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [infinite, setInfinite] = useState(photos.length < 6 ? false : true);

  const fetching = useRef(false);
  const infiniteScroll = () => {
    console.log('Aconteceu');
    if (fetching.current) return;
    fetching.current = true;
    setLoading(true);
    setTimeout(() => {
      setPage((currentPage) => currentPage + 1);
      fetching.current = false;
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (page === 1) return;
    const getPagePhotos = async (page: number) => {
      const actionData = await photosGet(
        { page, total: 6, user: 0 },
        {
          cache: 'no-store',
        },
      );

      if (actionData && actionData.data !== null) {
        setPhotosFeed((currentPhotos) => [
          ...currentPhotos,
          ...actionData.data,
        ]);

        if (actionData.data.length < 6) {
          setInfinite(false);
        }
      }
    };
    getPagePhotos(page);
  }, [page]);

  useEffect(() => {
    if (infinite) {
      window.addEventListener('scroll', infiniteScroll);
      window.addEventListener('wheel', infiniteScroll);
    } else {
      window.removeEventListener('scroll', infiniteScroll);
      window.removeEventListener('wheel', infiniteScroll);
    }

    return () => {
      window.removeEventListener('scroll', infiniteScroll);
      window.removeEventListener('wheel', infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      <FeedPhotos photos={photosFeed} />
      <div className={styles.loadingWrapper}>
        {infinite ? loading && <Loading /> : <p>Não existem mais postagens.</p>}
      </div>
    </div>
  );
};
