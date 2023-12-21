type User = {
	username: string;
	email: string;
};

class Database {
	private readonly users: User[];

	constructor() {
		this.users = [
			{
				username: "mgeli",
				email: "mgeli@xrova.ge",
			}
		];
	}

	public add(user: User): void {
		this.users.push(user);
	}

	public findByName(username: string): User | undefined {
		return this.users.find((user) => user.username === username);
	}
}

class UserService {
	private readonly db: Database;

	constructor() {
		this.db = new Database();
	}

	public get(username: string): User | undefined {
		const user = this.db.findByName(username);

		if (!user) {
			throw new Error("404: User not found");
		}

		return user;
	}
}

class UserProxyHandler {
	private readonly cache: Map<string, User>;
	private readonly target: UserService;

	constructor(target: UserService) {
		this.cache = new Map<string, User>();
		this.target = target;
	}

	public get(username: string): User | undefined {
		const cachedValue = this.cache.get(username);

		if (cachedValue) {
			console.log("Cached");
			return cachedValue;
		}

		const user = this.target.get(username);

		if (user) {
			console.log("Caching...");
			this.cache.set(username, user);
		}

		return user;
	}
}

class UserController {
	private readonly proxyHandler: UserProxyHandler;

	constructor(userService: UserService) {
		this.proxyHandler = new UserProxyHandler(userService);
	}

	public get(username: string): User | undefined {
		try {
			return this.proxyHandler.get(username);
		} catch (error) {
			console.error(error);
			return undefined;
		}
	}
}

const userService = new UserService();
const userController = new UserController(userService);

console.log(userController.get("mgeli"));
console.log(userController.get("mgeli"));
