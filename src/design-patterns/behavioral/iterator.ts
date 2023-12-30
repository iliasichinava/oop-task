class Matrix<T> {
	private readonly matrix: Array<Array<T>>;

	public constructor(
		private readonly rows: number,
		private readonly cols: number
	) {
		this.matrix = Array.from({ length: rows }, () => Array(cols).fill(0));
	}

	public get value() {
		return this.matrix;
	}
}

class Iterator {
	private i: number;
	private j: number;
	private readonly rows: number;
	private readonly cols: number;

	public constructor(private readonly target: Matrix<unknown>) {
		this.i = 0;
		this.j = 0;
		this.rows = this.target.value.length;
		this.cols = this.target.value[0].length;
	}

	public next(): unknown | undefined {
		if (this.i < this.rows && this.j < this.cols) {
			const value = this.target.value[this.i][this.j++];
			if (this.j === this.cols) {
				this.j = 0;
				this.i++;
			}
			return value;
		}
		return undefined;
	}
};

const matrix = new Matrix<number>(3, 3);
const iterator = new Iterator(matrix);

for (let i = 0; i < 15; i++) {
	console.log(iterator.next());
}