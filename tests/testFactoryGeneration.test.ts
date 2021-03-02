import { Client, ColorTypes, ShapeTypes, Triangle, Square, Circle, RedColorFactory, YellowColorFactory, GreenColorFactory } from "../src/index";

describe('Checking if the factory returns Green colored shapes', () => {
    it('should return a circle type Object', () => {
        var client = new Client();
        var greenClrInstance = client.generateColor(ColorTypes.Green)
        var greenClrCircleInstance = greenClrInstance.generateShape(ShapeTypes.Circle)
        expect(greenClrInstance).toBeInstanceOf(GreenColorFactory)
        expect(greenClrCircleInstance).toBeInstanceOf(Circle)
    })

    it('should return a Triangle type Object', () => {
        var client = new Client();
        var greenClrInstance = client.generateColor(ColorTypes.Green)
        var greenClrCircleInstance = greenClrInstance.generateShape(ShapeTypes.Square)
        expect(greenClrInstance).toBeInstanceOf(GreenColorFactory)
        expect(greenClrCircleInstance).toBeInstanceOf(Square)
    })

    it('should return a Square type Object', () => {
        var client = new Client();
        var greenClrInstance = client.generateColor(ColorTypes.Green)
        var greenClrCircleInstance = greenClrInstance.generateShape(ShapeTypes.Triangle)
        expect(greenClrInstance).toBeInstanceOf(GreenColorFactory)
        expect(greenClrCircleInstance).toBeInstanceOf(Triangle)
    })
})

describe('Checking if the factory returns Red colored shapes', () => {
    it('should return a circle type Object', () => {
        var client = new Client();
        var redClrInstance = client.generateColor(ColorTypes.Red)
        var redClrCircleInstance = redClrInstance.generateShape(ShapeTypes.Circle)
        expect(redClrInstance).toBeInstanceOf(RedColorFactory)
        expect(redClrCircleInstance).toBeInstanceOf(Circle)
    })

    it('should return a Triangle type Object', () => {
        var client = new Client();
        var redClrInstance = client.generateColor(ColorTypes.Red)
        var greenClrTriangleInstance = redClrInstance.generateShape(ShapeTypes.Triangle)
        expect(redClrInstance).toBeInstanceOf(RedColorFactory)
        expect(greenClrTriangleInstance).toBeInstanceOf(Triangle)
    })

    it('should return a Square type Object', () => {
        var client = new Client();
        var redClrInstance = client.generateColor(ColorTypes.Red)
        var greenClrSquareInstance = redClrInstance.generateShape(ShapeTypes.Square)
        expect(redClrInstance).toBeInstanceOf(RedColorFactory)
        expect(greenClrSquareInstance).toBeInstanceOf(Square)
    })
})

describe('Checking if the factory returns Yellow colored shapes', () => {
    it('should return a circle type Object', () => {
        var client = new Client();
        var yellowClrInstance = client.generateColor(ColorTypes.Yellow)
        var yellowClrCircleInstance = yellowClrInstance.generateShape(ShapeTypes.Circle)
        expect(yellowClrInstance).toBeInstanceOf(YellowColorFactory)
        expect(yellowClrCircleInstance).toBeInstanceOf(Circle)
    })

    it('should return a Triangle type Object', () => {
        var client = new Client();
        var yellowClrInstance = client.generateColor(ColorTypes.Yellow)
        var yellowClrSquarenstance = yellowClrInstance.generateShape(ShapeTypes.Square)
        expect(yellowClrInstance).toBeInstanceOf(YellowColorFactory)
        expect(yellowClrSquarenstance).toBeInstanceOf(Square)
    })

    it('should return a Square type Object', () => {
        var client = new Client();
        var yellowClrInstance = client.generateColor(ColorTypes.Yellow)
        var yellowClrTriangleInstance = yellowClrInstance.generateShape(ShapeTypes.Triangle)
        expect(yellowClrInstance).toBeInstanceOf(YellowColorFactory)
        expect(yellowClrTriangleInstance).toBeInstanceOf(Triangle)
    })
})