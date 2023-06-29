interface Blockchain {
    name: string;
    proofType: string;
    transaction_time(): number;
    perform_transaction(): void;
}

class Transaction {
    public constructor(private readonly blockchain: Blockchain) {
        blockchain.perform_transaction();
    }
}

class Solana implements Blockchain {
    public name: string;
    public proofType: string;
    public transaction_time(): number {
        throw new Error("Method not implemented.");
    }
    public perform_transaction(): void {
        throw new Error("Method not implemented.");
    }
}

class Ethereum implements Blockchain {
    public name: string;
    public proofType: string;
    public transaction_time(): number {
        throw new Error("Method not implemented.");
    }
    public perform_transaction(): void {
        throw new Error("Method not implemented.");
    }
}

const solana = new Solana();
const eth = new Ethereum();
const transaction1 = new Transaction(solana);
const transaction2 = new Transaction(eth);