export default function FotoIdPage({ params }: { params: { id: number } }) {
  return (
    <div>
      <p>Photo ID: {params.id}</p>
    </div>
  );
}
