const config = require('../../config');
const graphite = require('graphite');
let client = graphite.createClient(config.GRAPHITE_CARBON_URL);

//Replacing dot character in ip addresses with _
//Because Graphite use dot as separator
function normalize_name(name) {
  return name.replace(/\./g, '_')
}

module.exports = function (metrics) {
  let new_metric = {};
  Object.keys(metrics).forEach(key => {
    let new_key = normalize_name(key);
    new_metric[new_key] = metrics[key]
  });
  client.write({'internet_usage': new_metric}, function (err) {
    console.log("Data Saved Successfully");
    if(err)
    {
      console.error("Error in connection to Graphite")
    }
  })
};
