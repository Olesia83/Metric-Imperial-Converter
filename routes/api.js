/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      if (input !== '') {
        var initNum = convertHandler.getNum(input);
        var initUnit = convertHandler.getUnit(input);
        if ((initNum == 'invalid number') && (initUnit == 'invalid unit')) {
            res.status(200).send("invalid number and unit");
          } else if (initNum == 'invalid number') {
            res.status(200).send("invalid number");          
          } else if (initUnit == 'invalid unit') {
            res.status(200).send("invalid unit");
          } else {   
            
            var returnNum = convertHandler.convert(initNum, initUnit);
            var returnUnit = convertHandler.getReturnUnit(initUnit);
            var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
            if (initUnit==='l') {
              initUnit='L';
            }
            if (returnUnit === 'l') {
              returnUnit='L';
            }
           // initNum = Number(initNum.toFixed(5));
            returnNum = Number(returnNum.toFixed(5));
            res.status(200).json({initNum, initUnit, returnNum, returnUnit, "string": toString});
          }      
      } else {
        res.status(200).json("Please enter the parameters");
      }
    });
    
};