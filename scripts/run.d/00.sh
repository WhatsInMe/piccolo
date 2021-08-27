#!/bin/sh

echo "==============================================================================="
curl --location --request GET 'http://localhost:3001/posts' \
    --header 'Authorization: Bearer test1' 2>/dev/null | jq '.'

echo "==============================================================================="
curl --location --request GET 'http://localhost:3001/posts' \
    --header 'Authorization: Bearer test2' 2>/dev/null | jq '.'

echo "==============================================================================="
curl --location --request GET 'http://localhost:3001/posts' \
    --header 'Authorization: Bearer test3' 2>/dev/null | jq '.'

echo "==============================================================================="
curl --location --request GET 'http://localhost:3001/posts' \
    --header 'Authorization: Bearer test4'
