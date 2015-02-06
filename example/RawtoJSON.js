var dna = require('dna2json');
var JSONStream = require('JSONStream');
var fs = require('fs');
 
fs.createReadStream("./data/23andme-male.txt")
  .pipe(dna.createParser())
  .pipe(JSONStream.stringify())
  .pipe(fs.createWriteStream("./data/23andme-male.json"));