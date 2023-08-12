# Jobs GraphQL Server

## Table of Contents

(1.) [Setup React App](#setup-react-app)
(2.) [Setup Typescript](#setup-typescript)
(3.) [Setup Nodemon](#setup-nodemon)
(4.) [Testing using Jest](#setup-typescript)
(5.) [GraphQL API using GraphQL HTTP](#graphql-api-using-graphql-http)
(6.) [Database Management using Mongoose](#database-management-using-mongodb)
(7.) [Session Management using Express Session](#session-management-using-express-session)
(8.) [Authentication using Passport](#session-management-using-express-session)

### Setup React App

### Setup Typescript

    npm i -D typescript ts-node @types/nodemon @types/express tsconfig-paths

    npm i -g typescript ts-node

    npx tsc --init

### Setup Nodemon

    npm i -D nodemon

    <!-- nodemon.json -->
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

### Setup Testing using Jest

    npm i -D jest ts-jest @types/jest supertest @types/supertest mongodb-memory-server

    npx ts-jest config:init

    <!-- package.json -->
    "scripts": {
        "test": "jest --watch --no-cache",
        "test:ci": "jest"
    },

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
