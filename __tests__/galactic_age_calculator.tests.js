// Test logic!
import { Planets } from './../src/galactic_age_calculator.js';

describe('Planets', () => {
  let calculateAge;

beforeEach(() => {
  calculateAge = new Planets(38, 90);
})

test("It will show the users current  age on Mercury. ", () => {
  calculateAge.checkMercury();
  expect(calculateAge.age).toBe(158);
});

test("It will show the users current age on venus.", () => {
  calculateAge.checkVenus();
  expect(calculateAge.age).toBe(61);
});

test("It will show the users current age on Mars.", () => {
  calculateAge.checkMars();
  expect(calculateAge.age).toBe(20);
});

test("It will show the users current age on Jupiter.", () => {
  calculateAge.checkJupiter();
  expect(calculateAge.age).toBe(3);
});

test("It will show the users'years left to live on Mercury", () => {
  // calculateExpect.expectancyVenus();
  expect(calculateAge.expectancyMercury()).toBe()
});

test("It will show the users'years left to live on venus", () => {
  // calculateExpect.expectancyVenus();
  expect(calculate.expectancyVenus()).toBe()
});

 test("It will show the users'years left to live on Mars", () => {
  //  calculateExpect.expectancyMars();
   expect(calculateExpect.expectancyMars()).toBe()
 });

test("It will show the users'years left to live on Jupiter", () => {
  // calculateAge.expectancyJupiter();
  expect(calculateAge.expectancyJupiter()).toBe("You have 5 left to live")
});

});