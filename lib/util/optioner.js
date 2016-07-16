'use strict';

module.exports = function (option) {
  var res  = {};
  res.css  = option.css  || 'none';
  res.file = option.file || 'owl.css';
  return res;
}