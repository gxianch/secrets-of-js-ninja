// A sorting algorithm (unfinished)

function sort(arrayOfNumbersToSort, ascending) {
  // if num 1 > num 2 swap them
  for (var i=0; i < arrayOfNumbersToSort.length; i++) {
    if (arrayOfNumbersToSort[i] > arrayOfNumbersToSort[i+1]) {
      print(arrayOfNumbersToSort[i] + " is greater than " +
            arrayOfNumbersToSort[i+1]);
    }
  }
}

var myArrayOfNumbers = [8, 17, 400, 244, 35, 1, 12, 24];
var mySortedArray = sort(myArrayOfNumbers, true);
