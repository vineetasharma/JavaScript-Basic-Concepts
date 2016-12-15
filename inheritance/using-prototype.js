/**
 * Created by vineetasharma on 15/10/16.
 */

/**
 * Shape
 * @constructor
 */
function Shape() {
    this.name = 'shape';
    this.toString = function () {
        return this.name;
    }
}

/**
 * TwoDShape
 * @constructor
 */
function TwoDShape() {
    this.name = '2D Shape';
}

/**
 * Triangle
 * @param side
 * @param height
 * @constructor
 */
function Triangle(side, height) {
    this.name = "Triangle";
    this.side = side;
    this.height = height;
    this.getArea = function () {
        return this.side * this.height / 2;
    }
}

/**
 *Inheriting properties using prototype
 */
TwoDShape.prototype = new Shape();
Triangle.prototype = new TwoDShape();

/**
 * change the constructor function after inheritance
 */
TwoDShape.prototype.constructor = TwoDShape;
Triangle.prototype.constructor = Triangle;

/**
 * Creating an instance of Triangle
 * @type {Triangle}
 */
var triangle1 = new Triangle(20, 30);

console.log('Triangle toString method output::::::::::::::::::', triangle1.toString());// Triangle
console.log('triangle1 constructor::::::::::::::::::', triangle1.constructor);// function Triangle(side,height){}

console.log('tringle1 is instance of Triangle', triangle1 instanceof Triangle);// true
console.log('tringle1 is instance of Shape', triangle1 instanceof Shape);// true
console.log('tringle1 is instance of TwoDShape', triangle1 instanceof TwoDShape);//true

console.log(Shape.prototype.isPrototypeOf(triangle1));// true
console.log(TwoDShape.prototype.isPrototypeOf(triangle1));// true
console.log(Triangle.prototype.isPrototypeOf(triangle1));// true