var gql = require('gql');
 
module.exports = function() {
  var query = gql.query();
  query.needs(0);
  query.and(query.exact('rs6025', 'A'), query.exact('rs1800595', 'C'));
  return query;
};