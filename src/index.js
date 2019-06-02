'use strict';

const config = require('../config');
const httpService = require('./httpService');
const parse = require('./parser');
const aggregate = require('./aggregator');
const graphite_store = require('./store/graphite');

function getData() {
  httpService.get(config.ACCOUNTING_URL)
  .then(parse)
  .then(aggregate)
  .then(graphite_store)
  .catch(err => {
    console.error(err)
  });
}

getData();
setInterval(getData, 60*1000);