import { PhotoProps } from '@/actions/photos-get';
import Image from 'next/image';
import Link from 'next/link';

import styles from './feedPhotos.module.css';

export const FeedPhotos = ({ photos }: { photos: PhotoProps[] }) => {
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {photos.map((photo, i) => (
        <li className={styles.photo} key={photo.id + i}>
          <Link href={`/photo/${photo.id}`} scroll={false}>
            <Image
              src={photo.src}
              alt={photo.title}
              width={1500}
              height={1500}
              sizes="80vw"
              className="img-responsive"
              priority={i < 6 ? true : false}
            />
            <span className={styles.visualizacao}>{photo.acessos}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
