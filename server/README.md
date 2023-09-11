# TalentOutsource Server

## Table of Contents

1. [Technologies](#1-technologies)
2. [Type Checking using Typescript](#2-type-checking-using-typescript)
3. [Code Linting using Eslint](#3-code-linting-using-eslint)
4. [Code Formatting using Prettier](#4-code-formatting-using-prettier)
5. [Setup Nodemon](#5-setup-nodemon)
6. [Testing with Jest](#6-setup-testing-using-jest)
7. [Database Management using Mongoose ORM](#7-database-management-using-mongodb)
8. [GraphQL API using GraphQL HTTP](#8-graphql-api-using-graphql-http)
9. [GraphQL API using socket.io](#graphql-api-using-graphql-http)
10. [Session Management using Express Session](#session-management-using-express-session)
11. [Authentication using Passport](#session-management-using-express-session)
12. [Security](#session-management-using-express-session)
13. [Task Scheduling with Bull](#graphql-api-using-graphql-http)

### 1. Technologies

- API Architectures: REST(Node|Express) & GraphQL(GraphQL Http)
- Testing: Jest, Supertest, MongoDB Memory Server
- Storage: MongoDB
- Security: Helmet, XSS, Rate limiting
- Email: NodeMailer
- File Upload: Cloudinary
- Task Scheduling: Bull, Redis

### 2. Type Checking using Typescript

```shell
npm i -g typescript ts-node
npm i -D typescript ts-node @types/nodemon @types/express tsconfig-paths
npx tsc --init
```

### **3. Code Linting using Eslint**

- Install vscode eslint plugin

- Configure eslint (Recommendation to install eslint on a local level):

```shell
npm i -D eslint
npx eslint --init
```

✔ How would you like to use ESLint? To check syntax, find problems, and enforce code style
✔ What type of modules does your project use? JavaScript modules (import/export)
✔ Which framework does your project use? None of these
✔ Does your project use TypeScript? » Yes
✔ Where does your code run? Node
✔ How would you like to define a style for your project? Use a popular style guide Airbnb:
✔ What format do you want your config file to be in? JavaScript
✔ Would you like to install them now with npm? » Yes
✔ Create .eslintignore file: touch .eslintignore add: node_modules dist coverage

- Install typescript parser:

`npm i -D @typescript-eslint/parser`

- Install import resolver(optional):

`npm i -D eslint-import-resolver-typescript tsconfig-paths`

- Reload vscode for configurations to kick in: ctrl + shift + p > reload

### **4. Code Formatting using Prettier**

- Install vscode eslint plugin.

- Install prettier in project:
  `npm i -D prettier`

```json
{
  "semi": true,
  "tabWidth": 2,
  "printWidth": 120,
  "singleQuote": true,
  "trailingComma": "es5",
  "arrowParens": "avoid",
  "jsxBracketSameLine": true
}
```

- Install prettier eslint plugins:

```shell
  npm i -D eslint-config-prettier eslint-plugin-import eslint-plugin-prettier
```

### 5. Setup Nodemon

```shell
npm i -D nodemon
```

 <!-- nodemon.json -->

```json
{
  "watch": ["src"],
  "ext": "js,ts,json,graphql,env",
  "ignore": ["node_modules", "dist", "build", ".git", "coverage"],
  "exec": "ts-node -r tsconfig-path/register ./src/server.ts",
  "restartable": "rs",
  "env": {
    "NODE_ENV": "development"
  }
}
```

### 6. Setup Testing using Jest

```shell
npm i -D jest ts-jest @types/jest supertest @types/supertest mongodb-memory-server
npx ts-jest config:init
```

 <!-- package.json -->

```json
"scripts": {
  "test": "jest --watch --no-cache",
  "test:ci": "jest"
}
```

### 7. Database Management using MongoDB

```shell
npm i mongoose
```

### 8. GraphQL API using GraphQL HTTP

```shell
npm i ws
npm i --save-dev @types/ws
```

```shell
npm i graphql-upload```

### 9. Session Management using Express Session

```shell
npm i express-session connect-mongo
npm i --save-dev @types/express-session
```

### 10. Authentication using Passport

docker run --name bull-redis -d redis

docker run -d --name bull-redis -p 127.0.0.1:6379:6379 redis
