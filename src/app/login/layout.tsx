import styles from './Login.module.css';

interface LoginLayoutProps {
  children: React.ReactNode;
}

export default async function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <div className={styles.login}>
      <div className={styles.forms}>{children}</div>
    </div>
  );
}
