// Test logic!
import { Planets } from './../src/galactic_age_calculator.js';

describe('Planets', () => {
  let calculateAge;
  let calculateExpect;

beforeEach(() => {
  calculateAge = new Planets(0.24, 0.62, 1.88, 11.88);
})

test("If a user is 38 years old on Earth, their age on Mercury is .24 Earth years and 38 /(.24) = 158 years old ", () => {
  calculateAge.checkMercury();
  expect(parseInt(calculateAge.age.toFixed())).toBe(158);
})

test("If a user is 60 years old on Earth, their age on Venus is .62 Earth years and 60 /(.62) = 97 years old", () => {
  calculateAge.checkVenus();
  expect(parseInt(calculateAge.age.toFixed())).toBe(97);
})

test("If a user is 20 years old on Earth, their age on Mars is 1.88 Earth years and 20 /(1.88) = 11 years old", () => {
  calculateAge.checkMars();
  expect(parseInt(calculateAge.age.toFixed())).toBe(11);
})

test("If a user is 70 years old on Earth, their age on Jupiter is 11.86 Earth years and 70 /(11.86) = 6 years old", () => {
  calculateAge.checkJupiter();
  expect(parseInt(calculateAge.age.toFixed())).toBe(6);
});

beforeEach(() => {
  calculateExpect = new Planets(300, 100, 80, 60, 30);
})

test("The life expectancy is 300 years on Mercury and users's age is 200 years, the years left to live is 300 - 200 user's age = 100 ", () => {
calculateExpect.expectancyMercury();
expect(calculateExpect.age).toBe(100)
})
test("The life expectancy is 100 years on Venus and users's age is 70 years, the years left to live is 100 - 70 user's age = 30 ", () => {
  calculateExpect.expectancyVenus();
  expect(calculateExpect.age).toBe(30)
  })
  test("The life expectancy is 80 years on Earth and users's age is 60 years, the years left to live is 80 - 60 user's age = 20 ", () => {
    calculateExpect.expectancyEarth();
    expect(calculateExpect.age).toBe(20)
    })
    test("The life expectancy is 60 years on Mars and users's age is 50 years, the years left to live is 60 - 50 user's age = 10 ", () => {
      calculateExpect.expectancyMars();
      expect(calculateExpect.age).toBe(10)
      })
      test("The life expectancy is 30 years on Jupiter and users's age is 25 years, the years left to live is 30 - 25  = 5 years", () => {
        calculateExpect.expectancyJupiter();
        expect(calculateExpect.age).toBe(5)
        })
  
});