#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkTsLambdaStack } from '../lib/cdk-ts-lambda-stack';

const app = new cdk.App();
new CdkTsLambdaStack(app, 'CdkTsLambdaStack');
