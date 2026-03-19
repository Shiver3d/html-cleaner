# Html Cleaner

Pequena utilidade que vi sendo necessária onde o usuário precisa limpar HTML mantendo apenas o texto puro, com interface inspirada visualmente em Persona 3 que foi reaproveitado do meu porfólio e claramente foi vibecodado, servindo majoritamente pela utilidade.

## Descrição

Este projeto é uma pequena aplicação React + TypeScript que permite colar blocos de HTML (por exemplo perguntas/alternativas copiadas de conteúdo com tags) e obter somente o texto limpo. A interface foi estilizada conforme referência fornecida (círculos de transição, faixas e um visual azul inspirado em Persona 3).

Funcionalidades principais:
- Campo de entrada onde você cola HTML
- Saída seletável (textarea) contendo o texto limpo
- Botão "Copiar" para enviar o texto limpo para a área de transferência
- Atalho `Ctrl+L` (Windows/Linux) / `Cmd+L` (macOS) para limpar (remover tags) do conteúdo do campo de entrada

## Como executar

Pré-requisitos: Node.js (>=16 recomendado) e `npm`.

No diretório do projeto:

```bash
npm install
npm run dev
```

Abra o endereço mostrado pelo Vite (por padrão `http://localhost:5173`).

Comandos úteis:

- `npm run dev` — roda o servidor de desenvolvimento
- `npm run build` — cria build de produção
- `npm run preview` — prevê a versão de produção localmente

## Uso

1. Cole HTML no campo "HTML input".
2. O campo de saída mostra o texto limpo automaticamente.
3. Use o botão **Copiar** para copiar o texto limpo para a área de transferência.
4. Pressione `Ctrl+L` (ou `Cmd+L` no macOS) para substituir o conteúdo do input pelo texto limpo.

O campo de saída é um `textarea` somente leitura, mas permite seleção com o mouse para copiar manualmente se preferir.

## Arquivos importantes

- `src/components/HtmlCleaner.tsx` — componente principal com a lógica de limpeza, atalho e cópia.
- `src/persona3.scss` — estilos inspirados (transições, layout e cores).
- `src/App.tsx` — ponto de entrada que renderiza o `HtmlCleaner`.


---