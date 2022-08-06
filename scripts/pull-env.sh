#!/bin/bash

if [[ -f `pwd`/.env ]]; then
  echo "You have .env file. Skip."
  exit 0
fi

vercel env pull --global-config `pwd`/.vercel `pwd`/.env
if [ $? -ne 0 ]
then
  echo "Please login with Vercel"
  vercel link --global-config `pwd`/.vercel
  vercel env pull --global-config `pwd`/.vercel `pwd`/.env
else
  echo "Successfully pulling .env file."
fi

