/*
const code = require("./code")

describe("Test add function", () => {
  test("1 + 2 = 3", () => {
    const result = code.add(1, 2)
    expect(result).toEqual(2)
  });
});
//-----------------------------------
// const code = require("./code");

// describe("Test add function", () => {
//   test("1 + 2 = 3", () => {
//     const result = code.add(1, 2);
//     expect(result).toEqual(3);
//   });
//});
*/
//------------------------------------------------------------------------------

const code = require("./code");

describe("removeEven", () => {
  beforeEach(() => {
    console.log("Before");
  });

  test("filters out even numbers from array", () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const result = code.removeEven(numbers);
    expect(result).toEqual([1, 3, 5]);
  });

  test("returns an empty array when all numbers are even", () => {
    const numbers = [2, 4, 6, 8, 10];
    const result = code.removeEven(numbers);
    expect(result).toEqual([]);
  });

  test("returns the same array when all numbers are odd", () => {
    const numbers = [1, 3, 5, 7, 9];
    const result = code.removeEven(numbers);
    expect(result).toEqual([1, 3, 5, 7, 9]);
  });

  test("handles an empty array", () => {
    const numbers = [];
    const result = code.removeEven(numbers);
    expect(result).toEqual([]);
  });

  afterEach(() => {
    console.log("After");
  });

});





