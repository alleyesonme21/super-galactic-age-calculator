//Business Logic
export class Planets{ 
constructor(age) {
  // this.mercury = mercury;
  // this.venus = venus;
  // this.mars = mars; 
  // this.jupiter = jupiter;
  // this.earth = earth;
  this.age = age;
  // this.expect = expect;
}
checkMercury() {
  this.age = 38;
  this.age /= 0.24; 
}
checkVenus() {
  this.age = 60;
  this.age /= 0.62;
}
checkMars() {
  this.age = 20;
  this.age /= 1.88;
}
checkJupiter() {
  this.age = 70;
  this.age /= 11.86;
}
expectancyMercury() {
  this.age = 300;
  this.age -= 200; 
}

};