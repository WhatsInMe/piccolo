#!/bin/sh

echo "==============================================================================="
curl --location --request GET 'http://localhost:3001/posts' \
    --header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJrZXZpbmphbWVzQGdtYWlsLmNvbSIsImlhdCI6MTYyOTY5NzY5OX0.hnVZJpm6SflYnuFmXURtG6WbAT081kyZhIb7SyxJ0Po' \
    --header 'Authorization: Bearer test1' 2>/dev/null | jq '.'

echo "==============================================================================="
curl --location --request GET 'http://localhost:3001/posts' \
    --header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJrZXZpbmphbWVzQGdtYWlsLmNvbSIsImlhdCI6MTYyOTY5NzY5OX0.hnVZJpm6SflYnuFmXURtG6WbAT081kyZhIb7SyxJ0Po' \
    --header 'Authorization: Bearer test2' 2>/dev/null | jq '.'

echo "==============================================================================="
curl --location --request GET 'http://localhost:3001/posts' \
    --header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJrZXZpbmphbWVzQGdtYWlsLmNvbSIsImlhdCI6MTYyOTY5NzY5OX0.hnVZJpm6SflYnuFmXURtG6WbAT081kyZhIb7SyxJ0Po' \
    --header 'Authorization: Bearer test3' 2>/dev/null | jq '.'

echo "==============================================================================="
curl --location --request GET 'http://localhost:3001/posts' \
    --header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJrZXZpbmphbWVzQGdtYWlsLmNvbSIsImlhdCI6MTYyOTY5NzY5OX0.hnVZJpm6SflYnuFmXURtG6WbAT081kyZhIb7SyxJ0Po' \
    --header 'Authorization: Bearer test4'
