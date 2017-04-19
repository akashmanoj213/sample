function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// numbers of values
var n = 25;

// make initially sorted array
var arr = [];
for (var i=1; i<=n; ++i) { arr.push(i); }

// randomly sort the array
arr.sort(function () { return Math.random() - 0.5; });

var allImages = "";

for (var i = 1; i <= 25; i++) {
  // var width = getRandomSize(200, 400);
  // var height =  getRandomSize(200, 400);
  // allImages += '<img src="https://placekitten.com/'+width+'/'+height+'" alt="pretty kitty">';
  allImages += '<img src="assets/img/'+ arr[i] +'.jpg" alt="your image">';
}

$('#photos').append(allImages);