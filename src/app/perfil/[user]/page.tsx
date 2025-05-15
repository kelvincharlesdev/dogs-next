export default function PerfilUserPage({
  params,
}: {
  params: { user: string };
}) {
  return (
    <div>
      <h1>Perfil do Usuário: {params.user}</h1>
    </div>
  );
}
