'use client';

import React, { useEffect, useRef, useState } from 'react';

import { PhotoCommentsForm } from './photo-comments-form';
import styles from './photo-comments.module.css';
import { useUser } from '@/context/user-context';
import { CommentProps } from '@/actions/photo-get';

export interface PhotoCommentsProps {
  single: boolean;
  id: string;
  comments: CommentProps[];
}

export const PhotoComments = ({ comments, id, single }: PhotoCommentsProps) => {
  const [comment, setComment] = useState(() => comments);
  const commentsSection = useRef<HTMLUListElement>(null);

  const { user } = useUser();

  useEffect(() => {
    if (commentsSection.current) {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${single ? styles.single : ''}`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {user && (
        <PhotoCommentsForm single={single} id={id} setComments={setComment} />
      )}
    </>
  );
};
