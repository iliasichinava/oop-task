class PromiseFactory {

	private readonly queue: Array<Promise<unknown>>;
	private readonly ready: Array<unknown>;
	private readonly maxSize: number;

	public constructor() {
		this.queue = new Array();
		this.ready = new Array();
		this.maxSize = 3;
	}

	public addTask<T>(task: Promise<T>): void {
		if (this.queue.length === this.maxSize) {
			console.log("PromiseFactory is full");
			return;
		}
		this.queue.push(task);

		this.queue[this.queue.length - 1]
			.then((data: unknown) => this.ready.push(data))
			.catch(err => {
				throw err;
			})
			.finally(() => this.queue.pop());
	}

	public getTask(): unknown {
		return this.ready.length === 0
			? null
			: this.ready[this.ready.length - 1];
	}

}

const asyncTask = async (message: string, milliseconds: number) =>
	new Promise((resolve, _) => {
		return setTimeout(() => {
			resolve(message);
		}, milliseconds * 1000);
	});


const factory = new PromiseFactory();

factory.addTask(asyncTask("Panzerkampfwagen", 1));
factory.addTask(asyncTask("Leopard 1", 2));
factory.addTask(asyncTask("Tiger II", 3));
factory.addTask(asyncTask("Maus", 4));

const scheduleAndLog = (delay: number, message: string) => {
	setTimeout(() => {
		console.log(`${message} ${factory.getTask()}`);
	}, delay);
};

scheduleAndLog(500, "Nothing");
scheduleAndLog(1500, "1st");
scheduleAndLog(2500, "2nd");
scheduleAndLog(3500, "3rd");
scheduleAndLog(4500, "4th");
