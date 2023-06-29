// Problem
/*
class Shape {
    sides: Array<number>;

    public perimeter() {
        return this.sides.reduce((acc, curr) => acc + curr);
    }
}

class Circle extends Shape {
    public perimeter(): number {
        throw new Error("SHE DEBILO");        
    }
}
*/

class Shape {
    sides: Array<number>;

    public perimeter(): number {
        return this.sides.reduce((acc, curr) => acc + curr);
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    public perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}
