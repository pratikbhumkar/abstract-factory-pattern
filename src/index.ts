export enum ShapeTypes {
    Circle = "Circle",
    Triangle = "Triangle",
    Square = "Square",
}

export enum ColorTypes {
    Red = "Red",
    Green = "Green",
    Yellow = "Yellow",
}

interface IShapeFactory {
    generateShape(shapeType: ShapeTypes): IShape
}

export class ShapeFactory implements IShapeFactory {
    generateShape(shapeType: ShapeTypes):IShape {
        switch (shapeType) {
            case ShapeTypes.Circle:
                return new Circle();
            case ShapeTypes.Triangle:
                return new Triangle();
            default:
                return new Square();
        }
    }
}

interface IShape {
    getShapeInfo()
}

export class Circle implements IShape {
    getShapeInfo() {
        console.log("This is a Circle")
    }
}

export class Triangle implements IShape {
    getShapeInfo() {
        console.log("This is a Triangle")
    }
}

export class Square implements IShape {
    getShapeInfo() {
        console.log("This is a Square")
    }
}


interface IColor {
    getColorInfo()
}

export class RedColorFactory {
    generateShape(shapeType: ShapeTypes):IShape {
        switch (shapeType) {
            case ShapeTypes.Circle:
                return new Circle();
            case ShapeTypes.Triangle:
                return new Triangle();
            default:
                return new Square();
        }
    }
}

export class YellowColorFactory {
    generateShape(shapeType: ShapeTypes):IShape {
        switch (shapeType) {
            case ShapeTypes.Circle:
                return new Circle();
            case ShapeTypes.Triangle:
                return new Triangle();
            default:
                return new Square();
        }
    }
}

export class GreenColorFactory {
    generateShape(shapeType: ShapeTypes):IShape {
        switch (shapeType) {
            case ShapeTypes.Circle:
                return new Circle();
            case ShapeTypes.Triangle:
                return new Triangle();
            default:
                return new Square();
        }
    }
}

export class Client{
    generateColor(color: ColorTypes){
        switch (color) {
            case ColorTypes.Green:
                return new GreenColorFactory();
            case ColorTypes.Red:
                return new RedColorFactory();
            default:
                return new YellowColorFactory();
        }
    }
}

var client = new Client();
var greenClrInstance = client.generateColor(ColorTypes.Green)
var greenClrCircleInstance = greenClrInstance.generateShape(ShapeTypes.Circle)
greenClrCircleInstance.getShapeInfo()