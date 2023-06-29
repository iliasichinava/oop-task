// Problem

interface King {
    defeat_enemy(): void;
    build_library(): void;
    lose(): void;
}

class DavitAghmashenebeli implements King {
    public defeat_enemy(): void {/* */}
    public build_library(): void {/* */}

    public lose(): void {
        throw new Error("Never happened");
    }
}

class Vakhtang_XI implements King {
    public defeat_enemy(): void {
        throw new Error("Never happened");
    }
    public build_library(): void {/* */}

    public lose(): void {/* */}
}

class Erekle_II implements King {
    public defeat_enemy(): void {/* */}
    public build_library(): void {
        throw new Error("Never happened");
    }
    public lose(): void {/* */}
}


// Solution

interface Conqueror {
    defeat_enemy(): void;
}

interface Builder {
    build_library(): void;
}

interface Defeated {
    lose(): void;
}

class DavitAghmashenebeli_SOLVED implements Conqueror, Builder {
    public defeat_enemy(): void {/* */}
    public build_library(): void {/* */}

    public lose(): void {
        throw new Error("Never happened");
    }
}

class Vakhtang_XI_SOLVED implements Builder, Defeated {
    public defeat_enemy(): void {
        throw new Error("Never happened");
    }
    public build_library(): void {/* */}

    public lose(): void {/* */}
}

class Erekle_II_SOLVED implements Defeated, Conqueror {
    public defeat_enemy(): void {/* */}
    public build_library(): void {
        throw new Error("Never happened");
    }
    public lose(): void {/* */}
}
