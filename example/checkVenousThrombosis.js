var sca = require('./genoset-venous-thrombosis');
var fs = require('fs');
var path = require('path');
var es = require('event-stream');
var JSONStream = require('JSONStream');

var jsonStream = fs.createReadStream(path.join(__dirname, "./data/23andme-male.json"));

var query = sca();
var genoStream = query.stream();

jsonStream
  .pipe(JSONStream.parse('*'))
  .pipe(genoStream);

var count = 0;
genoStream.on('data', function(snp) {
  console.log('Analyzed', ++count, 'SNPs');
});

genoStream.on('end', function() {
  console.log("There are", query.matches().length, "matches for genoset 251");
  console.log("There is a", query.percentage(), "percent chance that genoset matches");
  if (query.percentage() == 0){

  	console.log("No chances of Venous Thrombosis BITCH!! :) ");
  }

  else {

  	console.log("I'm sorry bro, You've got chances of Venous Thrombosis! :( ");

  }
});

