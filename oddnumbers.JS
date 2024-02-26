let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Anonymous Function
arr.forEach(function(num) {
    if (num % 2 !== 0) console.log("Anonymous Function:",num);
  });

// IIFE
(function(arr) {
    arr.forEach(function(num) {
      if (num % 2 !== 0) console.log("IIFE:",num);
    });
  })(arr);
