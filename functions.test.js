const functions = require('./functions');

test('functions to be present', () => 
    expect(functions).toBeDefined()
);

describe('test capitalized function', () => {

    test('capitalized function to be defined', () =>
        expect(functions.capitalized).toBeDefined()
    );

    test('capitalized function for empty input', () =>
        expect(functions.capitalized()).toBe('')
    );

    test('capitalized function for empty string', () =>
        expect(functions.capitalized('')).toBe('')
    );

    test('capitalized function for one word', () =>
        expect(functions.capitalized('void')).toBe('Void')
    );

    test('capitalized function for string', () =>
        expect(functions.capitalized('hi, how are you?')).toBe('Hi, how are you?')
    );

    test('capitalized function for already capitalized string', () =>
        expect(functions.capitalized('Hello, I am great!')).toBe('Hello, I am great!')
    );

});


describe('test reverseString function', () => {

    test('reverseString function to be defined', () =>
        expect(functions.reverseString).toBeDefined()
    );

    test('reverseString function for empty input', () =>
        expect(functions.reverseString()).toBe('')
    );

    test('reverseString function for empty string', () =>
        expect(functions.reverseString('')).toBe('')
    );

    test('reverseString function for one word', () =>
        expect(functions.reverseString('void')).toBe('diov')
    );

    test('reverseString function for string', () =>
        expect(functions.reverseString('hi, how are you?')).toBe('?uoy era woh ,ih')
    );

});

describe('test calculator object', () => {
    
    test('calculator object to be defined', () =>
        expect(functions.calculator).toBeDefined()
    )
    
    describe('test add function in calculator object', () => {

        test('add function to be defined in calculator object', () =>
            expect(functions.calculator.add).toBeDefined()
        );

        test('test add function for 0 inputs', () =>
            expect(() => functions.calculator.add()).toThrow('insufficient inputs')
        );

        test('test add function for 1 inputs', () =>
            expect(() => functions.calculator.add(235)).toThrow('insufficient inputs')
        );

        test('test add function for 2 integer inputs', () =>
            expect(functions.calculator.add(235, 132)).toBe(367)
        );

        test('test add function for 2 float inputs', () =>
            expect(functions.calculator.add(3.233, 1.234)).toBeCloseTo(4.467)
        );

        test('test add function for greater than 2 inputs', () =>
            expect(() => functions.calculator.add(1, 2, 3, 4, 5)).toThrow('too many inputs')
        );

        test('test add function for non-number inputs: string and NaN', () =>
            expect(() => functions.calculator.add('hi', NaN)).toThrow('invalid input')
        );

        test('test add function for non-number inputs: object and Infinity', () =>
            expect(() => functions.calculator.add({a:23}, Infinity)).toThrow('invalid input')
        );

    });

    describe('test subtract function in calculator object', () => {

        test('subtract function to be defined in calculator object', () =>
            expect(functions.calculator.subtract).toBeDefined()
        );

        test('test subtract function for 0 inputs', () =>
            expect(() => functions.calculator.subtract()).toThrow('insufficient inputs')
        );

        test('test subtract function for 1 inputs', () =>
            expect(() => functions.calculator.subtract(235)).toThrow('insufficient inputs')
        );

        test('test subtract function for 2 integer inputs', () =>
            expect(functions.calculator.subtract(235, 132)).toBe(103)
        );

        test('test subtract function for 2 float inputs', () =>
            expect(functions.calculator.subtract(3.233, 1.234)).toBeCloseTo(1.999)
        );

        test('test subtract function for greater than 2 inputs', () =>
            expect(() => functions.calculator.subtract(1, 2, 3, 4, 5)).toThrow('too many inputs')
        );

        test('test subtract function for non-number inputs: string and NaN', () =>
            expect(() => functions.calculator.subtract('hi', NaN)).toThrow('invalid input')
        );

        test('test subtract function for non-number inputs: object and Infinity', () =>
            expect(() => functions.calculator.subtract({a:23}, Infinity)).toThrow('invalid input')
        );

    });

    describe('test multiply function in calculator object', () => {

        test('multiply function to be defined in calculator object', () =>
            expect(functions.calculator.multiply).toBeDefined()
        );

        test('test multiply function for 0 inputs', () =>
            expect(() => functions.calculator.multiply()).toThrow('insufficient inputs')
        );

        test('test multiply function for 1 inputs', () =>
            expect(() => functions.calculator.multiply(235)).toThrow('insufficient inputs')
        );

        test('test multiply function for 2 integer inputs', () =>
            expect(functions.calculator.multiply(235, 132)).toBe(31020)
        );

        test('test multiply function for 2 float inputs', () =>
            expect(functions.calculator.multiply(3.233, 1.234)).toBeCloseTo(3.989522)
        );

        test('test multiply function for greater than 2 inputs', () =>
            expect(() => functions.calculator.multiply(1, 2, 3, 4, 5)).toThrow('too many inputs')
        );

        test('test multiply function for non-number inputs: string and NaN', () =>
            expect(() => functions.calculator.multiply('hi', NaN)).toThrow('invalid input')
        );

        test('test multiply function for non-number inputs: object and Infinity', () =>
            expect(() => functions.calculator.multiply({a:23}, Infinity)).toThrow('invalid input')
        );
        
    });

    describe('test divide function in calculator object', () => {

        test('divide function to be defined in calculator object', () =>
            expect(functions.calculator.divide).toBeDefined()
        );

        test('test divide function for 0 inputs', () =>
            expect(() => functions.calculator.divide()).toThrow('insufficient inputs')
        );

        test('test divide function for 1 inputs', () =>
            expect(() => functions.calculator.divide(235)).toThrow('insufficient inputs')
        );

        test('test divide function for 2 integer inputs', () =>
            expect(functions.calculator.divide(235, 132)).toBeCloseTo(1.7803030303)
        );

        test('test divide function for 2 float inputs', () =>
            expect(functions.calculator.divide(3.233, 1.234)).toBeCloseTo(2.6199351702)
        );

        test('test divide function for greater than 2 inputs', () =>
            expect(() => functions.calculator.divide(1, 2, 3, 4, 5)).toThrow('too many inputs')
        );

        test('test divide function for division by 0', () => 
            expect(() => functions.calculator.divide(564.91, 0)).toThrow('division by zero')
        );

        test('test divide function for non-number inputs: string and NaN', () =>
            expect(() => functions.calculator.divide('hi', NaN)).toThrow('invalid input')
        );

        test('test divide function for non-number inputs: object and Infinity', () =>
            expect(() => functions.calculator.divide({a:23}, Infinity)).toThrow('invalid input')
        );

    });

});

