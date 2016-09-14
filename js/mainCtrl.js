angular.module("EarthSoftDemo").controller("mainCtrl", ["$scope", function ($scope) {
    
    $scope.letters = {
        a: 0
        , b: 0
        , c: 0
        , d: 0
        , e: 0
        , f: 0
        , g: 0
        , h: 0
        , i: 0
        , j: 0
        , k: 0
        , l: 0
        , m: 0
        , n: 0
        , o: 0
        , p: 0
        , q: 0
        , r: 0
        , s: 0
        , t: 0
        , u: 0
        , v: 0
        , w: 0
        , x: 0
        , y: 0
        , z: 0
    };

    //creates default count amount of zero, loops through user input and increases count for each letter that is found in userInput string
    function countLetters(input) {
        input = input.toLowerCase();
        var lettersCount = {
        a: 0
        , b: 0
        , c: 0
        , d: 0
        , e: 0
        , f: 0
        , g: 0
        , h: 0
        , i: 0
        , j: 0
        , k: 0
        , l: 0
        , m: 0
        , n: 0
        , o: 0
        , p: 0
        , q: 0
        , r: 0
        , s: 0
        , t: 0
        , u: 0
        , v: 0
        , w: 0
        , x: 0
        , y: 0
        , z: 0
    };
        for (var i = 0; i < input.length; i++) {
            if (Number.isInteger(lettersCount[input[i]])) {
                lettersCount[input[i]]++;
            }
        }
        return lettersCount
    };
    
    $scope.userInput = "";
    
    //function to be called on by button
    $scope.analyze = function(input, test){
        console.time("time")
        if(test) $scope.letters = countLetters(input);
        console.timeEnd("time")
    };

}]);