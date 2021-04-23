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

### Fetch users

<img width="680" alt="Screenshot 2021-04-23 at 1 55 47 PM" src="https://user-images.githubusercontent.com/436710/115928900-badcf280-a43b-11eb-940c-9c1d26893bec.png">

### Add user

<img width="793" alt="Screenshot 2021-04-23 at 1 56 07 PM" src="https://user-images.githubusercontent.com/436710/115928914-c03a3d00-a43b-11eb-8294-ef1f2f9732f1.png">

### Add order
<img width="734" alt="Screenshot 2021-04-23 at 1 56 18 PM" src="https://user-images.githubusercontent.com/436710/115928920-c3352d80-a43b-11eb-88ca-cf8ccf3bbd3a.png">
