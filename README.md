# Maurício Filho — Guitarist EPK

Site estático para o EPK do guitarrista Maurício Filho. O projeto usa apenas HTML5, CSS3 e JavaScript Vanilla; não há etapa de compilação, dependências ou framework.

## Estrutura

- `index.html` — conteúdo e metadados da página.
- `css/style.css` — identidade visual e regras responsivas.
- `js/main.js` — menu, vídeos sob clique, lightbox e cópia do email.
- `assets/img/` — fotografia de palco fornecida e favicon.
- `sitemap.xml`, `robots.txt` e `manus-routes.json` — arquivos estáticos de SEO/rotas.

Os textos visíveis do site estão em inglês, conforme o briefing. Os caminhos de recursos são relativos para que a página funcione em um subcaminho como `/guitarrista`.

## Pré-visualização local

Abra `index.html` diretamente no navegador ou rode um servidor estático na pasta do projeto:

```bash
python3 -m http.server 8000
```

Acesse `http://localhost:8000`.

## Publicação no GitHub Pages

Publique o conteúdo desta pasta como raiz do repositório GitHub Pages configurado para o caminho `/guitarrista`. Não remova os caminhos relativos `./css/`, `./js/` e `./assets/`. Use o domínio e a configuração de DNS já associados a `mauriciofilhoguitar.com.br`.

## Atualizações rápidas

- **Vídeo de estreia (5 de dezembro de 2026):** em `index.html`, substitua o placeholder de `.premiere-player` pelo iframe oficial do YouTube e remova/ajuste o comentário `Release day`.
- **Novas fotos:** salve a imagem em `assets/img/`, duplique o `figure.photo-card` e atualize `data-photo-index` (começando em `0`), o texto `alt` e as legendas. O lightbox é montado com esses cards.
- **Nova banda/colaboração:** duplique o template HTML comentado na seção Band History, substitua os campos, confira os créditos e inclua apenas links oficiais.
- **Vídeos:** cada cartão da videografia mantém o ID em `data-video-id`, título e URL de saída no próprio HTML; não coloque o iframe até que a pessoa clique.
- **Contato e redes:** atualize em conjunto os links da seção de contato, rodapé, metadados sociais e JSON-LD caso algum dado mude.
