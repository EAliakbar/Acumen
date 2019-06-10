let config = {};

config.ACCOUNTING_URL = "http://192.168.88.1/accounting/ip.cgi";
config.LOCAL_RANGE = ['192.168.88.0/24'];
config.GRAPHITE_CARBON_URL = 'plaintext://graphite:2003/';

module.exports = config;