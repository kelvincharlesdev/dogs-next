'use client';

import { CommentProps } from '@/actions/photo-get';
import { PhotoCommentsProps } from './photo-comments';
import { useFormState, useFormStatus } from 'react-dom';

import styles from './photo-comments-form.module.css';
import { EnviarIcon } from '@/icons';
import { ErrorMessage } from '../helper/error-message';
import commentPost from '@/actions/comment-post';
import { useEffect, useState } from 'react';

interface PhotoCommentsFormProps {
  single?: boolean;
  id?: string;
  setComments: React.Dispatch<React.SetStateAction<CommentProps[]>>;
}

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={styles.button} disabled={pending}>
      <EnviarIcon />
    </button>
  );
};

export const PhotoCommentsForm = ({
  single,
  id,
  setComments,
}: PhotoCommentsFormProps) => {
  const [state, action] = useFormState(commentPost, {
    ok: false,
    data: null,
    error: '',
  });

  useEffect(() => {
    if (state.ok && state.data) {
      setComments((comments) => [...comments, state.data]);
      setComment('');
    }
  }, [state, setComments]);

  const [comment, setComment] = useState('');

  return (
    <form
      action={action}
      className={`
      ${styles.form} ${single ? styles.single : ''}`}
    >
      <input type="hidden" name="id" id="id" value={id} />
      <textarea
        className={styles.textarea}
        name="comment"
        id="comment"
        placeholder="Comente..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>

      <FormButton />
      <ErrorMessage error={state.error} />
    </form>
  );
};
