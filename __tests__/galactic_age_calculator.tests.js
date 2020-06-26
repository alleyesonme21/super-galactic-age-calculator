// Test logic!
import { Planets } from './../src/galactic_age_calculator.js';

describe('Planets', () => {

  test("If a user is 38 years old on Earth, their age on Mercury is .24 Earth years and 38 /(.24) = 158 years old ", () => {
     let calculateMercury = new Planets(.24, .62, 1.88, 11.88, 0);
     calculateMercury.checkMercury();
    expect(calculateMercury.earth).toBe(158.33333333333334);
   })

   test("If a user is 60 years old on Earth, their age on Venus is .62 Earth years and 60 /(.62) = 97 years old", () => {
     let calculateVenus = new Planets(.24, .62, 1.88, 11.88);
     calculateVenus.checkVenus();
     expect(calculateVenus.earth).toBe(96.7741935483871);
   })
     
   test("If a user is 20 years old on Earth, their age on Mars is 1.88 Earth years and 20 /(1.88) = 11 years old", () => {
    let calculateMars = new Planets(.24, .62, 1.88, 11.88);
    calculateMars.checkMars();
    expect(calculateMars.earth).toBe(10.638297872340425);
   })


});