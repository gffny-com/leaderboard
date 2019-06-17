#!/bin/bash

# we do this because the prune has remove this deploy dependency.
npm install serverless-offline --save-dev.

echo "deploying serivce to ${1} environment"

serverless deploy --verbose --stage ${1}