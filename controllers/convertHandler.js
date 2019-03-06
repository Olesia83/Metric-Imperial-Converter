/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var regex = /\/\d*\.*\d*\/+/;
    var test = regex.test(input);   
    if (test === false) {      
      if (/^\d+/.test(input)===true) {
            var result = input.split(/[^0-9\.\/]/i)[0]; 
      } else {
          result = 1;
        }
        result=eval(result);        
        return result;
    } else return 'Invalid number';
  };
  
  this.getUnit = function(input) {
    var units = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    var result = input.split(/[^A-Za-z]/);
    var l = result.length-1;
    result = result[l];
      if (units.includes(result)) {
        return result.toLowerCase();
      } else {
        return 'Invalid unit';
      } 
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    var input = ['gal','l','mi','km','lbs','kg'];
    var expect = ['l','gal','km','mi','kg','lbs'];
    for (var i=0; i<input.length; i++){
        if (input[i] === initUnit) {
          result = expect[i];
          break;
        }
      }
      return result;  
  };

  this.spellOutUnit = function(unit) {
    var result;
    var input = ['gal','l','mi','km','lbs','kg'];
    var expect = ['gallons','liters','miles','kilometers','pounds','kilograms'];
      for (var i=0; i<input.length; i++){
        if (input[i] === unit) {
          result = expect[i];
          break;
        }
      }
      return result;
    
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch (initUnit){
            case 'gal' : result = initNum*galToL; break;
            case 'l' : result = initNum/galToL; break;
            case 'mi' : result = initNum*miToKm; break;
            case 'km' : result = initNum/miToKm; break;
            case 'lbs' : result = initNum*lbsToKg; break;
            case 'kg' : result = initNum/lbsToKg; break;
                        }
       return result;    
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    var unitIn = this.spellOutUnit(initUnit);
    var unitOut = this.spellOutUnit(returnUnit);
    returnNum = returnNum.toFixed(5);
    result = (initNum + ' ' + unitIn + ' converts to '+ returnNum +' ' +unitOut).toString();
    
    return result;
  };

}

module.exports = ConvertHandler;
