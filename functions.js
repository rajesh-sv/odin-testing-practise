function capitalized(s='') {
    return s? s[0].toUpperCase() + s.slice(1): '';
}

function reverseString(s='') {
    let rev_s = '';
    for (let i=s.length-1; i>-1; i--)
        rev_s += s[i];
    return rev_s;
}

calculator = {
    isNumber: function (n) {
        return typeof n == 'number' && !isNaN(n) && isFinite(n);
    },

    add: function (a, b) {
        if (arguments.length < 2)
            throw new Error('insufficient inputs');
        if (arguments.length > 2)
            throw new Error('too many inputs');
        if (!this.isNumber(a) || !this.isNumber(b))
            throw new Error('invalid input');
        return a + b;
    },

    subtract: function (a, b) {
        if (arguments.length < 2)
            throw new Error('insufficient inputs');
        if (arguments.length > 2)
            throw new Error('too many inputs');
        if (!this.isNumber(a) || !this.isNumber(b))
            throw new Error('invalid input');
        return a - b;
    },

    multiply: function (a, b) {
        if (arguments.length < 2)
            throw new Error('insufficient inputs');
        if (arguments.length > 2)
            throw new Error('too many inputs');
        if (!this.isNumber(a) || !this.isNumber(b))
            throw new Error('invalid input');
        return a * b;
    },

    divide: function (a, b) {
        if (arguments.length < 2)
            throw new Error('insufficient inputs');
        if (arguments.length > 2)
            throw new Error('too many inputs');
        if (!this.isNumber(a) || !this.isNumber(b))
            throw new Error('invalid input');
        if (b === 0)
            throw new Error('division by zero');
        return a / b;
    },

};

function caesarCipher(s='', shifts) {
    if (arguments.length < 2)
            throw new Error('insufficient inputs');
    if (arguments.length > 2)
        throw new Error('too many inputs');
    if (typeof s !== 'string' || !calculator.isNumber(shifts))
        throw new Error('invalid input');
    
        s = s.toLocaleUpperCase();
    if (shifts > 0)
        shifts = shifts % 26;
    else
        shifts = 26 * (Math.floor(Math.abs(shifts / 26)) + 1) + shifts;
    
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const cipher = [];
    
    for (const c of s) {
        const charCode = c.charCodeAt(0) - 65;
        cipher.push((charCode > -1 && charCode < 26)? alphabets[(charCode + shifts) % 26]: c);
    }

    return cipher.join('');
}

function analyzeArray(arr) {
    if (arguments.length < 1)
        throw new Error('insufficient inputs');
    if (arguments.length > 1)
        throw new Error('too many inputs');
    
    let sum = 0, min = Infinity, max = -Infinity;
    
    for (const num of arr) {
        if (!calculator.isNumber(num))
            throw new Error('invalid input');
        sum += num;
        if (num < min)
            min = num;
        if (num > max)
            max = num
    }

    return {
        average: sum / arr.length,
        min,
        max,
        length: arr.length,
    }
}

module.exports = {
    capitalized,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
}