// Business logic!
import { Planets } from './../src/galactic_age_calculator.js';

describe('Planets', () => {
  let calculateAge; 

  beforeEach(() => {
    calculateAge = new Planets(70, 95);
  })

  test("It will show the users current  age on Mercury. ", () => {
    calculateAge.checkMercury();
    expect(calculateAge.age).toBe(292);
  });

  test("It will show the users current age on venus.", () => {
    calculateAge.checkVenus();
    expect(calculateAge.age).toBe(113);
  });

  test("It will show the users current age on Mars.", () => {
    calculateAge.checkMars();
    expect(calculateAge.age).toBe(37);
  });

  test("It will show the users current age on Jupiter.", () => {
    calculateAge.checkJupiter();
    expect(calculateAge.age).toBe(6);
  });

  test("It will show the users'years left to live on Mercury", () => {
    expect(calculateAge.expectancyMercury()).toBe("You have lived -104 past your life expectancy")
  });

  test("It will show the users'years left to live on venus", () => {
    expect(calculateAge.expectancyVenus()).toBe("You have lived -40 past your life expectancy")
  });

  test("It will show the users'years left to live on Mars", () => {
    expect(calculateAge.expectancyMars()).toBe("You have lived -14 past your life expectancy")
  });

  test("It will show the users'years left to live on Jupiter", () => {
    expect(calculateAge.expectancyJupiter()).toBe("You have lived -2 past your life expectancy")
  });
});