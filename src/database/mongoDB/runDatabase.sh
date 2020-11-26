#!/bin/bash
docker pull mongo
docker stop node-mongoose
docker container rm node-mongoose
docker run --name node-mongoose -p 27017:27017 -d mongo