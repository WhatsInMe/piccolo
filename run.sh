#!/bin/sh

. ./.env
HOST_PORT=${HOST_PORT:-80} # override with PORT=<port>

dev() {
        EXPRESS_PORT=${HOST_PORT} npm run dev
}

prod() {
        docker build -t yw/piccolo:dev . || exit 1
        docker rmi -f $(docker images -f "dangling=true" -q)
        docker run \
                -e EXPRESS_PORT=${EXPRESS_PORT} \
                -e GITHUB_CLIENT_ID=${GITHUB_CLIENT_ID} \
                -e GITHUB_CLIENT_SECRET=${GITHUB_CLIENT_SECRET} \
                -e NODE_ENV=${NODE_ENV} \
                -e POSTGRES_DB=${POSTGRES_DB} \
                -e POSTGRES_HOST=${POSTGRES_HOST} \
                -e POSTGRES_PASS=${POSTGRES_PASS} \
                -e POSTGRES_PORT=${POSTGRES_PORT} \
                -e POSTGRES_USER=${POSTGRES_USER} \
                -e REDIRECT_URL=${REDIRECT_URL} \
                --rm \
                --name piccolo \
                -p ${HOST_PORT}:${EXPRESS_PORT} \
                yw/piccolo:dev
}

case $1 in
dev)
        dev
        ;;
prod)
        prod
        ;;
*)
        exit 1
        ;;
esac
