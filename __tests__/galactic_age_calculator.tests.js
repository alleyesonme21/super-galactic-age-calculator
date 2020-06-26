// Test logic!
import { Planets } from './../src/galactic_age_calculator.js';

describe('Planets', () => {

  let calculateEarth;
 
  beforeEach( () => {
    calculateEarth = new Planets(.24, .62, 1.88, 11.86, 365);
  })

  test("A solar year lasts 365 days on planet Earth, a Mercury year is .24 Earth years, a Venus year is .62 Earth years, a Mars year is 1.88 Earth years, (A Jupiter year is 11.86 Earth years.", () => {
      expect(calculateEarth.mercury).toBeCloseTo(.24);
      expect(calculateEarth.venus).toBeCloseTo(.62);
      expect(calculateEarth.mars).toBeCloseTo(1.88);
      expect(calculateEarth.jupiter).toBeCloseTo(11.88);
      expect(calculateEarth.earth).toBe(1);
  });


});