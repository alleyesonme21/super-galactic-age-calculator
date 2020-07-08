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
  const mercuryExpectancy = Math.round((this.lifeExpectancy/0.24) - this.age);
  return `You have ${mercuryExpectancy} left to live`;
}
expectancyVenus() {
  this.checkVenus();
  const venusExpectancy = Math.round((this.lifeExpectancy/0.62) - this.age);
  return `You have ${venusExpectancy} left to live`;
}
expectancyMars() {
  this.checkMars();
  const marsExpectancy = Math.round((this.lifeExpectancy/1.88) - this.age);
  return `You have ${marsExpectancy} left to live`;
}
expectancyJupiter() {
  this.checkJupiter();
  const jupiterExpectancy = Math.round((this.lifeExpectancy/11.86) - this.age);
  return `You have ${jupiterExpectancy} left to live`;
}
};