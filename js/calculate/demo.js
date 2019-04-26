var perfomaceS = function () {

}
perfomaceS.prototype.calculate = function (salary) {
    return salary * 5;
}
var perfomaceA = function () {

}
perfomaceA.prototype.calculate = function (salary) {
    return salary * 3;
}
var perfomaceB = function () {

}
perfomaceB.prototype.calculate = function (salary) {
    return salary * 2;
}
var Bounce = function (salary) {
    this.salary = salary;
}
Bounce.prototype.setStrategy = function (strategy) {
    this.strategy = strategy;
}
Bounce.prototype.getBounce = function () {
    return this.strategy.calculate(this.salary);
}
var bounce = new Bounce(4000);
bounce.setStrategy(new perfomaceS());
console.log(bounce.getBounce());
var bounce2 = new Bounce(5000);
bounce2.setStrategy(new perfomaceS());
console.log(bounce2.getBounce());