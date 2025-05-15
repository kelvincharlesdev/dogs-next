import React from 'react';
import styles from './input.module.css';

interface InputProps extends React.ComponentProps<'input'> {
  label: string;
  error?: string;
}

export const Input = ({ label, error, ...props }: InputProps) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={props.name}>
        {label}
      </label>
      <input className={styles.input} id={props.name} {...props} />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
