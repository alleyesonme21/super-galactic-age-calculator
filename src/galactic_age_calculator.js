//Business Logic
export class Planets { 

  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }
  checkMercury() {
    this.age = parseInt((this.age /= 0.24).toFixed()); 
  }
  checkVenus() {
    this.age = parseInt((this.age /= 0.62).toFixed()); 
  }
  checkMars() {
    this.age = parseInt((this.age /= 1.88).toFixed()); 
  }
  checkJupiter() {
    this.age = parseInt((this.age /= 11.86).toFixed()); 
  }

  expectancyMercury() {
    this.checkMercury();
    const mercuryExpectancy = Math.round(this.age - (this.lifeExpectancy/0.24));
    if(mercuryExpectancy > 0) {
      return `You have ${mercuryExpectancy} left to live`;
    } else if(mercuryExpectancy < 0) { 
      return `You have lived ${mercuryExpectancy} past your life expectancy`;
    }
  }

  expectancyVenus() {
    this.checkVenus();
    const venusExpectancy = Math.round(this.age - (this.lifeExpectancy/0.62));
    if(venusExpectancy > 0) {
      return `You have ${venusExpectancy} left to live`;
    } else if(venusExpectancy < 0) { 
      return `You have lived ${venusExpectancy} past your life expectancy`;
    }
  }

  expectancyMars() {
    this.checkMars();
    const marsExpectancy = Math.round(this.age - (this.lifeExpectancy/1.88));
    if(marsExpectancy > 0) {
      return `You have ${marsExpectancy} left to live`;
    } else if(marsExpectancy < 0) { 
      return `You have lived ${marsExpectancy} past your life expectancy`;
    }
  } 

  expectancyJupiter() {
    this.checkJupiter();
    const jupiterExpectancy = Math.round(this.age - (this.lifeExpectancy/11.86));
    if(jupiterExpectancy > 0) {
      return `You have ${jupiterExpectancy} left to live`;
    } else if(jupiterExpectancy < 0) { 
      return `You have lived ${jupiterExpectancy} past your life expectancy`;
    }
  }
}
