# Setup Backend Project

## Setup for Mac OS

- docker-compose.yml

        version: '3'
        services:
          pgadmin-client:
            image: dpage/pgadmin4
            restart: always
            environment:
              PGADMIN_DEFAULT_EMAIL: dev@sibau.com
              PGADMIN_DEFAULT_PASSWORD: Pass@1212
            ports:
              - "8011:80"
            volumes:
              - ./pgadmin:/var/lib/pgadmin
            networks:
              - local_services_network
          postgres:
            image: postgres:15
            restart: always
            environment:
              POSTGRES_USER: root
              POSTGRES_PASSWORD: pass1212
            volumes:
              - postgres-data:/var/lib/postgresql/data
            ports:
              - "8010:5432"
            networks:
              - local_services_network

        networks:
          local_services_network:

        volumes:
          postgres-data:

## Setup file for linux

- docker-compose.yml

        version: '3'
        services:
          pgadmin-client:
            image: dpage/pgadmin4
            restart: always
            environment:
              PGADMIN_DEFAULT_EMAIL: dev@sibau.com
              PGADMIN_DEFAULT_PASSWORD: Pass@1212
            ports:
              - "8011:80"
            volumes:
              - ./pgadmin:/home/[userName]/pgadmin
            networks:
              - local_services_network
          postgres:
            image: postgres:15
            restart: always
            environment:
              POSTGRES_USER: root
              POSTGRES_PASSWORD: pass1212
            volumes:
              - postgres-data:/home/[userName]/postgresql/data
            ports:
              - "8010:5432"
            networks:
              - local_services_network

        networks:
          local_services_network:
          
        volumes:
          postgres-data:

- Commands for making docker containers
  
      docker-compose up -d -f  

- Create a table for database

      Add the New Server With Config

      General 

      Name : postgres
      
      Connection 

      host : postgres 
      port : 5432

      username : root
      password : pass1212

- Create a database

      go the the pgDAmin and create the database and schema for the SibaU-backend 

      General 

      database : sibau_website

      Create Schema

      General 

      name : sibau_website

- applying  migrations on database
  
      yarn run migrations:run  

- Additional Commands for docker

      docker ps
      docker logs 32c9befde972

- down the container

      docker-compose down
