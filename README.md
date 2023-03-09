# Overview
Cade-Zamora is a simple CRUD app built with:
* nextjs
* prisma

It has integrations with:

* postgreSQL: database
* minio: s3 storage for images upload

# Docker Deployment

In order to deploy the app in your docker environment, you will need the following installed:

* docker
* docker compose

You can then create a `docker-compose.yaml` similar to the [one found at the root of the repository here.](./docker-compose.yaml)

finally, run the following command in the terminal at where you created the `docker-compose.yaml` file:

```
docker compose up -d
```

if `docker compose` is an unrecognized command in your system, then you are probably using the older version of docker compose. You can use this command instead:

```
docker-compose up -d
```

# Docker Build

Build the image

```
docker build -t eriexn/cade-zamora:latest .
```


# Development Guide
## prerequisites

The development environment expects that you have the following installed:

* NodeJs
* yarn
* docker 
* git

## clone the repository
start with cloning the repository. You can use your desired git tool, or run the following command:

```bash
git clone https://github.com/riexn/cade-zamora.git
```

## Install the dependencies
```
yarn
```

## create `.env` file
The `.env` has values for the database connection and the node environment we're running. Initialize your file with the following:

```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5444/mydb?schema=public"
MINIO_ENDPOINT="localhost"
MINIO_PORT="9000"
MINIO_ROOT_PASSWORD="minio-root-password"
MINIO_ROOT_USER="minio-root-user"
NODE_ENV="development"

NEXT_PUBLIC_MINIO_URL="http://localhost:9000"
```

## Start Minio (S3 Storage)
```
yarn s3:up
```

This will a container with Minio in it, it will use the ports 9000 and 9001.

> if your system already has the ports `9000` or `9001` in use, then you will [need to follow this guide](#change-the-development-minio-port).

<!-- Change the development Minio port -->

## Start the database

```bash
yarn db:up
```
This will start a container with postgres 13.6 in it. It will use port `5444`.

> if your system already has the port `5444` in use, then you will [need to follow this guide](#change-the-development-database-port).


## Initialize development environment


```
yarn dx
```

This command will:

* reset the database
* initialize prisma
* seed the database with random data
* reset minio storage

Use this command whenever you want the app to go back to the "initial state".

## Run the app in development mode

```
yarn dev
```

It will start the app on `http://localhost:3000`

# Change the development Database port
Our development database, which can be brought with the command `yarn db:up` will run at the port `5444`. If your system already has that port in use, or if you want to change it, then you will need to change two files.


## modify the docker compose file
<h5 a><strong><code>integrations/postgres/docker-compose.yaml</code></strong></h5>

```yaml
version: '3'

services:
  db:
    image: postgres:13.6
    restart: always
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: mydb
    ports:
      - 5444:5432 
        #👆 change this value
    volumes:
      - db-data:/var/lib/postgresql/data

volumes:
  db-data:
```
## modify the .env file

> Note that the .env file is something you would have created by [following the development guide](#development-guide).

<h5 a><strong><code>.env</code></strong></h5>

```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5444/mydb?schema=public"
                                                      #👆 change this value         
```

# Change the development Minio port
Our development s3 storage, which can be brought with the command `yarn s3:up` will run at the ports `9000` for the api and `9001` for the WebUI. If your system already has those port in use, or if you want to change them, then you will need to change two files.

## modify the docker compose file

<h5 a><strong><code>integrations/minio/docker-compose.yaml</code></strong></h5>

```yaml
version: '3'

services:
  s3:
    image: bitnami/minio:latest
    ports:
      - '9000:9000'
        #👆 change this value for the api 
      - '9001:9001'
        #👆 change this value for the webui
    environment:
      - MINIO_ROOT_USER=minio-root-user
      - MINIO_ROOT_PASSWORD=minio-root-password
      - MINIO_SERVER_ACCESS_KEY=minio-access-key
      - MINIO_SERVER_SECRET_KEY=minio-secret-key
      - MINIO_DEFAULT_BUCKETS=images
```

<h5 a><strong><code>.env</code></strong></h5>

```bash
MINIO_PORT="9000"
          #👆 change this value to match the one you have set for the api port         
```
