Reference https://www.apollographql.com/docs/tutorial/introduction/

## Setup

```shell
npm install
node index.js //starts graphql server at 4001
```

```shell
curl http://localhost:4001  \
    -H 'Content-Type: application/json' \
    -d '{"query":"{users{id email}}"}'
```


```shell
curl http://localhost:4001  \
    -H 'Content-Type: application/json'   \
    -d '{"query":"mutation _($userInput: UserInput) {addUser(user: $userInput) {id email}}","variables":{"userInput":{"email":"user@gmail.com","password":"pwd"}}}'
```


```shell
curl http://localhost:4001 \
    -H 'Content-Type: application/json'   \
    -d '{"query":"mutation {addOrder(itemId:10) {id itemId}}"}'
```

## GraphQL client
```shell
npx http-server ./qlClient
```
