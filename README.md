# Exemplo de useRef

Uma aplicação simples em React que demonstra o uso do hook `useRef` no React.

## Visão Geral

Este projeto mostra como usar o hook `useRef` para acessar e manipular diretamente elementos DOM em uma aplicação React. O exemplo concentra-se no gerenciamento do foco em inputs.

## Funcionalidades

- Foco automático no input quando o componente é montado
- Botão para redefinir o foco no elemento input
- Demonstração do useRef com TypeScript

## Instalação

Para executar este projeto localmente:

```bash
# Clone o repositório
git clone https://github.com/Math3ux/userefs-example.git

# Navegue até o diretório do projeto
cd useref-example

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## Entendendo useRef

O hook `useRef` no React fornece uma maneira de:

1. Acessar elementos DOM diretamente
2. Armazenar valores mutáveis que não acionam re-renderizações quando alterados
3. Persistir valores entre renderizações

Neste exemplo, usamos `useRef` para acessar um campo de entrada para focá-lo programaticamente.

## Estrutura do Projeto

- `src/Components/Input.tsx` - Componente que demonstra useRef para focar um input
- `src/App.tsx` - Componente principal da aplicação

## Como Funciona

O componente `Input` cria uma referência para o elemento input:

```tsx
const inputRef = useRef<HTMLInputElement>(null);
```

Esta referência então é:
1. Anexada ao input usando o atributo `ref`
2. Acessada no hook `useEffect` para focar quando montado
3. Usada no manipulador de clique do botão para redefinir o foco no input

## Tecnologias Utilizadas

- React 19
- TypeScript
- Vite

## Licença

MIT
