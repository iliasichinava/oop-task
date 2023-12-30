class Sun {}

class SolarSystem {
    
    public constructor(private readonly star: any = new Sun()) {}

}

const system = new SolarSystem();