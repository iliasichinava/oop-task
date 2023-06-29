abstract class WorldWar {
	abstract get_leader_of_germany(): string;
	abstract set_war_start_year(): number;
	abstract set_war_end_year(): number;
}

class HistoryBook {
	public constructor(private readonly ww: WorldWar) {}
}

class WW1 extends WorldWar {
	public get_leader_of_germany(): string {
		return "Wilhelm II";
	}
	public set_war_start_year(): number {
		return 1914;
	}
	public set_war_end_year(): number {
		return 1917;
	}
}

class WW2 extends WorldWar {
	public get_leader_of_germany(): string {
		return "Hitler";
	}
	public set_war_start_year(): number {
		return 1941;
	}
	public set_war_end_year(): number {
		return 1945;
	}
}