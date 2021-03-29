// Declare an interface called Mountain that contains the following properties:
// ○ name - string
// ○ height - number
// ● Declare an array called mountains which is an array of type Mountain.
// ● Fill the array with the following mountains:
// ● Declare a function called findNameOfTallestMountain. It takes one parameter, an
// array of Mountain objects. It returns a string, the name of the tallest mountain in the
// given array. If the array argument is empty, return an empty string ("").
// ● Call findNameOfTallestMountain, passing it your mountains array as an argument.
// ● Store the result of the function call (the return value) in a variable and then console.log
// the variable. (Hint: It will print “Everest”.)
var mountainsWeveClimbed = [
    {
        name: 'Kilimanjaro',
        height: 19341
    },
    {
        name: 'Everest',
        height: 29029
    },
    {
        name: 'Denali',
        height: 20310
    }
];
function findNameOfTallestMountain(mountains) {
    var tallest = null;
    for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
        var mountain = mountains_1[_i];
        if (!tallest) {
            tallest = mountain;
        }
        console.log("The tallest mountain you've climbed is " + tallest.name);
        if (mountain.height > tallest.height) {
            tallest = mountain;
        }
        return tallest === null || tallest === void 0 ? void 0 : tallest.name;
    }
}
;
