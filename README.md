# UdaciBlog

> UdaciBlog is a React + Redux application made for Udacity React Nanodegree.

## Development

### Requisites

-   Yarn/Npm

### Configuring Environment

It's necessary to clone it with submodules, otherwise the server won't run.

```shell
git clone https://github.com/leonardofalk/udaciblog.git --recurse-submodules
cd udaciblog
yarn install # or npm install
```

This will clone and install necessary packages to run the application.

### Starting Development

```shell
yarn start:dev
```

This will start both server and front application, respectively on ports 3001 and 3000. If you want to run the application on a differente port, then see below.

#### Using a different server port

```shell
REACT_APP_API_URL=http://localhost:5000 yarn start
yarn install --cwd server/api-server && node server/api-server/server.js --port 5000
```

This will run the server on port 5000, and the application in port 3000.

### Development Generators

```shell
yarn g component NAME # creates a component named NAME
yarn g container NAME # creates a container component with redux attached
yarn g reducer NAME   # creates a redux reducer with actions included using reduxsauce
yarn g saga NAME      # creates a redux saga, which run async callbacks in redux
```

### Build

```shell
yarn build # or npm build
yarn global add serve
serve -s build
```

This will make a production build and serve.

## Tests

```shell
yarn test          # run default suite
yarn test:coverage # run suite with coverage and display it on screen
yarn test:ci       # run suite with coverage, simulating a CI environment
```
