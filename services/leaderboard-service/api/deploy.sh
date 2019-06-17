#!/bin/bash

# we do this because the prune has remove this deploy dependency.
npm install serverless-offline --save-dev.

environment=$1

echo "deploying serivce to ${environment} environment"

serverless deploy --verbose --stage ${environment}