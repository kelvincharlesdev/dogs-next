import { LoginPerdeuForm } from '@/components/login/login-perdeu-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perdeu a senha | Dogs',
  description: 'Recuperar a sua senha',
};

// export const dynamic = 'force-dynamic';

export default function PerdeuPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Perdeu a senha?</h1>
      <LoginPerdeuForm />
    </div>
  );
}
