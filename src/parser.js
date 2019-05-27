'use strict';

const splitLines = require('split-lines');

function parse(data) {
  let lines = splitLines(data);
  return lines.filter(line => line !== "").map(line => {
    let splitted = line.split(' ');
    return {
      src: splitted[0],
      dest: splitted[1],
      sentPacket: splitted[2],
      rcvPacket: splitted[3]
    }
  })
}

module.exports = parse;