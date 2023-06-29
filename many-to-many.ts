class Bank {
    
    public constructor(private users: Array<User> =  new Array<User>) {}
  
    public add_user(user: User): void {
      this.users.push(user);
      user.add_bank(this);
    }
  
    public get_users(): Array<User> {
      return this.users;
    }
}

class User {
    
    public constructor(private banks: Array<Bank> =  new Array<Bank>) {}
  
    public add_bank(bank: Bank): void {
      this.banks.push(bank);
      bank.add_user(this);
    }
  
    public get_banks(): Array<Bank> {
      return this.banks;
    }
}

  
const bank1 = new Bank();
const bank2 = new Bank();

const user1 = new User();
const user2 = new User();

bank1.add_user(user1);
bank1.add_user(user2);
bank2.add_user(user1);