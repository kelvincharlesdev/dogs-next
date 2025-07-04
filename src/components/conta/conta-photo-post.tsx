'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/forms/button';
import { Input } from '../forms/input';
import { ErrorMessage } from '../helper/error-message';

import styles from './conta-photo-post.module.css';
import { useState } from 'react';
import photoPost from '@/actions/photo-post';

const FormButton = () => {
  const { pending } = useFormStatus();

  return pending ? (
    <Button disabled={pending}>Enviando...</Button>
  ) : (
    <Button disabled={pending}>Enviar</Button>
  );
};

export const ContaPhotoPost = () => {
  const [state, action] = useFormState(photoPost, {
    ok: false,
    error: '',
    data: null,
  });

  const [img, setImg] = useState('');
  const handleImageChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.files) {
      setImg(URL.createObjectURL(target.files[0]));
    }
  };

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form action={action}>
        <Input label="Nome" name="nome" type="text" />
        <Input label="Peso" name="peso" type="number" />
        <Input label="Idade" name="idade" type="number" />
        <input
          type="file"
          name="img"
          id="img"
          className={styles.file}
          aria-label="Escolher imagem"
          onChange={handleImageChange}
        />

        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
      <div
        className={styles.preview}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </section>
  );
};
