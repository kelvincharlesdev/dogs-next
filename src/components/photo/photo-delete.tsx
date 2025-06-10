'use client';

import { useState } from 'react';

import styles from './photo-delete.module.css';
import photoDelete from '@/actions/photo-delete';

export const PhotoDelete = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const confirm = window.confirm('Tem certeza que deseja deletar esta foto?');
    if (confirm) {
      await photoDelete(id);
      console.log('Foto deletada com sucesso');
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};
