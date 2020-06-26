//Business Logic
export class Planets{ 
constructor(mercury, venus, mars, jupiter, earth) {
  this.mercury = mercury;
  this.venus = venus;
  this.mars = mars; 
  this.jupiter = jupiter;
  this.earth = earth;
}
 checkMercury() {
   this.earth = 38;
   this.earth /= 0.24; 
 }
  checkVenus() {
   this.earth = 60;
   this.earth /= this.venus;
  }

};