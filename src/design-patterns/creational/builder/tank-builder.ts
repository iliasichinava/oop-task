class TurretOptions {
	public rotationSpeed: number;
	public armor: number;
	public elevation: number;
	public stabilization: boolean;
}

class GunOptions {
	public calibre: number;
	public rate: number;
	public range: number;
	public ammo: number;
}

class CaterpillarOptions {
	public numberOfSegments: number;
	public type: string;
	public trackWidth: number;
}


class Turret {
	public constructor(_: TurretOptions) { }
}

class Gun {
	public constructor(_: GunOptions) { }
}

class Caterpillar {
	public constructor(_: CaterpillarOptions) { }
}


export class TankBuilder {
	private tank: Tank;

	constructor() {
		this.tank = new Tank();
	}

	public addName(tankName: string): this {
		this.tank.name = tankName;
		return this;
	}

	public addTurret(turretOptions: TurretOptions): this {
		this.iterateAndAddProps(turretOptions);
		return this;
	}

	public addGun(gunOptions: GunOptions): this {
		this.iterateAndAddProps(gunOptions);
		return this;
	}

	public addCaterpillar(caterpillarOptions: CaterpillarOptions): this {
		this.iterateAndAddProps(caterpillarOptions);
		return this;
	}

	private iterateAndAddProps<T extends object>(options: T): void {
		for (const prop in options) {
			if (options.hasOwnProperty(prop)) {
				this.tank[prop] = options[prop];
			}
		}
	}

	public build(): Tank {
		return this.tank;
	}
}

class Tank {
	[key: string]: unknown;
	name?: string;
	turret?: Turret;
	gun?: Gun;
	caterpillar?: Caterpillar;
}
