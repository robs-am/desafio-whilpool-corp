
# Desafio WhirlpoolCorp

## Visão Geral

Este repositório faz parte do desafio técnico para vaga de Desenvolvedor Fron-End da WhirlpoolCorp. Escolhi fazer o redesign de uma landing page da marca Brastemp, a Brastemp Retrô.


## Tech Stack
  - React
  - TypeScript
  - VTEX



## Sobre
Para este redesign, resolvi utilizar como base a identidade visual já existente do produto consultando o próprio site da Brastemp. Foi utilizado o store theme da vtex como base para o projeto. Desenvolvi 3 componentes customziados:

#### BannerContent: 
Este componente é responsável pela renderização do banner principal. Através do site-editor, o cliente pode escolher entre vídeo ou Banner (caso opte pela performance). Para que a imagem apareça, é necessário retirar o link do provedor (youtuvbe, vimeo)

#### ProductSummary: 
Este componente é responsável pela renderização de ums simulação do Frigobar Retrô, já que não estamos usando o vendor oficial da Brastemp para extrair as informações do contexto do Produto.

### ImageGallery: 

Este componente é responsável por renderizar uma galeria de imagens com thumbnails para visualizaçõws de diferentes perspectivas do produto

    
## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/robs-am/desafio-whilpool-corp
```

Entre no diretório do projeto

```bash
  cd desafio-whilpool-corp
```


Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento VTEX IO:

```bash
vtex login {vendor}
```
```bash
vtex use {workspace}
```
```bash
vtex link
```

#### Configuração da Rota na VTEX:

Para que a landing page seja exibida corretamente, é necessário criar dentro do admin da vtex, em Pages, a página relacionada a Linha Retro e adicionar "brastemp-retro" como tema da página.





