# TalentOutsource Server

## Table of Contents

1. [Technologies](#1-technologies)
2. [Setup React App](#setup-react-app)
3. [Type Checking using Typescript](#setup-typescript)
4. [Setup Nodemon](#setup-typescript)
5. [Code Linting using Eslint & Prettier](#setup-nodemon)
6. [Testing with Jest](#setup-typescript)
7. [Database Management using Mongoose ORM](#database-management-using-mongodb)
8. [GraphQL API using GraphQL HTTP](#graphql-api-using-graphql-http)
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

### Setup React App

### Setup Typescript

```javascript
npm i -D typescript ts-node @types/nodemon @types/express tsconfig-paths

npm i -g typescript ts-node

npx tsc --init
```

### **Configure Eslint**

- Install vscode eslint plugin

- Recommendation to install eslint on a local level:

`npm i -D eslint`

- ---Configure eslint:

`npx eslint --init`

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

### Configure Prettier

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

### Setup Nodemon

`npm i -D nodemon`

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

### Setup Testing using Jest

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

### GraphQL API using GraphQL HTTP

npm i graphql graphql-http

### Database Management using MongoDB

npm i mongoose

### Session Management using Express Session

npm i express-session connect-mongo

npm i --save-dev @types/express-session

### Authentication using Passport

npm i passport

npm i --save-dev @types/passport

 <!-- app.ts -->

app.use(passport.initialize());
app.use(passport.session());

docker run --name bull-redis -d redis

docker run -d --name bull-redis -p 127.0.0.1:6379:6379 redis
