var testName = 'This is a test Typescript file';
var testArray = [1, 2, 3, 4, 5];
var testTuple = ['test', 1, true];
var testObject = {
    type: 'car',
    model: 'Toyota',
    year: 2020
};
var CodeStatus;
(function (CodeStatus) {
    CodeStatus[CodeStatus["OK"] = 200] = "OK";
    CodeStatus[CodeStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    CodeStatus[CodeStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(CodeStatus || (CodeStatus = {}));
var testInterface = {
    name: 'Sairil',
    age: 39,
    isMale: true
};
var extendedInterface = {
    name: testInterface.name,
    age: testInterface.age,
    isMale: testInterface.isMale,
    address: 'Kuala Lumpur'
};
var testFunction = function () {
    testArray.forEach(function (num) {
        console.log(num);
    });
};
var testDisplayTuple = function () {
    testTuple.forEach(function (item) {
        console.log(item);
    });
};
var testDisplayExtendedInterface = function () {
    Object.keys(extendedInterface).forEach(function (key) {
        console.log(key + ': ' + extendedInterface[key]);
    });
};
