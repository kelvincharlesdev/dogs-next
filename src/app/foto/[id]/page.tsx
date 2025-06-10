import { photoGet } from '@/actions/photo-get';
import { PhotoContent } from '@/components/photo/photo-content';
import { notFound } from 'next/navigation';

interface FotoIdParamsProps {
  params: { id: string };
}

export async function generateMetadata({ params }: FotoIdParamsProps) {
  const { data } = await photoGet(params.id);
  if (!data) {
    return {
      title: 'Fotos',
    };
  }

  return {
    title: data?.photo.title,
  };
}

export default async function FotoIdPage({ params }: FotoIdParamsProps) {
  const { data } = await photoGet(params.id);

  if (!data) return notFound();

  return (
    <section className="container mainContainer">
      <PhotoContent data={data} single={true} />
    </section>
  );
}
