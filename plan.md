# Plano — Mauricio Filho Guitarist EPK

## Escopo e implementação

Landing page estática de artista/EPK, implementada com HTML5 semântico, CSS3 e JavaScript Vanilla, sem dependências ou framework. O conteúdo público renderiza no HTML inicial. Os caminhos de CSS, JS e imagens serão relativos para funcionar tanto no Preview quanto no GitHub Pages sob `/guitarrista`. Os vídeos usarão fachadas com miniaturas e criarão o iframe do YouTube apenas após interação; a galeria terá lightbox acessível controlado por teclado. O resultado inclui SEO em inglês, sitemap, documentação mínima de edição e arquivo ZIP com o projeto.

## Direção de design

**Movimento:** editorial industrial de turnê, com brutalismo refinado e códigos visuais de cartaz de metal contemporâneo.

**Princípios:** hierarquia tipográfica de alto impacto; conteúdo organizado como um press kit de leitura rápida; contraste acessível; vermelho usado como sinal de energia e orientação, não como preenchimento constante.

**Filosofia de cor:** preto carvão e ardósia ancoram a página; branco metálico mantém legibilidade; vermelho carmesim destaca ações, marcadores de turnê e pequenos filetes como luz de palco.

**Paradigma de layout:** composição assimétrica e editorial, com grandes faixas de conteúdo, colunas de detalhe, linhas de rota numeradas e mosaicos de vídeo; a foto de palco enviada sustenta o hero em tela ampla com gradiente escuro para texto.

**Elementos assinatura:** monograma MF angular; filetes vermelhos e numeração de arquivo de turnê; cartões escuros com bordas e textura discreta.

**Interação e animação:** navegação fixa com scroll suave; menu compacto acessível em telas estreitas; fachadas de vídeo que carregam iframe somente sob clique; lightbox com botões e setas de teclado. Animações curtas, não essenciais, desativadas para `prefers-reduced-motion`.

**Tipografia:** Oswald para títulos condensados, Inter para corpo e interface; títulos em caixa alta com espaçamento controlado e texto corrido em largura confortável.

**Essência da marca:** guitarista brasileiro de palco e estúdio, disponível internacionalmente para bandas, produção e aulas. Personalidade: incisiva, experiente, direta.

**Voz:** segura e profissional, sem frases genéricas. Exemplos: “Built for the stage. Ready for the studio.” / “Bring the next riff to life.”

**Wordmark:** monograma geométrico “MF” acompanhado pelo nome em fonte condensada; sem depender de logotipo rasterizado.

**Cor de assinatura:** vermelho carmesim `#c8102e`.

## Estrutura do projeto

- `index.html`: conteúdo público semântico, SEO, dados JSON-LD, navegação, hero e seções EPK.
- `css/style.css`: tokens, grid/flex responsivo, componentes, estados de foco, movimento reduzido e estilos do lightbox.
- `js/main.js`: menu mobile, criação sob demanda dos iframes, lightbox, cópia do email e interações acessíveis.
- `assets/img/mauricio-live-stage.webp`: foto de palco fornecida pelo usuário, usada no hero e na galeria; a legenda permanece genérica pois não foi informada a localização da foto.
- `sitemap.xml`, `robots.txt`, `manus-routes.json`: descoberta e declaração das rotas do site estático.
- `README.md`: instruções simples para editar e publicar em GitHub Pages.
- `TODO.md`: critérios de entrega transcritos do briefing.
