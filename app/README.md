# TalentOutsource Client

## Table of Contents

1. [StoryBook](storybook)
2. [TanStack](tanstack)
3. [GraphQL with Apollo GraphQL Client](#3-graphql-with-apollo-graphql-client)
4. [Push Notification with Firebase](#3-graphql-with-apollo-graphql-client)

PostCSS Language Support vs code

### Storybook

Storybook is packaged as a small, development-only, workshop that lives alongside your app. It provides an isolated iframe to render components without interference from app business logic and context. That helps you focus development on each variation of a component, even the hard-to-reach edge cases.

`npx storybook@latest init`
`npm run storybook`

### TanStack

TanStack is a library that helps with sending HTTP requests and keeping your frontend UI in sync.
It comes with some advanced features that enhance fetching and might be a bit complex to implement from scratch.
A lot of code when using useEffect and fetch.

Triggering a refetch when you navigate away and then navigate back
Caching such that data fetched is cached and updated(data fetched) behind the scenes.

`npm i @tanstack/react-query`

### 3. GraphQL with Apollo GraphQL Client

```shell
npm i @apollo/client graphql
```

### 4. Push Notification with Firebase

- Create Firebase Project

- Install Firebase

```shell
npm i firebase
```

- Initialize Firebase

- Integrate Cloud Messaging

    Project settings > Cloud Messaging > Web configuration > Web push certificates > Generate key pair

- Firebase Notification Permissions:
In order to send push notifications to the browser, we first need to get permission from the user. This will open the “Enable notifications?” popup.
