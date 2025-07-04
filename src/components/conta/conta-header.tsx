'use client';

import React from 'react';

import useMedia from '@/hooks/use-media';
import { usePathname } from 'next/navigation';

import {
  AdicionarIcon,
  EnviarIcon,
  EstatisticasIcon,
  FeedIcon,
  SairIcon,
} from '@/icons';

import styles from './conta-header.module.css';
import Link from 'next/link';
import { logout } from '@/actions/logout';
import { useUser } from '@/context/user-context';

const getTitle = (pathname: string) => {
  switch (pathname) {
    case '/conta/postar':
      return 'Poste Sua Foto';
    case '/conta/estatisticas':
      return 'Estatísticas';
    default:
      return 'Minha Conta';
  }
};

export const ContaHeader = () => {
  const { setUserState } = useUser();
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const pathname = usePathname();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  async function handleLogout() {
    await logout();
    setUserState(null);
  }

  return (
    <header className={styles.header}>
      <h1 className="title">{getTitle(pathname)}</h1>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <Link href="/conta" className={pathname === '/conta' ? 'active' : ''}>
          <FeedIcon />
          {mobile && 'Minhas Fotos'}
        </Link>
        <Link
          href="/conta/estatisticas"
          className={pathname === '/conta/estatisticas' ? 'active' : ''}
        >
          <EstatisticasIcon />
          {mobile && 'Estatísticas'}
        </Link>
        <Link
          href="/conta/postar"
          className={pathname === '/conta/postar' ? 'active' : ''}
        >
          <AdicionarIcon />
          {mobile && 'Adicionar Foto'}
        </Link>
        <button onClick={handleLogout}>
          <SairIcon />
          {mobile && 'Sair'}
        </button>
      </nav>
    </header>
  );
};
