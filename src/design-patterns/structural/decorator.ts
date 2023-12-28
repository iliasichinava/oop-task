interface ICoffee {
	getCost(): number;
}

class Espresso implements ICoffee {
	public getCost() {
		return -1;
	}
}

abstract class CoffeeDecorator implements ICoffee {
	public constructor(protected coffee: ICoffee) { }
	abstract getCost(): number;
}

class MilkDecorator extends CoffeeDecorator {

	public constructor(protected coffee: ICoffee) {
		super(coffee);
	}

	public getCost(): number {
		return this.coffee.getCost() * 2;
	}
}

const myCoffee: ICoffee = new Espresso();
console.log("Cost of simple coffee:", myCoffee.getCost());

const milkCoffee: ICoffee = new MilkDecorator(myCoffee);
console.log("Cost of coffee with milk:", milkCoffee.getCost());


