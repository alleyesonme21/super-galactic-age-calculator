// Test logic!
import { Planets } from './../src/galactic_age_calculator.js';

describe('Planets', () => {

  // let calculateEarth;
 
  // beforeEach( () => {
  //   calculateEarth = new Planets(0.24, 0.62, 1.88, 11.86, 1);
  // })

  // test("A solar year lasts 1 year on planet Earth, a Mercury year is .24 Earth years, a Venus year is .62 Earth years, a Mars year is 1.88 Earth years, (A Jupiter year is 11.86 Earth years.", () => {
  //     expect(calculateEarth.mercury).toBeCloseTo(0.24);
  //     expect(calculateEarth.venus).toBeCloseTo(0.62);
  //     expect(calculateEarth.mars).toBeCloseTo(1.88);
  //     expect(calculateEarth.jupiter).toBeCloseTo(11.88);
  //     expect(calculateEarth.earth).toBeCloseTo(1);
  // });
  test("If a user is 38 years old on Earth, their age on Mercury is 0.24 Earth years and 38 /(0.24) = 158 years old ", () => {
     let calculateMercury = new Planets(.24, .62, 1.88, 11.88, 0);
     calculateMercury.checkMercury();
    expect(calculateMercury.earth).toBe(158.33333333333334);
   })

});