var grl = '$#!@%&*'
module.exports = word => grl.repeat(Math.floor(word.length / grl.length)) + grl.slice(0,word.length  % grl.length)

