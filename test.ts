const testName: string = 'This is a test Typescript file';

const testArray: number[] = [1, 2, 3, 4, 5];
const testTuple: [string, number, boolean] = ['test', 1, true];

const testObject: {type: string, model: string, year: number} = {
    type: 'car',
    model: 'Toyota',
    year: 2020
}

enum CodeStatus {
    OK = 200,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500
}

interface TestInterface {
    name: string;
    age: number;
    isMale: boolean;
}

const testInterface: TestInterface = {
    name: 'Sairil',
    age: 39,
    isMale: true
}

interface ExtendedInterface extends TestInterface {
    address: string;
}

const extendedInterface: ExtendedInterface = {
    name: testInterface.name,
    age: testInterface.age,
    isMale: testInterface.isMale,
    address: 'Kuala Lumpur'
}

const testFunction = () => {
    testArray.forEach((num) => {
        console.log(num);
    })
}

const testDisplayTuple = () => {
    testTuple.forEach((item) => {
        console.log(item);
    })
}

const testDisplayExtendedInterface = () => {
    Object.keys(extendedInterface).forEach((key) => {
        console.log(key + ': ' + extendedInterface[key as keyof ExtendedInterface]);
    })
}




