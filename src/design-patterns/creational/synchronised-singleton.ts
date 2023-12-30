import { isMainThread } from "worker_threads";

class ThreadSafeSingleton {
	private static instance: ThreadSafeSingleton | null = null;

	private constructor() { }

	public static getInstance(): ThreadSafeSingleton {
		if (!ThreadSafeSingleton.instance && isMainThread) {
			console.log("Created instance");
			ThreadSafeSingleton.instance = new ThreadSafeSingleton();
		}

		return ThreadSafeSingleton.instance as ThreadSafeSingleton;
	}
}