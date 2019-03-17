
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  for (var i = 0; i < preferences.length; i++) {
    var n = preferences[i];
    var m = preferences[n - 1];
    var k = preferences[m - 1];
    if (k == ( i + 1) && n !== k && m !== k && n !== m) {
      count++;
    }
  }
  return count/3;
};
