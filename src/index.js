'use strict';

const config = require('../config');
const httpService = require('./httpService');
const parse = require('./parser');
const aggregate = require('./aggregator');

httpService.get(config.ACCOUNTING_URL)
.then(parse)
.then(aggregate)
.catch(err => {
  console.error(err)
});