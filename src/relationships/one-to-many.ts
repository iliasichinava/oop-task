class Woman {
    public constructor(public name: string) {
      this.name = name;
    }
}

class Sultan {
    public constructor(private mistresses: Array<Woman> = new Array<Woman>()) {}
  
    public add_mistress(mistress: Woman): void {
      this.mistresses.push(mistress);
    }
  
    public get_mistresses(): Woman[] {
      return this.mistresses;
    }
}
  
const sultan = new Sultan();
const woman1 = new Woman('Mistress 1');
const woman2 = new Woman('Mistress 2');

sultan.add_mistress(woman1);
sultan.add_mistress(woman2);

console.log(sultan.get_mistresses());