'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/forms/button';
import { Input } from '../forms/input';
import { ErrorMessage } from '../helper/error-message';
import { useEffect, useState } from 'react';

import styles from './login-form.module.css';
import passwordReset from '@/actions/passaword-reset';

const FormButton = () => {
  const { pending } = useFormStatus();

  return pending ? (
    <Button disabled={pending}>Resetando...</Button>
  ) : (
    <Button disabled={pending}>Resetar senha</Button>
  );
};

interface LoginResetarFormProps {
  keyToken: string;
  login: string;
}

export const LoginResetarForm = ({
  keyToken,
  login,
}: LoginResetarFormProps) => {
  const [state, action] = useFormState(passwordReset, {
    ok: false,
    error: '',
    data: null,
  });
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    setUrl(window.location.href.replace('perdeu', 'resetar'));
  }, []);

  return (
    <form action={action} className={styles.form}>
      <Input label="Nova senha" name="password" type="password" />
      <input type="hidden" name="login" value={login} />
      <input type="hidden" name="key" value={keyToken} />

      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  );
};
