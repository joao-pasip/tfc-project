# ⚽ Projeto TFC ⚽

O projeto TFC é uma API de Futebol, onde você pode buscar informações sobre a classificação e partidas de um campeonato.

Esse projeto foi feito para praticar a criação de APIs RESTful, usando TypeScript e Sequelize com MySQL. Usando prioritariamente POO (Programação Orientado à Objetos).

Os testes de integração feitos para o backend foram feitos usando Mocha, Chai e Sinon.

Existe validação de usuário usando JWT (JSON Web Token). (É necessário um token pra criar novas partidas).

Um Front-end também está disponível (feito pela Trybe).
O Back-end foi feito por mim, desde a criação das rotas até os testes E2E.

# Tecnologias usadas

Docker, TypeScript, Express, Sequelize, MySQL, BCryptJS, JWT, JOI, Mocha, Chai, Sinon...

# Como usar

<details>
  <summary><strong>Clonando o repositório e instalando as dependências</strong></summary>

- `git clone git@github.com:joao-pasip/tfc-project.git`
- `cd tfc-project`
- `npm install`

</details>

<details>
  <summary><strong>Rodando os aplicativos</strong></summary>

- `npm run compose:up:dev`
  - pra começar a aplicação, (front e back) usando docker compose.
- Copiar as informações do arquivo .env.example e criar um .env na pasta de backend
- O Front-end pode ser acessado aqui: http://localhost:3000

</details>

<details>
  <summary><strong>Logando</strong></summary>

- Credenciais de login com poderes de admin (para propósitos de teste).
  - email: `admin@admin.com`
  - senha: `secret_admin`

</details>

<details>
  <summary><strong>Rodando testes E2E</strong></summary>

- Entrar na pasta de backend: `cd app && cd backend`
  - para rodar os testes de integração do Back-end
  - `npm test`

</details>

# Considerações finais

Esse foi o meu primeiro projeto usando Sequelize com TypeScript, foi muito desafiante, em que, aprendi muito no processo. Me ajudou a consolidar minhas habilidades com Docker, TypeScript (incluindo testes E2E com TS), fazer interfaces e classes onde tentei ao máximo seguir os princípios SOLID e ter um código limpo.
