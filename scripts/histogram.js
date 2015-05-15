var each = function(collection, func) {
  if(Array.isArray(collection)) {
      for(var i = 0; i < collection.length; i++) {
          func(collection[i], i, collection);
      }
    } else {
      for(var key in collection) {
          func(collection[key], key, collection);
      }
  }
};

var reduce = function(collection, combiner, start) {
  var accumulatedVal = start || 0;
  each(collection, function(val) {
     if(!accumulatedVal) {
         accumulatedVal = val;
     } else {
         accumulatedVal = combiner(accumulatedVal, val);
     }
  });
  return accumulatedVal;
};

var histogram = function (collection) {
    return reduce(collection, function(accumulatedVal, current){
        if(!accumulatedVal[current]) {
            accumulatedVal[current] = 1;
        } else {
            accumulatedVal[current]++;
        }
        return accumulatedVal;
    }, {});
};

var filter = function(collection, predicate) {
  var result = [];
  each(collection, function(val) {
     if(predicate(val)) {
         result.push(val);
     }
  });
  return result;
};

var hist = histogram(prompt("Enter a sentence."));
