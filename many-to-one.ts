class Homeland {}

class Patriot {
    
    public homeland: Homeland;

    public add_in_heart(country: Homeland) {
        this.homeland = country;
    }
}

const zaali = new Patriot();
const saba = new Patriot();

const Georgia = new Homeland();

zaali.add_in_heart(Georgia);
saba.add_in_heart(Georgia);