'use server';

import { PHOTO_GET } from '@/functions/api';
import { apiError } from '@/functions/api-error';
import { PhotoProps } from './photos-get';

export interface CommentProps {
  comment_ID: string;
  comment_post_ID: string;
  comment_author: string;
  comment_content: string;
}

export interface PhotoData {
  photo: PhotoProps;
  comments: CommentProps[];
}

export const photoGet = async (id: string) => {
  try {
    const { url } = PHOTO_GET(id);
    const response = await fetch(url, {
      next: { revalidate: 60 },
      // tags: ['photo', 'comments'],
    });

    if (!response.ok) {
      throw new Error(`Erro ao pegar a foto`);
    }

    const data = (await response.json()) as PhotoData;
    return { data, ok: true, error: '' };
  } catch (error) {
    return apiError(error);
  }
};
