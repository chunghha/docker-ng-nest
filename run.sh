#!/usr/bin/env bash

docker stop ng-nest
docker rm -v ng-nest
docker build . -t ng-nest
docker run --name ng-nest -d -p 4600:4600 ng-nest
docker ps
