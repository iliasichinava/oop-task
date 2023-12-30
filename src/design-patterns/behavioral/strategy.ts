interface ITradingStrategy {
	trade(money: number): void;
}

class TrendFollowingStrategy implements ITradingStrategy {
	public trade(money: number) {
		console.log(`Balance: ${money.toFixed(2)}\nTrading with trend following strategy...`);
		money += (Math.random() - 0.5) * 10;
		console.log(`Balance: ${money.toFixed(2)}`);
	}
}

class MeanReversionStrategy implements ITradingStrategy {
	public trade(money: number) {
		console.log(`Balance: ${money.toFixed(2)}\nTrading with mean reversion strategy...`);
		money += (Math.random() - 0.5) * 10;
		console.log(`Balance: ${money.toFixed(2)}`);
	}
}

class ArbitrageStrategy implements ITradingStrategy {
	public trade(money: number) {
		console.log(`Balance: ${money.toFixed(2)}\nTrading with arbitrage...`);
		money += (Math.random() - 0.5) * 10;
		console.log(`Balance: ${money.toFixed(2)}`);
	}
}

class Trader {
	public constructor(
		private readonly tradingStrategy: ITradingStrategy,
		private money: number
	) { }

	public startTrading() {
		for (let i = 0; i < 3; i++) {
			this.tradingStrategy.trade(this.money);
		}
		console.log("\n\n");
	}
}

const trendStrategy = new TrendFollowingStrategy();
const meanStrategy = new MeanReversionStrategy();
const arbitrageStrategy = new ArbitrageStrategy();

const trender = new Trader(trendStrategy, 100);
const meaner = new Trader(meanStrategy, 250);
const arbitrager = new Trader(arbitrageStrategy, 300);

trender.startTrading();
meaner.startTrading();
arbitrager.startTrading();
