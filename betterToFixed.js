const betterToFixed = (num, precision) => {
  let originalValue = null;
  ///////// case 1 - if there is no precision ///////////
  if(!precision){
    originalValue = num;
    return originalValue;
  }

  let value = num.toString();
  let indexDot = value.indexOf('.')
  let elemsBeforeDot = value.substring(0, indexDot);
  let elemsAfterDot = value.substring(indexDot + 1, value.length+1);
  

  //////// case 2 - if there is no dot //////////
  if(value.indexOf('.') === -1){
    let zeros = '';
    for(let i = 0; i<precision; i++){
      zeros = zeros + '0';
    }
    originalValue = value + '.' + zeros;
    return Number(originalValue);
  }

  ////////// case 3 - if there are dot and precision ///////////////
  if(!!(value.indexOf('.')) && precision){
    // convert value to array
    let valueToArray = value.split('');
    // remove dot
    valueToArray.splice(indexDot, 1)
    // add dot on indexDot + precision position
    valueToArray.splice(indexDot+precision, 0, '.')
    // round joined array
    let roundedValue = Math.round(Number(valueToArray.join(''))).toFixed();
    // return to array
    let roundedValueToArray = roundedValue.split('');
    // add dot
    if(elemsBeforeDot === '0'){
      roundedValueToArray.splice(0, 0, '0' ,'.')
    } else{
      roundedValueToArray.splice(elemsBeforeDot.length, 0, '.')
    }
    // set original value
    originalValue = roundedValueToArray.join('')
    
    ////// case 4 - if precision > elemsAfterDot.length /////////
    if(precision > elemsAfterDot.length){
      for(let i = elemsAfterDot.length; i<precision; i++){
        originalValue = originalValue + '0';
      }
    }

    return Number(originalValue);
  }
  
}