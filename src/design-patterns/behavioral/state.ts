interface IPlayerState {
	handleInput(): void;
}

class StandingState implements IPlayerState {
	public handleInput(): void {
		console.log(`Player is standing`);
	}
}

class RunningState implements IPlayerState {
	public handleInput(): void {
		console.log(`Player is running`);
	}
}
class JumpingState implements IPlayerState {
	public handleInput(): void {
		console.log(`Player is jumping`);
	}
}


export class Player {
	private state: IPlayerState;

	public constructor() {
		this.state = new StandingState();
	}

	public setState(newState: IPlayerState) {
		this.state = newState;
	}

	public handleInput() {
		this.state.handleInput();
	}
}

const player = new Player();

player.handleInput();

player.setState(new JumpingState());
player.handleInput();

player.setState(new RunningState());
player.handleInput();