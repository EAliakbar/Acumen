'use strict';

const config = require('../config');
const ipRangeCheck = require("ip-range-check");

function aggregator(data) {
  this.table = {};

  this.addSourceToTable = function (entry){
    if(!(entry.src in this.table)){
      this.table[entry.src] = { sent: 0, received: 0 }
    }

    this.table[entry.src].sent += parseInt(entry.sentPacket);
    this.table[entry.src].received += parseInt(entry.rcvPacket)
  };

  this.addDestToTable = function (entry){
    if(!(entry.dest in this.table)){
      this.table[entry.dest] = { sent: 0, received: 0 }
    }

    this.table[entry.dest].sent += parseInt(entry.rcvPacket);
    this.table[entry.dest].received += parseInt(entry.sentPacket)
  };

  data.forEach(entry => {

    if(ipRangeCheck(entry.src, config.LOCAL_RANGE)) {
      if (!ipRangeCheck(entry.dest, config.LOCAL_RANGE)) {
        this.addSourceToTable(entry)
      }
    }
    else {
      if (ipRangeCheck(entry.dest, config.LOCAL_RANGE)) {
        this.addDestToTable(entry)
      }
    }
  });

  console.log(this.table)
  return this.table
}

function aggregate(data) {
  return new aggregator(data)
}

module.exports = aggregate;