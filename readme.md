## simple boilerplate to run fullstack web application

- express as server, with typescript and reload
- solidjs for UI, with tailwind
- mongodb as DB
- docker / compose to run server and DB, UI will run simple in localhost


### how to run

1. `docker compose up --build`
2. `cd ui`
3. `npm i`
4. `npm run dev`
5. open browser on http://localhost:3000

- access express server on http://localhost:4000
- explore mongodb with tool like MongoDB Compas, 
connect with localhost:27017 and credentials, as defined in compose file:

```
    MONGO_INITDB_ROOT_USERNAME
    MONGO_INITDB_ROOT_PASSWORD
```
