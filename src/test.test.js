import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './index.js';
describe('capitalize tests', () => {
  test('capitalize to exist', () => {
    expect(capitalize('anything'));
  });

  describe('capitalize to capitalize the first letter', () => {
    test('yarn to be Yarn', () => {
      expect(capitalize('yarn')).toMatch('Yarn');
    });

    test('charles to be Charles', () => {
      expect(capitalize('charles')).toMatch('Charles');
    });
  });
  describe('capitalize Throws Proper Errors', () => {
    test('Empty strings returns an error', () => {
      expect(() => {
        capitalize('');
      }).toThrow();
    });
    test('No arguments give a proper error', () => {
      expect(() => {
        capitalize();
      }).toThrow('You need to give an argument!');
    });
    test('A number gives a proper type error', () => {
      expect(() => {
        capitalize(15);
      }).toThrow('You need to give a string!');
    });
    test('A boolean gives a proper type error', () => {
      expect(() => {
        capitalize(15);
      }).toThrow('You need to give a string!');
    });
  });
});

describe('Reverse String tests', () => {
  test('reverse string exists', () => {
    expect(reverseString('basdfas'));
  });
  describe('Reverse String reverses strings', () => {
    test('John becomes nhoJ', () => {
      expect(reverseString('John')).toMatch('nhoJ');
    });
    test('Mirror becomes rorriM', () => {
      expect(reverseString('Mirror')).toMatch('rorriM');
    });
    test('Works with spaces', () => {
      expect(reverseString('Works with spaces')).toMatch('secaps htiw skroW');
    });
  });
});

describe('Calculator tests', () => {
  describe('Calculator additions', () => {
    test('2+2 =4', () => {
      expect(calculator.add(2, 2)).toBe(4);
    });
    test('35+11 =46', () => {
      expect(calculator.add(11, 35)).toBe(46);
    });
  });
  describe('Calculator subtractions', () => {
    test('2-2=0', () => {
      expect(calculator.sub(2, 2)).toBe(0);
    });
    test('95 - 33 = 62', () => {
      expect(calculator.sub(95, 33)).toBe(62);
    });
  });
});

describe('Caeser Cipher Tests', () => {
  test('xyz,3 returns abc', () => {
    expect(caesarCipher('xyz', 3)).toMatch('abc');
  });
  test('XYZ,3 returns ABC', () => {
    expect(caesarCipher('XYZ', 3)).toMatch('ABC');
  });
  test('MiRRors,3 returns PlUUruv', () => {
    expect(caesarCipher('MiRRors', 3)).toMatch('PlUUruv');
  });
  test('MiRRors,15 returns BxGGdgh', () => {
    expect(caesarCipher('MiRRors', 15)).toMatch('BxGGdgh');
  });
  test('MiRRors,62 returns WsBBybc', () => {
    expect(caesarCipher('MiRRors', 62)).toMatch('WsBBybc');
  });
  test('Yes!', () => {
    expect(caesarCipher('Yes!', 3)).toMatch('Bhv!');
  });
  test('Yes!#@# 3', () => {
    expect(caesarCipher('Yes!#@#', 3)).toMatch('Bhv!#@#');
  });
  test('Yes I Am! 3', () => {
    expect(caesarCipher('Yes I Am!', 3)).toMatch('Bhv L Dp!');
  });
});

describe('Analyze Array Tests', () => {
  test('[5,3,1] min returns 1', () => {
    expect(analyzeArray([5, 3, 1]).min).toBe(1);
  });
  test('[5,3,1, 1, 0] min returns 0', () => {
    expect(analyzeArray([5, 3, 1, 1, 0]).min).toBe(0);
  });
  test('[5,3,1, 1, 0] max returns 5', () => {
    expect(analyzeArray([5, 3, 1, 1, 0]).max).toBe(5);
  });
  test('[5,3,1, 1, 0, 9, 7] max returns 9', () => {
    expect(analyzeArray([5, 3, 1, 1, 0, 9, 7]).max).toBe(9);
  });
  test('[5,3,1, 1, 0, 9, 7] objects to return 0 min, 9 max, 7 length, 8.67', () => {
    const object = analyzeArray([5, 3, 1, 1, 0, 9, 7]);
    expect(object.min).toBe(0);
    expect(object.max).toBe(9);
    expect(object.length).toBe(7);
    expect(object.average).toBe(3.71);
  });
  // test('[object to be test', () => {
  //   expect(analyzeArray([5, 3, 1, 1, 0, 9, 7])).toBe({
  //     min: 0,
  //     max: 9,
  //     length: 7,
  //     average: 3.71,
  //   });
  // });
  test('[object toEqyak test', () => {
    expect(analyzeArray([5, 3, 1, 1, 0, 9, 7])).toEqual({
      min: 0,
      max: 9,
      length: 7,
      average: 3.71,
    });
  });
});
