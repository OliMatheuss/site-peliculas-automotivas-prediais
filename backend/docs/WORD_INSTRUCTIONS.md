# Como gerar o documento Word (.docx) com aparência profissional

Este guia explica como gerar um `.docx` usando o Pandoc a partir do arquivo Markdown preparado: `backend/docs/technical-overview-for-word.md`.

Pré-requisitos
- Instalar Pandoc: https://pandoc.org/installing.html (Windows installer)
- Ter uma versão do Microsoft Word instalada (para ajustar estilos de referência)

Passo 1 — Criar um `reference.docx` com a tipografia desejada
1. Abra o Word e crie um novo documento em branco.
2. No Word, ajuste os estilos (Normal, Heading 1, Heading 2, etc.) para a fonte que você prefere (recomendado: "Calibri" ou "Lato"; para aparência moderna use "Inter" se disponível).
3. Salve o arquivo como `backend/docs/reference.docx`.

Passo 2 — Verifique que as imagens SVG estão nos caminhos:
- `backend/docs/assets/overview_flow.svg`
- `backend/docs/assets/db_er.svg`
- `frontend/docs/assets/frontend_flow.svg`
- `frontend/docs/assets/auth_sequence.svg`

Passo 3 — Converter para .docx usando Pandoc (PowerShell)

Abra o PowerShell na raiz do projeto (`c:\Users\olima\Desktop\SITE`) e execute:

```powershell
# opcional: definir caminho para recursos
$env:PATH = $env:PATH

# comando pandoc para gerar um .docx com o reference.docx
pandoc `
  backend/docs/technical-overview-for-word.md `
  -o technical-overview.docx `
  --resource-path=backend/docs/assets;frontend/docs/assets `
  --reference-doc=backend/docs/reference.docx
```

Observações:
- `--resource-path` permite que o Pandoc encontre arquivos de imagem referenciados por caminhos relativos.
- Se as imagens SVG não aparecerem corretamente no Word, converta SVG para PNG (ex.: usar Inkscape ou exportar do navegador) e atualize os links no Markdown para apontarem para PNG.

Passo 4 — Abrir `technical-overview.docx` no Word e ajustar visualmente (se necessário)
- Verifique cabeçalhos, tamanhos de fonte e imagens; ajuste margens e espaçamento conforme sua identidade visual.

Alternativa sem Pandoc
- Você pode abrir o Markdown no VS Code com a extensão Markdown Preview Enhanced, exportar como HTML/PDF e importar para o Word, ou abrir o Markdown e copiar/colar para Word manualmente.

Problemas comuns
- Pandoc não encontra imagens: verifique `--resource-path` e caminhos relativos no Markdown.
- Fonte não aplicada: crie e use `reference.docx` com os estilos ajustados.

Se quiser, eu posso:
- (1) gerar automaticamente `backend/docs/reference.docx` com estilos básicos (requer ferramentas externas — mas posso gerar um DOCX mínimo via script Node) — ou
- (2) converter SVGs para PNG e atualizar o Markdown para garantir compatibilidade com Word.

Indique se prefere que eu converta as SVGs para PNG automaticamente e atualize o arquivo Markdown para máxima compatibilidade com Word.
