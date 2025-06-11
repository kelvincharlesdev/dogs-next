# 🐕 Dogs - Rede Social para Cachorros

Uma rede social moderna e responsiva dedicada ao universo canino, onde usuários podem compartilhar fotos dos seus pets, interagir através de comentários e acompanhar estatísticas de engajamento.

![Next.js](https://img.shields.io/badge/Next.js-14.1.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react)

## 📋 Índice

- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Arquitetura](#arquitetura)
- [Instalação e Configuração](#instalação-e-configuração)
- [Como Usar](#como-usar)
- [Design System](#design-system)
- [Segurança](#segurança)
- [Responsividade](#responsividade)
- [Deploy](#deploy)
- [Scripts Disponíveis](#scripts-disponiveis)
- [Contribuição](#contribuicao)
- [Roadmap](#roadmap)
- [Problemas Conhecidos](#problemas-conhecidos)
- [Autor](#autor)

## 🚀 Tecnologias

- **[Next.js 14.1.4](https://nextjs.org/)** - Framework React com App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[React 18+](https://reactjs.org/)** - Biblioteca para interfaces
- **[CSS Modules](https://github.com/css-modules/css-modules)** - Estilização modular
- **[Victory](https://formidable.com/open-source/victory/)** - Gráficos e visualizações
- **[Jose](https://github.com/panva/jose)** - Manipulação de JWT

## ✨ Funcionalidades

### 🔐 Autenticação Completa

- [x] Login e logout de usuários
- [x] Criação de novas contas
- [x] Recuperação de senha via email
- [x] Reset de senha seguro
- [x] Validação automática de tokens JWT
- [x] Middleware de proteção de rotas

### 📱 Sistema de Fotos

- [x] Upload de fotos com metadados (nome, idade, peso)
- [x] Feed público com scroll infinito
- [x] Visualização individual de fotos
- [x] Sistema de comentários
- [x] Contagem de visualizações
- [x] Exclusão de fotos próprias

### 👤 Área do Usuário

- [x] Dashboard personalizado
- [x] Histórico de uploads
- [x] Estatísticas detalhadas com gráficos
- [x] Gerenciamento de perfil

### 🎨 Interface e UX

- [x] Design responsivo (mobile-first)
- [x] Tema moderno inspirado em redes sociais
- [x] Animações suaves
- [x] Loading states e feedback visual
- [x] Tratamento de erros amigável

## 🏗️ Arquitetura

### Estrutura de Pastas

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── conta/             # Área privada do usuário
│   ├── foto/              # Visualização de fotos
│   ├── login/             # Sistema de autenticação
│   └── perfil/            # Perfis públicos
├── actions/               # Server Actions
├── components/            # Componentes React
│   ├── conta/            # Componentes da área privada
│   ├── feed/             # Sistema de feed
│   ├── forms/            # Formulários reutilizáveis
│   ├── helper/           # Utilitários de UI
│   ├── login/            # Componentes de auth
│   └── photo/            # Sistema de fotos
├── context/              # Context API (Estado global)
├── functions/            # Utilitários e helpers
├── hooks/                # Custom hooks
└── icons/                # Componentes de ícones
```

### Server Actions

O projeto utiliza Server Actions do Next.js para operações do servidor:

- **Autenticação**: `login.ts`, `logout.ts`, `user-get.ts`
- **Gerenciamento de Fotos**: `photo-post.ts`, `photo-get.ts`, `photo-delete.ts`
- **Sistema Social**: `comment-post.ts`, `photos-get.ts`
- **Estatísticas**: `stats-get.ts`
- **Recuperação de Senha**: `password-lost.ts`, `password-reset.ts`

### Context API

- **UserContext**: Gerenciamento global do estado de autenticação
- Integração com localStorage para persistência
- Hooks customizados para facilitar o uso

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### 1. Clone o repositório

> git clone:
> [`https://github.com/kelvincharlesdev/dogs-next.git`](https://github.com/kelvincharlesdev/dogs-next)

> cd
> `dogs-next`

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Configure as variáveis de ambiente

> **ℹ️ Nota:** Este projeto utiliza a API externa da Origamid, não sendo necessário configurar variáveis de ambiente no momento.

```bash
# .env.local (opcional para futuras configurações)
# NEXT_PUBLIC_API_URL=https://dogsapi.origamid.dev/json
```

### 4. Execute o projeto

```bash
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o resultado.

## 📖 Como Usar

### 1. Criação de Conta

- Acesse `/login/criar`
- Preencha username, email e senha
- Confirme o email se necessário

### 2. Login

- Entre com suas credenciais em `/login`
- Será redirecionado para a área privada

### 3. Upload de Fotos

- Acesse `/conta/postar`
- Selecione uma foto do seu pet
- Adicione informações (nome, idade, peso)
- Publique no feed

### 4. Interação

- Navegue pelo feed público
- Visualize fotos individuais
- Adicione comentários
- Acompanhe suas estatísticas

## 🎨 Design System

### Cores Principais

- **Primary**: `#fb1` (Amarelo vibrante)
- **Secondary**: `#764701` (Marrom escuro)
- **Background**: `#fafafa` (Cinza claro)
- **Text**: `#333` (Cinza escuro)

### Tipografia

- **Primary**: Helvetica, Arial, sans-serif
- **Secondary**: Spectral, Georgia (títulos)

### Componentes Reutilizáveis

- **Button**: Botão principal com estados
- **Input**: Campo de entrada padronizado
- **Loading**: Indicador de carregamento
- **ErrorMessage**: Exibição de erros

## 🔒 Segurança

- Autenticação JWT com refresh automático
- Middleware de proteção de rotas
- Validação de dados no servidor
- Sanitização de inputs
- Headers de segurança configurados

## 📱 Responsividade

- Design mobile-first
- Breakpoints otimizados
- Images responsivas com Next.js Image
- Touch-friendly para dispositivos móveis

## 🚀 Deploy

### Vercel (Recomendado)

> **🌐 Demo:** [Acesse a aplicação em produção](https://dogs-next-kelvincharles.vercel.app)

## 🧪 Scripts Disponíveis

```bash
npm run dev      # Modo desenvolvimento
npm run build    # Build para produção
npm run start    # Servidor de produção
npm run lint     # Linting com ESLint
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Roadmap

- [ ] Sistema de likes/curtidas
- [ ] Notificações em tempo real
- [ ] Chat entre usuários
- [ ] Filtros de fotos
- [ ] Sistema de seguir usuários
- [ ] API própria (substituir API externa)
- [ ] Testes automatizados
- [ ] PWA (Progressive Web App)

## 🐛 Problemas Conhecidos

- Sistema de delete de fotos em depuração
- Possível timeout em uploads grandes

## 📚 Aprendizados

- Este projeto foi uma jornada de muito aprendizado e prática. Como desenvolvedor júnior, pude explorar conceitos modernos do ecossistema React e me aprofundar em funcionalidades do Next.js 14, especialmente com o uso do App Router e das Server Actions.

- Com as Server Actions, aprendi a lidar com lógica de servidor de forma segura, sem depender de uma API REST externa para todas as interações. Isso simplificou o fluxo de autenticação, upload de fotos e gerenciamento de dados.

- O uso de tipagem com TypeScript foi essencial para evitar bugs e me forçou a pensar melhor sobre os dados desde o início.

- Também entendi melhor como estruturar projetos com componentes reutilizáveis, hooks customizados e separação de responsabilidades.

- Esse projeto me deu mais confiança para criar aplicações modernas e escaláveis com React e Next.js. Cada funcionalidade implementada foi uma pequena vitória e um passo a mais na minha jornada como desenvolvedor.

## 👨‍💻 Autor

<p align="center">
  <img src="https://media.licdn.com/dms/image/v2/D4D03AQHip__jqQexeg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1674946196667?e=1755129600&v=beta&t=wbwC3jHo8EZ8jlE60YejvsOQG1VIzIKN24KeL01mPV0" alt="Kelvin Charles" width="150" style="border-radius: 50%;" />
</p>

<p align="center"><strong>👋 Desenvolvido por Kelvin Charles</strong></p>

<p align="center">
  <a href="https://www.linkedin.com/in/kelvin-charles/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  &nbsp; <!-- Espaço entre os badges -->
  <a href="https://github.com/kelvincharlesdev" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
</p>

> 📚 Projeto criado durante o curso de Next.js da Origamid  
> 🎯 Focado em aprender as melhores práticas do React e Next.js moderno

---

**Dogs** - Conectando pessoas através do amor pelos cães 🐕💙