describe('test caesarCipher function', () => {

    test('caesarCipher function to be defined', () =>
        expect(functions.caesarCipher).toBeDefined()
    );

    test('test caesarCipher function for empty input', () => 
        expect(() => functions.caesarCipher()).toThrow('insufficient inputs')
    );

    test('test caesarCipher function for one input', () => 
        expect(() => functions.caesarCipher('void walker')).toThrow('insufficient inputs')
    );

    test('test caesarCipher function for greater than 2 inputs', () => 
        expect(() => functions.caesarCipher('VoiD walkER', 23, 'space')).toThrow('too many inputs')
    );

    test('test caesarCipher function for invalid inputs', () => 
        expect(() => functions.caesarCipher('VoiD walkER', '23')).toThrow('invalid input')
    );

    test('test caesarCipher function for a string without punctuations and 23 shifts', () => 
        expect(functions.caesarCipher('VoiD walkER', 23)).toBe('SLFA TXIHBO')
    );

    test('test caesarCipher function for a string with punctuations, numbers and 17 shifts', () => 
        expect(functions.caesarCipher('VoiD walkER! space domination1324.', 17)).toBe('MFZU NRCBVI! JGRTV UFDZERKZFE1324.')
    );

    test('test caesarCipher function for a string with punctuations, numbers and -5 shifts', () => 
        expect(functions.caesarCipher('VoiD walkER! space domination1324.', -5)).toBe('QJDY RVGFZM! NKVXZ YJHDIVODJI1324.')
    );

});

describe('test analyzeArray function', () => {

    test('analyzeArray function to be defined', () =>
        expect(functions.analyzeArray).toBeDefined()
    );

    test('test analyzeArray function for empty input', () => 
        expect(() => functions.analyzeArray()).toThrow('insufficient inputs')
    );
    
    test('test analyzeArray function for greater than 1 inputs', () => 
        expect(() => functions.analyzeArray([1, 2, 34], 8)).toThrow('too many inputs')
    );

    test('test analyzeArray function for invalid inputs', () => 
        expect(() => functions.analyzeArray([1, 2, 'hi'])).toThrow('invalid input')
    );

    test('test analyzeArray function for valid input', () => 
        expect(functions.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        })
    );
});