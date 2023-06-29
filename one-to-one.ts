class Data {
    public constructor(public value: string) {}
}
  
class Hasher {
    public constructor(private data: Data) {}

    public hash() {
        this.data.value += "!@#$%^&*()";
    }
}

const word = new Data("ilia");
const hasher = new Hasher(word);

hasher.hash();
console.log(word.value);