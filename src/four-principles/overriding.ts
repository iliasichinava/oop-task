class Weapon {
    public fire(): void {
        console.log("Fired from weapon");
    }
}

class M4 extends Weapon {
    public fire(): void {
        console.log("Fired from m4");
    }
}

class AK47 extends Weapon {
    public fire(): void {
        console.log("Fired from ak47");
    }
}