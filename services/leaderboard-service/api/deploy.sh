#!/bin/bash

# we do this because the prune has remove this deploy dependency.
npm install serverless-offline --save-dev.

environment=$1

serverless deploy --verbose --stage ${environment}